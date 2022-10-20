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
const signUpModalContainer = document.querySelector(".SignUpModalContainer");
const signUpModal = document.querySelector(".SignUpModal");
const signUpEmail = document.querySelector("#SignUp_InputEmail");

function signUpModalOn() {
    signUpModalContainer.style.display = "flex";
    signUpModal.style.display = "block";
}

function signUpModalOff() {
    signUpModalContainer.style.display = "none";
    signUpModal.style.display = "none";
}

loginEmailBtn.addEventListener("click", () => {
    if(loginEmailAdd.value != "") {
        setTimeout(
            signUpModalOn() , 3000
        );
        signUpEmail.placeholder = loginEmailAdd.value;
    }
    else {
        alert("이메일 주소를 입력하세요.");
    }
});


/*-------------- SignUpModal 뒤로가기 ------------------ */
const signUpBackBtn = document.querySelector(".SignUpModal_BackBtn");

signUpBackBtn.addEventListener("click", () => {
    signUpModalOff();
});


/*-------------- SignUpModal Checkbox ----------------*/
const fullConsentChkBox = document.querySelector("#FullConsentChkBox");
const consentOver14ChkBox = document.querySelector("#ConsentItem_Over14ChkBox");
const consentTermOfSev = document.querySelector("#ConsentItem_TermsOfService");
const consentPersonInfo = document.querySelector("#ConsentItem_PersonalInformation");

function consentIsChked(consentChkbox) {
    const isChked = consentChkbox.checked;
    return isChked;
}

function consentChk(consentChkbox) {
    if (consentIsChked(consentChkbox) === false) {
        fullConsentChkBox.checked = false;
    }
    else if
    (
    consentIsChked(consentOver14ChkBox) === true &&
    consentIsChked(consentTermOfSev) === true &&
    consentIsChked(consentPersonInfo) === true
    ) {
        fullConsentChkBox.checked = true;
    }
}

fullConsentChkBox.addEventListener("click", () => {
    consentOver14ChkBox.checked = true;
    consentTermOfSev.checked = true;
    consentPersonInfo.checked = true;
})

consentOver14ChkBox.addEventListener("click", () => {
    consentChk(consentOver14ChkBox);
})

consentTermOfSev.addEventListener("click", () => {
    consentChk(consentTermOfSev);
})

consentPersonInfo.addEventListener("click", () => {
    consentChk(consentPersonInfo);
})

