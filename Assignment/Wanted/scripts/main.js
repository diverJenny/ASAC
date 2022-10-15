/* ---------- login modal ----------- */
const loginModal = document.getElementById("LoginModal");
const loginBtn = document.getElementById("LoginBtn");

loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

/* ---------- login modal Close ---------- */
const loginModalCloseBtn = document.querySelector(".LoginModal_CloseBtn");
loginModalCloseBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

/* ---------- login modal 이메일 입력 시 페이지 이동 ---------- */
const loginEmailBtn = document.querySelector(".EmailLoginBtn");
const loginEmailAdd = document.getElementById("InputEmail");
loginEmailBtn.addEventListener("click", () => {
    if(loginEmailAdd.value != "") {
        alert("login");
    }
    else {
        alert("이메일 주소를 입력하세요.");
    }
});