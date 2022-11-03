import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/searchBar.css";
import SearchTags from "../searchTags.json";

function SearchBar({ SetSearchBarOn }) {
  const [SearchItem, SetSearchItem] = useState("");

  const searchHandler = (e) => {
    console.log(e.currentTatget.value);
    // PaymentResponse.refreshFunction(e.currentTatget.value);
  };

  function enterKey() {
    if (window.event.keyCode == 13) {
      searchHandler();
      //   alert("enter");
    }
  }

  function SearchBarOff() {
    SetSearchBarOn(false);
  }

  function OutSideClick(e) {
    if (e.target.className === "SearchBar") SearchBarOff();
  }

  return (
    <>
      <div className="SearchBar" onClick={OutSideClick}>
        <div className="SearchBar_Container">
          <div className="SearchBy_Input_Container">
            <img
              className="SearchBy_Input_Icon"
              src={require("../images/search.png")}
              alt="search"
            />
            <input
              className="SearchInput"
              placeholder="#태그, 회사, 포지션 검색"
              onKeyUp={enterKey}
            />
          </div>
          <div className="SearchBy_Tags">
            <div className="SearchBy_SuggestedTags_Title">
              <h4>추천태그로 검색해보세요</h4>
              <Link to={"/"}>
                기업태그 홈 이동하기
                {/* <img src={require("../images/chevron-right.png")} alt="" /> */}
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                  ></path>
                </svg>
              </Link>
            </div>
            <ul className="SearchBy_Tags_List">
              {SearchTags.map((i) => (
                <li className="Search_TagItem">
                  <button className={`Search_TagItem_Btn ${i.tagClassName}`}>
                    {i.tagName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
