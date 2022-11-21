// redux에서 loginModal의 상태를 관리하는 아이
// 먼저 정해야 할것
// 1. action type 설정(액션명은 대문자로)
const OPEN_LOGIN_MODAL = "loginModalStatus/OPEN_LOGIN_MODAL";
const OFF_LOGIN_MODAL = "loginModalStatus/OFF_LOGIN_MODAL";
const OPEN_SIGNUP_MODAL = "loginModalStatus/OPEN_SIGNUP_MODAL";

 // 2. action 함수 생성
export const openLoginModal = () => ({
    type : OPEN_LOGIN_MODAL
})

export const offLoginModal = () => ({
    type : OFF_LOGIN_MODAL
})

export const openSignupModal = () => ({
    type : OPEN_SIGNUP_MODAL
})

// 3. 초기 상태 설정
const initialState = {
    loginModalStatus : 0
};

// 4. 어떤 상태를 받았는지에 따라 어떤 처리를 해줄지 분기처리(reducer)
function loginModalStatus(state=initialState, action) {
    switch (action.type) {
        case OPEN_LOGIN_MODAL:
            return{            
            ...state, // 기존 상태는 그대로 유지하면서
            loginModalStatus: 1 // 새롭게 상태 업데이트
            }
    
        case OFF_LOGIN_MODAL:
            return{
                ...state,
                loginModalStatus: 0
            }

        case OPEN_SIGNUP_MODAL:
            return{
                ...state,
                loginModalStatus: 2
            }
        default:
            return state // 기존 상태 그대로 반환
    }
} 

export default loginModalStatus;