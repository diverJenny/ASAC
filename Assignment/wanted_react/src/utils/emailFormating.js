export function isValidEmail(email) {
    // console.log("isValidEmail : " + email);
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // console.log(email.match(regExp)? true : false);
    return email.match(regExp)? true : false;
}