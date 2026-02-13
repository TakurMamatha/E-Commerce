// validators.js

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validatePassword(password) {
    return password.length >= 6;
}

export function validateRequired(value) {
    return value && value.trim() !== "";
}

export function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}
