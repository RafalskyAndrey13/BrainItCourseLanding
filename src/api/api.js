import db, {auth, facebookProvider, googleProvider} from '../firebase'
import {getCategories} from "../redux/reducers/categories-reducer";

export const api = {
    // getCategories() {
    //     return db.collection("Categories").get();
    // },

    addEnrollment(name, surname, phone, courseName) {
        return db.collection("Enrollments").add({name, surname, phone, courseName})
            .then(() => ({code: 200}))
            .catch(error => ({code: 400, error: error.message}))
    },

    signInWithEmail(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                return db.collection("Users").doc(user.user.email).get()
                    .then(user => {
                        console.log(user.data());
                        let data = user.data();
                        return {code: 200, user: {firstName: data.firstName, lastName: data.lastName, email: data.email, signed: "email"}}
                    })
                    .catch(error => ({code: 400, error: error.message}))
            })
            .catch(error => {
                return {code: 400, error: error.message}
            })
    },

    resetPasswordByEmail(email){
        return auth.sendPasswordResetEmail(email)
            .then(() => ({code: 200}))
            .catch(error => ({code: 400, error: error.message}))
    },

    logOut(){
        return auth.signOut()
            .then(() => ({code: 200}))
            .catch(error => ({code: 400, error: error.message}));
    },

    createUserWithEmail(email, password, firstName, lastName){
        return auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                return db.collection("Users").doc(email).set({
                    firstName,
                    lastName,
                    email
                })
                    .then(user => ({code: 200, user: {firstName, lastName, email, signed: 'email'}}))
                    .catch(error => ({code: 400, message: error.message}));
            })
            .catch(error => ({code: 400, message: error.message}));
    },

    signInWithGoogle(){
        return auth.signInWithPopup(googleProvider)
            .then(result => ({code: 200, user: {name: result.user.displayName, email: result.user.email, photo: result.user.photoURL, signed: "google"}}))
            .catch(error => ({code: 400, message: error.message}))
    },

    signInWithFacebook(){
        return auth.signInWithPopup(facebookProvider)
            .then(result => ({code: 200, user: {name: result.user.displayName, photo: result.user.photoURL, signed: "facebook"}}))
            .catch(error => ({code: 400, error: error.message}))
    },

    confirmPasswordReset(code, newPassword) {
        return auth.confirmPasswordReset(code, newPassword)
            .then(() => {
                return {code: 200};
            })
            .catch(error => {
                return {code: 400, error: error.message};
            })
    },

    getCourseByName(name) {
        console.log(name);
        return db.collection("Courses").where("title", "==", name).get()
            .then(result => {
                const response = [];
                result.forEach(doc => response.push(doc.data()));
                return {code: 200, course: response[0]}
            })
            .catch(error => ({code: 400, error: error.message}))
    },

    getInitialData(){
        return Promise.all(
            [db.collection("Categories").get(),
                    db.collection("Reviews").get(),
                    db.collection("Courses").orderBy("rate", "desc").limit(6).get(),
                    db.collection("Features").get(),
            ]
        ).then(results => {
            const data = {
                categories: [],
                reviews: [],
                popularCourses: [],
                features: [],
            };
            results[0].forEach(doc => data.categories.push(doc.data()));
            results[1].forEach(doc => data.reviews.push(doc.data()));
            results[2].forEach(doc => data.popularCourses.push(doc.data()));
            results[3].forEach(doc => data.features.push(doc.data()));

            return data;
        })
            .then(data => {
                return Promise.all(data.popularCourses.map(course => course.category.get()))
                    .then(categories => {
                        categories.forEach((category, index) => {
                            data.popularCourses[index].category = category.data()
                        });
                        return data;
                    })
            })
            .catch(error => console.log(error));
    }
};