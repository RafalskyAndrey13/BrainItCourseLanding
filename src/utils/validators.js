export const requiredField = value => {
    if (!value) return 'This field is required'
};

export const confirmPasswordMatch = (value, allValues) =>
    value !== allValues.register_password ? 'Passwords don\'t match' : undefined;

export const passwordMatch = (value, allValues) =>
    value !== allValues.register_confirm ? 'Passwords don\'t match' : undefined;

export const passwordMatchPattern = value => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/.test(value)){
        return 'Password must contain minimum eight characters, ' +
            'at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&#)'
    }
};

export const emailMatchPattern = value => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)){
        return "Invalid email format";
    }
}