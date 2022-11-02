import "../css/base_page.css";
import "../css/dev_recruit_main.css";
import Header from "../component/header";
import LoginModal from "../component/loginModal";
import JobListTag from "../jobListTag.json";
import CompanyHiringList from "../company_HiringList.json";
import recruitList from "../recruitList.json";
import { Link } from "react-router-dom";

function DevRecruitMain() {
  return (
    <>
      <LoginModal />
      <div className="Page">
        <Header />
        <div className="JobList_Search_Wrapper">
          <div className="JobList_Search_Navigation">
            <div className="JobGroup_btn_container">
              <button className="JobGroup_btn">
                <span className="JobGroup_Title">개발</span>
                <span className="JboGroup_More">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="#767676"
                      fillRule="nonzero"
                      d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <div className="JobCategory_btn_container">
                <button className="JobCategory_btn">
                  <span className="JobCategory_Title">개발 전체</span>
                  <span className="JobCategory_More">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="#767676"
                        fillRule="nonzero"
                        d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="JobList_Search_bar">
          <div className="JobList_Search_Filter_SelectGroup">
            <div className="JobList_Search_Filter">
              <div className="select_location">
                <button className="select_location_btn">
                  <span>지역</span>
                  <span>한국</span>
                </button>
              </div>
              <div className="select_career">
                <button className="select_career_btn">
                  <span>경력</span>
                  <span>전체</span>
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="select_skill">
                <button className="select_skill_btn">
                  <span>기술스택</span>
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="JobList_Search_Filter_SelectView">
              <div className="select_view">
                <button className="select_view_btn">
                  응답률순
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <hr className="divider" />

          <div className="JobList_Tag_Filter">
            <div className="JobList_Tag_Slider">
              <div className="JobList_Tag_Slider_List">
                {JobListTag.map((i) => (
                  <div className="JobList_Tag_btn" id={i.tagId}>
                    <span>
                      {i.tagName}
                      <img src={i.img} alt={i.tagName} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="JobList_Tag_MoreBtn">
              <span className="JobList_Tag_MoreBtn_Icon">
                <svg
                  className="JobList_Tag_MoreBtn_Icon_svg"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="Main">
          <div className="JobList_BookmarkBtn">
            <a href="">
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                ></path>
                <path
                  d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                  fill="#36f"
                ></path>
              </svg>
              <span>북마크 모아보기</span>
              <svg>
                <path
                  fill="currentColor"
                  d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="CompaniesActivelyHiring">
            <h3 className="CompaniesActivelyHiring_Title">
              적극 채용 중인 회사
            </h3>
            <div className="CompaniesActivelyHiring_List">
              {CompanyHiringList.map((i) => (
                <div>
                  <Link to={"/RecruitDetail/" + i.id}>
                    <div className="CompaniesActivelyHiring_Company_Img">
                      <img src={i.img} alt="" />
                    </div>
                    <div className="CompaniesActivelyHiring_Company_Info">
                      <img src={i.companyImg} alt={i.company} />
                      <span>{i.company}</span>
                      <span>{i.recruitPosition}개 포지션</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="RecruitList_Container">
            <ul className="RecruitList">
              {recruitList.map((i) => (
                <li>
                  <div className="RecruitList_Content">
                    {/* <Link to={"/RecruitDetail/" + i.id}> */}
                    {/* 탬플릿 리터럴을 사용한 아래 코드와 동일 */}
                    <Link to={`/RecruitDetail/${i.id}`}>
                      <div className="RecruitList_Content_Img">
                        <img src={i.img} alt={i.company} />
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="https://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                            fill="white"
                          ></path>
                          <path
                            d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                            fill="black"
                            fillOpacity="0.25"
                          ></path>
                        </svg>
                      </div>
                      <div className="RecruitList_Content_Info">
                        <span className="RecruitList_Content_Info_Position">
                          {i.position}
                        </span>
                        <span className="RecruitList_Content_Info__CompanyName">
                          {i.company}
                        </span>
                        {i.responseLevel !== "" ? (
                          <div className="RecruitList_Content_Info_ResponseLevelLabel">
                            <span>응답률 매우 높음</span>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="RecruitList_Content_Info_Location">
                          <span>{i.city}</span>
                          <span>·</span>
                          <span>{i.company}</span>
                        </div>
                        <span className="RecruitList_Content_Info_Reward">
                          {i.reward}
                        </span>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevRecruitMain;
