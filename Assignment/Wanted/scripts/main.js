/* ---------- login modal ----------- */
const loginModal = document.getElementById("LoginModal");
const loginBtn = document.getElementById("LoginBtn");
const loginModalBackground = document.querySelector(".LoginModalContainer");

function modalOn() {
    loginModalBackground.style.display = "flex";
    loginModal.style.display = "block";
};

loginBtn.addEventListener("click", e => {
    modalOn();
});

/* ---------- login modal Close ---------- */
const loginModalCloseBtn = document.querySelector(".LoginModal_CloseBtn");

function modalOff() {
    loginModalBackground.style.display = "none";
    loginModal.style.display = "none";
};

loginModalCloseBtn.addEventListener("click", () => {
    modalOff();
});

function isModalOn() {
    return loginModal.style.display === "block";
};

window.addEventListener("keyup", e => {
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }
})

window.addEventListener("click", e => {
    e.target === loginModalBackground ? modalOff() : false
});

/* ---------- login modal 이메일 입력 시 3초 후 SignUpModal 띄우기 ---------- */
const loginEmailBtn = document.querySelector(".EmailLoginBtn");
const loginEmailAdd = document.getElementById("InputEmail");
const modalBody = document.querySelector(".ModalBldy");
const roadingStatus = document.querySelector(".roadingStatus");

loginEmailBtn.addEventListener("click", () => {
    if(loginEmailAdd.value != "") {
        setTimeout(
            "location.href = 'recruitmentDetailPage.html'" , 3000
        );
    }
    else {
        alert("이메일 주소를 입력하세요.");
    }
});


/*-------------- SignUpModal 띄우기 ------------------ */
