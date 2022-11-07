export function isValidPassword(password) {
    // console.log("password:" + password);
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    // console.log(password.match(regExp)? true : false);
    return password.match(regExp)? true : false;
}

export function isSamePassword(password, passwordConfirm) {
    // console.log(password === passwordConfirm ? true : false);
    return password === passwordConfirm ? true : false;
}