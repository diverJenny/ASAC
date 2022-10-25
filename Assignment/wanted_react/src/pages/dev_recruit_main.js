import "../css/dev_recruit_main.css";
import Header from "../component/header";
import LoginModal from "../component/loginModal";

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
                      fill-rule="nonzero"
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
                        fill-rule="nonzero"
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
                <div className="JobList_Tag_btn" id="JobList_Tag_Salary">
                  <span>
                    연봉이 최고의 복지
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="연봉이 최고의 복지"
                    />
                  </span>
                </div>
                <div className="JobList_Tag_btn" id="JobList_Tag_WorkFromHome">
                  <span>
                    재택근무
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="재택근무"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_ResignationRate"
                >
                  <span>
                    퇴사율 10% 이하
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="퇴사율 10% 이하"
                    />
                  </span>
                </div>
                <div className="JobList_Tag_btn" id="JobList_Tag_FastGrowing">
                  <span>
                    급성장 중
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="급성장 중"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_MilitaryServiceSpecial"
                >
                  <span>
                    병역특례
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="병역특례"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_FiftyPeopleOrLess"
                >
                  <span>
                    50인 이하️
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75"
                      alt="50인 이하️"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_OverFiftyPeople"
                >
                  <span>
                    50인 이상️
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75"
                      alt="50인 이상️"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_MoreThanFiveYears"
                >
                  <span>
                    업력 5년 이상
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75"
                      alt="업력 5년 이상"
                    />
                  </span>
                </div>
                <div className="JobList_Tag_btn" id="JobList_Tag_FlexibleWork">
                  <span>
                    유연근무
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="유연근무"
                    />
                  </span>
                </div>
                <div className="JobList_Tag_btn" id="JobList_Tag_FreeVacation">
                  <span>
                    자유로운 휴가
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="자유로운 휴가"
                    />
                  </span>
                </div>
                <div className="JobList_Tag_btn" id="JobList_Tag_RewardForWork">
                  <span>
                    일한만큼 받는 보상
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F472333e8-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="일한만큼 받는 보상"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_HorizontalCulture"
                >
                  <span>
                    수평적 문화
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F78563d98-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="수평적 문화"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_IndustryEmerging"
                >
                  <span>
                    요즘 뜨는 산업
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4e1b135a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="요즘 뜨는 산업"
                    />
                  </span>
                </div>
                <div
                  className="JobList_Tag_btn"
                  id="JobList_Tag_MealsAndSnacksProvided"
                >
                  <span>
                    식사·간식 제공
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F53ca893e-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      alt="식사·간식 제공"
                    />
                  </span>
                </div>
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
              <svg>
                <defs>
                  <path
                    id="bookmarkIconFill"
                    d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
                  ></path>
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(.188)">
                  {/* <use fill="currentColor" xlink:href="#bookmarkIconFill"></use> */}
                </g>
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
              <div>
                <a href="#">
                  <div className="CompaniesActivelyHiring_Company_Img">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5148%2Fzqoq1ivkli8iioas__400_400.jpg&w=400&q=75"
                      alt=""
                    />
                  </div>
                  <div className="CompaniesActivelyHiring_Company_Info">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e2c18b96.jpg&w=100&q=75"
                      alt="나인코퍼레이션"
                    />
                    <span>나인코퍼레이션</span>
                    <span>6개 포지션</span>
                  </div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="CompaniesActivelyHiring_Company_Img">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F805%2Fqmeqtcb0lrqseulw__400_400.png&w=400&q=75"
                      alt=""
                    />
                  </div>
                  <div className="CompaniesActivelyHiring_Company_Info">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e2774c2c.jpg&w=100&q=75"
                      alt="해줌"
                    />
                    <span>해줌</span>
                    <span>5개 포지션</span>
                  </div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="CompaniesActivelyHiring_Company_Img">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F216%2Fpdgjch6eg5ajfdfm__400_400.jpg&w=400&q=75"
                      alt=""
                    />
                  </div>
                  <div className="CompaniesActivelyHiring_Company_Info">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.799382a7.jpg&w=100&q=75"
                      alt="세컨신드롬"
                    />
                    <span>화해(버드뷰)</span>
                    <span>14개 포지션</span>
                  </div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="CompaniesActivelyHiring_Company_Img">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10785%2Fxyb93wefrghj3ppy__400_400.png&w=400&q=75"
                      alt=""
                    />
                  </div>
                  <div className="CompaniesActivelyHiring_Company_Info">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.ab46764a.png&w=100&q=75"
                      alt="로민"
                    />
                    <span>로민</span>
                    <span>11개 포지션</span>
                  </div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="CompaniesActivelyHiring_Company_Img">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F79%2Fno3ey0e5mjbismfq__400_400.jpg&w=400&q=75"
                      alt=""
                    />
                  </div>
                  <div className="CompaniesActivelyHiring_Company_Info">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.cc473dbf.jpg&w=100&q=75"
                      alt="로민"
                    />
                    <span>원티드랩</span>
                    <span>18개 포지션</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="RecruitList_Container">
            <ul className="RecruitList">
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31699%2F0dxtcoprgjpv9hwf__400_400.jpg&w=400&q=75"
                        alt="밴플"
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        iOS 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        밴플
                      </span>
                      <div className="RecruitList_Content_Info_ResponseLevelLabel">
                        <span>응답률 매우 높음</span>
                      </div>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F13294%2F9hn1fne7p3vl2qzy__400_400.jpg&w=400&q=75"
                        alt="토모큐브"
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        소프트웨어 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        토모큐브
                      </span>
                      <span className="RecruitList_Content_Info_ResponseLevelLabel">
                        응답률 매우 높음
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22152%2Fzfcvnwqkqwrddima__400_400.png&w=400&q=75"
                        alt="비팩토리(B Factory)"
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        머신러닝 엔지니어
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        비팩토리(B Factory)
                      </span>
                      <span className="RecruitList_Content_Info_ResponseLevelLabel">
                        응답률 매우 높음
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F13152%2Fwmppturqz9kuz3ty__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        [CB개발실] 웹 서비스 개발자(전문계약직)
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        나이스평가정보
                      </span>
                      <span className="RecruitList_Content_Info_ResponseLevelLabel">
                        응답률 매우 높음
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22504%2Ffjwzfbmvnplelloe__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        Backend Engineer
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        카카오브레인
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>경기</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F324%2Fbip8i0czqz1cvid8__400_400.jpeg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        Game Platform Server Engineer
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        라인플러스(LINE Plus)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>경기</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F20947%2Fizyvwevuqdjqkvwu__400_400.png&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        서버 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        카카오페이증권(kakaopay증권)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>경기</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F507%2Fjqsf97xt6jf1felq__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        백엔드 시니어 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        줌인터넷(ZUM)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F179%2Ffgaf0txpsk21hoon__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        Software Engineer, Backend
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        버킷플레이스(오늘의집)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3801%2Fdkn0iudmk3tnbjvo__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        [트리플] 서비스 백엔드 엔지니어
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        인터파크
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>경기</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F29128%2F77wqjrmm14diqegx__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        배민서비스실 배민서비스개발팀 서버 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        우아한형제들(배달의민족,Tech)
                      </span>
                      <span></span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F11743%2F7yxfhfzqmm0i0zqg__400_400.png&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        프론트엔드 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        구름
                      </span>
                      <div className="RecruitList_Content_Info_ResponseLevelLabel">
                        <span>응답율 매우 높음</span>
                      </div>
                      <div className="RecruitList_Content_Info_Location">
                        <span>경기</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F166%2Foxpffvcrygkpgv2i__400_400.png&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        소프트웨어 엔지니어(프론트, 풀스택) (2년 이상)
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        퍼블리(PUBLY)
                      </span>
                      <div className="RecruitList_Content_Info_ResponseLevelLabel">
                        <span>응답율 매우 높음</span>
                      </div>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F24000%2Fwd8p4txpqkxefjgh__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        Server Developer (Platform)
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        토스뱅크
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F52%2F17418_2_0.abfaf8d8__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        Back-end Engineer - Platform
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        야놀자Tech(R&D)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F700%2Fpx4vydsxjapo1hu6__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        Node.js Engineer(Back-end)
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        워시스왓(세탁특공대)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2221%2Fqb3mjyiaeytoyc7x__400_400.png&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        웹 백엔드 개발자
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        넷마블
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8953%2Fbcpmxxm8aokqpzsr__400_400.png&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        백엔드 개발자(Java)
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        의식주컴퍼니(런드리고)
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F3801%2Fdkn0iudmk3tnbjvo__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        [항공서비스] Back-end (java)
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        인터파크
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="RecruitList_Content">
                  <a href="#">
                    <div className="RecruitList_Content_Img">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F20804%2Fekux6kdvc3kzyafe__400_400.jpg&w=400&q=75"
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                          fill="black"
                          fill-opacity="0.25"
                        ></path>
                      </svg>
                    </div>
                    <div className="RecruitList_Content_Info">
                      <span className="RecruitList_Content_Info_Position">
                        [야나두(플랫폼)] 백엔드 개발
                      </span>
                      <span className="RecruitList_Content_Info__CompanyName">
                        야나두
                      </span>
                      <div className="RecruitList_Content_Info_Location">
                        <span>서울</span>
                        <span>·</span>
                        <span>한국</span>
                      </div>
                      <span className="RecruitList_Content_Info_Reward">
                        채용보상금 1,000,000원
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevRecruitMain;
