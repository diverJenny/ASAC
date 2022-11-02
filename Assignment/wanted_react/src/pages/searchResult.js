import Header from "../component/header";
import LoginModal from "../component/loginModal";
import "../css/searchResult.css";
import SearchTags from "../searchTags.json";

function SearchResult() {
  return (
    <>
      <LoginModal />
      <div className="Page">
        <Header />
        <div className="SearchResultWrapper">
          <div className="SearchResultHeaderContainer">
            <div className="SearchResultHeader">
              <div className="SearchResultTitle">
                <h2>태그를 선택해 기업을 찾아보세요!</h2>
                <div className="ShowAllTagsToSearchBtn">
                  전체보기
                  <img src={require("../images/arrow-down-3101.png")} alt="" />
                </div>
              </div>
            </div>
            <div className="SearchSuggestionContainer">
              <h4>추천</h4>
              <ul className="SearchSuggestionList">
                {SearchTags.map((i) => {
                  <li className="SearchSuggestionItem"></li>;
                })}
              </ul>
            </div>
            <div className="SearchResultListWrapper">
              <div className="SearchResultListContainer">
                <ul className="SearchResultList">
                  <li className="SearchResultItem"></li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
