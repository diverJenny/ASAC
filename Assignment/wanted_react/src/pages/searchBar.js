import { Link } from "react-router-dom";
import "../css/searchBar.css";

function SearchBar() {
    return (
        <>
            <div className="SearchBar">
                <div className="SearchBar_Container">
                    <form>
                        <input type={"Search"} className="SearchInput" placeholder="#태그, 회사, 포지션 검색" />
                    </form>
                    <div className="SearchTagContainer">
                        <h4>추천태그로 검색해보세요</h4>
                        <Link to={"/"} className="CorporateTagHomeLink">
                            기업태그 홈 이동하기
                        </Link>
                        <ul className="">
                            <li className="SearchTagListItem">
                                <button>
                                    #퇴사율5%이하
                                </button>
                            </li>
                            <li className="SearchTagListItem">
                                <button>
                                #자율복장
                                </button>
                            </li>
                            <li className="SearchTagListItem">
                                <button>
                                #음료
                                </button>
                            </li>
                            <li className="SearchTagListItem">
                                <button>
                                    #연봉상위2~5%
                                </button>
                            </li>
                            <li className="SearchTagListItem">
                                <button>
                                    #리프레시휴가
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar;