import { Link } from "react-router-dom";

function SearchResultList({ filterData }) {
    return (
        <>
            {filterData.map((data) => (
                <Link to={"/"} className="CompanyItem">
                    <div className="CompanyItem_CompanyInfo">
                        <img className="CompanyItem_CompanyImg" src={data.companyImg}/>
                        <h5 className="CompanuyItem_Company"></h5>
                    </div>
                    <div className="CompanyItem_tags">
                        <span></span>
                    </div>
                    <button className="CompanyItem_fallowBtn">
                        <span>팔로우</span>
                    </button>
                </Link>
            ))
            }
        </>
    )
}

export default SearchResultList;