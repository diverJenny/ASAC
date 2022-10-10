/* ----- Top Banner Slide -----*/
const TopBannerWrapper = document.querySelector('.TopBanner_list_wrapper');
const TopBannerList = document.querySelector('.TopBanner_list_wrapper_container');
const TopBannerContents = document.querySelectorAll('.TopBanner_list_contents');
// 현재 슬라이드 화면 인덱스
let currentIndex = 0;

TopBannerContents.forEach((inner) => {
    // TopBanner_list_contents의 너비 = TopBannerWrapper의 너비
    inner.style.width = `${TopBannerWrapper.clientWidth}px`;
});

// TopBanner_list_wrapper_container의 너비 = contents너비 * 컨텐츠 개수
TopBannerList.style.width = `${TopBannerWrapper.clientWidth * TopBannerContents.length}px`;

// button event 등록
const topBannerButtonLeft = document.querySelector('.Left_arrow');
const topBannerButtonRight = document.querySelector('.Right_arrow');

topBannerButtonLeft.addEventListener('click', () => {
    console.log("leftButton");
    currentIndex--;
    // index 값이 0보다 작아지면 0으로 변경
    currentIndex = currentIndex < 0 ? 0 : currentIndex;
    TopBannerList.style.marginLeft = `-${TopBannerWrapper.clientWidth * currentIndex}px`;
    clearInterval(interval);
    interval = getInterval();
});

topBannerButtonRight.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex >= TopBannerContents.length ? TopBannerContents.length -1 : currentIndex;
    TopBannerContents.style.marginLeft = `-${TopBannerWrapper.clientWidth * currentIndex}px`;
    clearInterval(interval);
    interval = getInterval();
})

const getInterval = () => {
    return setInterval(() => {
        currentIndex++;
        currentIndex = currentIndex >= TopBannerContents.length ? 0 : currentIndex;
        TopBannerList.style.marginLeft = `-${TopBannerWrapper.clientWidth * currentIndex}px`;
    }, 2000);
}

let interval = getInterval();