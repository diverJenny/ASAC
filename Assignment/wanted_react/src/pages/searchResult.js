import { Link, useLocation } from "react-router-dom";
import "../css/searchResult.css";
import SearchTags from "../searchTags.json";
import searchCompanyByTag from "../searchCompanyByTag.json";
import { useEffect } from "react";
import SearchResultList from "../component/searchResultList";

function SearchResult() {
  const searchWord = useLocation().state;
  const filterData = [];

  useEffect(() => {
  searchCompanyByTag.forEach((list) => {
    list.tags.forEach((tag) => {
      if(tag === "#"+searchWord) {
        filterData.push(list);
      }
    })
  });

  // useEffect() forEach는 아래와 동일하게 동작한다.
/*   for(int list=0; list<searchCompanyByTag.length(); list++) {
  } */
  // console.log(filterData);
  }, [searchWord]);
  

  return (
    <>
      <div className="Page">
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
            <ul className="SearchSuggestion_Tags_List">
              {SearchTags.map((i) => (
                <li className="SearchSuggestionItem">
                  <button className={`SearchSuggestion_TagItem_Btn`}>
                  {`#${i.tagName}`}
                  </button>
                </li>
            ))}
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
        
        <div className="SearchResultWrapper">
          <div className="SearchResult_Company_Wrapper">
            <div className="SearchResult_CompanyList">

             {/* 화면이 랜더링 되고나서 filterData가 나오기 때문에 바로 나오지 않는다.
             컴포넌트로 분리하여 따로 가져온다. */}
            <SearchResultList filterData={filterData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
