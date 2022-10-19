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

/* ---------- login modal 이메일 입력 시 3초 후 페이지 이동 ---------- */
const loginEmailBtn = document.querySelector(".EmailLoginBtn");
const loginEmailAdd = document.getElementById("InputEmail");
const modalBody = document.querySelector(".ModalBldy");
const roadingStatus = document.querySelector(".roadingStatus");


function roading() {
    roadingStatus.style.display = "flex";
}

loginEmailBtn.addEventListener("click", () => {
    if(loginEmailAdd.value != "") {
        roading();
        setTimeout(
            "location.href = 'recruitmentDetailPage.html'" , 3000
        );
    }
    else {
        alert("이메일 주소를 입력하세요.");
    }
});


/* ----- Slide Top Banner ----- */
/* function Slider(target) {
    
    let index = 1;
    let isMoved = true;
    const speed = 1000;

    const transform = "trnasform " + speed / 1000 + "s";
    let translate = (i) => "translateX(-" + 100 * i + "%)";

    // 슬라이드 배너 영역
    const slider = document.querySelector(target);
    const sliderRect = slider.getClientRects()[0];
    slider.style["ovreflow"] = "hidden";

    // 배너 컨테이너
    const container = document.createElement("div");
    container.style["display"] = "flex";
    container.style["flex-direction"] = "row";
    container.style["width"] = sliderRect.width + "px";
    container.style["height"] = sliderRect.height + "px";
    container.style["transform"] = translate(index);

    // 슬라이드 화면 리스트
    let boxes = [].slice.call(slider.children);
    boxes = [].concat(boxes[boxes.length - 1], boxes, boxes[0]);

    // 슬라이드 화면 css
    const size = boxes.length;
    for (let i = 0; i < size; i++) {
        const box = boxes[i];
        box.style["flex"] = "none";
        box.style["flex-wrap"] = "wrap";
        box.style["width"] = "100%";
        box.style["height"] = "100%";
        container.appendChild(box.cloneNode(true));
    }

    // 처음 - 마지막 화면 눈속임
    container.addEventListener("transitionstart", function() {
        isMoved = false;
        setTimeout(() => {
            isMoved = true;
        }, speed);
    });
    
    container.addEventListener("transitionend", function() {
        // 처음으로 순간이동
        if (index === size - 1) {
            index = 1;
            container.style["transition"] = "none";
            container.style["transform"] = translate(index);
        };

        // 마지막으로 순간이동
        if (index === 0) {
            index = size - 2;
            container.style["transition"] = "none";
            container.style["transform"] = translate(index);
        };
    });

// 슬라이드 붙이기
slider.innerHTML = "";
slider.appendChild(container);

    return {
        move: function (i) {
            if (isMoved === true) {
                index = i;
                container.style["transition"] = transform;
                container.style["transform"] = translate(index);
            }
        },
        next: function () {
            if (isMoved === true) {
                index = (index + 1) % size;
                container.style["transition"] = transform;
                container.style["transform"] = translate(index);
            }
        },
        prev: function () {
            if (isMoved === true) {
                index = index === 0 ? index + size : index;
                index = (index - 1) % size;
                container.style["transition"] = transform;
                container.style["transform"] = translate(index);
            }
        }
    }
}

setInterval(() => {
    new Slider(".TopBanner_list_wrapper_container").next();
}, 1000); */

/* const topBannerContainer = document.querySelector(".TopBanner_list_wrapper_container");
var firstItemClone = topBannerContainer.firstChild.cloneNode(true);
topBannerContainer.appendChild(firstItemClone);

function topBannermove() {
    let curIndex = 0;
    
    setInterval(() => {
        topBannerContainer.style.transition = '0.2s';
        topBannerContainer.transform = "translate3d(-"+200*(curIndex+1)+"px, 0px, 0px)";

        curIndex++;

        if(curIndex === 10) {
            setTimeout(() => {
                topBannerContainer.transition = '0s';
                topBannerContainer.transform = "translated3d(0px, 0px, 0px)";
            }, 201)
            curIndex = 0;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    topBannermove();
}); */