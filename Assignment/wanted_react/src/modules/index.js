// reducer는 하나만 존재하는 게 원칙
// reducer를 하나로 묶어서 root reducer로 만들어서 사용
import { combineReducers } from "redux";
import loginModalStatus from "./loginModalStatus";
import bookMarkStatus from "./bookMarkStatus";

const rootReducer = combineReducers({
  loginModalStatus, // reducer가 추가되면 이곳에 나열해주고 root reducer로 사용
  bookMarkStatus,
});

export default rootReducer;
