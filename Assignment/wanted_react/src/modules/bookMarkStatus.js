// redux에서 북마크 상태를 관리하는 모듈

// 1. action type 설정(액션 이름은 대문자로)
const ADD_BOOKMARK = "bookMarkStatus/ADD_BOOKMARK";
const DELETE_BOOKMARK = "bookMarkStatus/DELETE_BOOKMARK";

// 2. action 함수 생성
export const addBookMark = (id) => ({
  type: ADD_BOOKMARK,
  id: id
});

export const deleteBookMark = (id) => ({
  type: DELETE_BOOKMARK,
  id: id
})

// 3. 초기 상태 설정
const initialState = {
  bookMarks: []
};

// 4. 받은 상태에 따른 분기처리
function bookMarkStatus(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        bookMarks: [...state.bookMarks , action.id]
      };
    
    case DELETE_BOOKMARK:
      return {
        bookMarks: state.bookMarks.filter((element) => element !== action.id)
      };

    default:
      return state;
  }
}

export default bookMarkStatus;