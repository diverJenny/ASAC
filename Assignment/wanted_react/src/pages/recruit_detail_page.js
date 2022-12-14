import "../css/base_page.css";
import "../css/recruit_detail_page.css";
import Header from "../component/header";
import LoginModal from "../component/loginModal";
import Footer from "../component/footer";
import RecruitDetailTag from "../recruitDetailTag.json";
import RecruitDetailPosition from "../recruitDetailPosition.json";
import RecruitSkill from "../recruitDetail_SkillAndTool.json";

function RecruitDetail() {
  return (
    <>
      <LoginModal />
      <div className="Page">
        <div className="Main">
          <div className="JobDetail_Wrapper">
            <div className="JobDetail_Content">
              <div className="JobDetail_Content_imgs">
                <button className="JobDetail_Content_imgs_Arrow JobDetail_Content_imgs_leftArrow">
                  <svg
                    className="SvgIcon_SvgIcon__root__svg__DKYBi"
                    viewBox="0 0 18 18"
                  >
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </button>
                <button className="JobDetail_Content_imgs_Arrow JobDetail_Content_imgs_rightArrow">
                  <svg
                    className="SvgIcon_SvgIcon__root__svg__DKYBi"
                    viewBox="0 0 18 18"
                  >
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </button>
                <div className="JobDetail_Content_img">
                  <img
                    src={require("../images/JobDetail/블루비커.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="JobDetail_Content_Header">
                <h2>웹 프론트엔드 개발자(React)</h2>
                <a className="JobDetail_Content_CompanyName" href="#">
                  블루비커
                </a>
                <button className="JobDetail_Content_ResponeseLevel">
                  응답률 높음
                </button>
                <div className="JobDetail_Content_CompanyLocation">
                  <span>서울</span>
                  <span>·</span>
                  <span>한국</span>
                </div>
                <div className="JobDetail_Content_Tags">
                  <ul className="JobDetail_Content_Tags_List">
                    {RecruitDetailTag.map((i) => (
                      <li>
                        <a href="#">{i.tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="JobDetail_Content_DescriptionWrapper">
                <div className="JobDetail_Content_Description">
                  <p>
                    ＜서비스 소개＞ ✓ Medmap – 메디컬 지도를 펼치세요! 메드맵은
                    의료진과 환자간 커뮤니케이션을 도와주는 솔루션입니다.
                    【블루비커는】 블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을
                    운영하고 있는 스타트업입니다. 환자와 의료진의 효과적인
                    커뮤니케이션의 새 기준을 제시하며 메디컬 커뮤니케이션
                    솔루션을 발전시켜 나가고 있습니다. Medmap은 정확하고 다양한
                    3D 메디컬 콘텐츠를 제공하여 시술 원리와 과정을 쉽게 설명할
                    수 있도록 도와줍니다. 또한 환자의 이해를 돕고 신뢰도를 향상
                    시키며 재방문율을 높일 수 있습니다. 블루비커는 자유롭고
                    수평적인 분위기에서 각 분야 전문가인 동료들과 최대한의
                    능력을 발휘하며 함께하고 있습니다. 원하는 시간과 장소, 언제
                    어디서나, 블루비커와 함께 할 수 있습니다. 블루비커는 의료
                    분야 커뮤니케이션 서비스의 신규 개발과 고도화를 진행하고
                    있습니다. 다양한 최신 기술을 시도하고 접하실 수 있습니다.
                    저희 회사에 관심이 있다면 언제든지 귀한 능력을 받아들일
                    준비가 되어있습니다. 많은 지원 부탁드립니다. 【빠르게
                    성장하고 있습니다】 • 보건산업진흥원 혁신창업 멤버 선정 -
                    2019 • 디캠프 - 디데이 출전 - 2019 • 정주영 창업 경진 대회
                    우수상 - 2020 • 마이크로소프트 스타트업 프로그램 선발 -2020
                    • 소풍벤처스, 블루포인트 파트너스 시드 투자유치 - 2019/2020
                    • 청년창업사관학교 선발 서울 - 2021 • TIPS 프로그램 선정 -
                    2021 • 고려대학교구로병원 개방형 실험실 실증사업 선정 - 2022
                    • 리벤처스 Pre-A 투자유치 - 2022 【언론에서 소개된
                    블루비커】 • 블루비커, '세계보건의 날' 맞아 메디컬 일러스트
                    플랫폼 공식 론칭(2020.04.16)
                    http://kr.aving.net/news/articleView.html?idxno=1564478 •
                    아이쿱-블루비커, 3D 환자 교육 콘텐츠 제휴 (2020.08.25)
                    https://www.khanews.com/news/articleView.html?idxno=204038 •
                    메디컬 커뮤니케이션 스타트업 ‘블루비커’, 마이크로소프트
                    애드인 공식 출시(2021.02.25)
                    https://platum.kr/archives/158548 주요업무 ✓ 블루비커와 함께
                    한국을 넘어 글로벌 무대에서도 메디컬 커뮤니케이션을 혁신 할
                    "웹 프론트 개발자"를 모십니다! 【주요업무】 • React 기반 웹
                    프론트엔드 개발 • 서비스 코드 최적화 및 성능 개선 • 운영
                    서비스의 유지보수 및 신규 서비스 론칭 • 주니어 개발자와 협업
                    [개발환경] • 사용언어: React.js, Next.js, Redux • 개발환경
                    및 도구: Github, Postman, Azure Cloud 자격요건 【자격요건】
                    • 웹 개발경력이 4년 이상이신 분 • React 전문성을 보유하신 분
                    • Modern Web, JavaScript, Typescript에 대한 깊은 이해가
                    있으신 분 • Github을 이용한 협업이 가능하신 분 • 다른 팀과
                    협업 및 커뮤니케이션에 능숙하신 분 • 성장하는 스타트업에서
                    함께 의미 있는 결과를 만들어 나가고 싶으신 분 우대사항
                    【우대사항】 • 요구사항을 파악하여 데이터 모델과 설계가
                    가능하신 분 • 기획, 디자인, 백엔드와 능동적인 협업 및
                    커뮤니케이션이 가능하신 분 • 주니어 개발자를 리딩하고 멘토링
                    가능하신 분 혜택 및 복지 【복지 및 혜택】 • 여름 방학, 겨울
                    방학 ▶여름방학 3일, 겨울방학 3일 연차에 따른 휴가비를 추가
                    지원합니다. • 자율출퇴근제 ▶자율적인 출퇴근 시간 및
                    원격근무가 가능 합니다. • 자기계발비 지원 ▶세미나, 워크샵,
                    컨퍼런스, 업무 관련 도서구입비 등 팀원의 성장을 응원합니다.
                    • 건강검진비 지원 ▶ 연 1회 종합건강검진 비용을 지원해
                    드립니다. • 최고 사양의 개인장비 지원 ▶ iMac, Macbook Pro,
                    데스크탑, 노트북 등 원하는 개인별 맞춤 디바이스 제공하여
                    최고의 업무환경을 제공해 드립니다. •편리한 교통 ▶ 1,4호선
                    서울역과 연결된 오피스 빌딩 •공유오피스 ▶커뮤니티 매니저가
                    상시 관리하는 최신 시설의 오피스에서 근무합니다. (에스프레소
                    머신, Tea, 간식 무제한 제공) •청년내일채움공제 ▶ 지원 대상인
                    모든 분들께 청년내일채움공제 가입 • 경조사비 지원 ▶ 구성원
                    경조사 발생 시 근조화 및 경조비 지원해 드립니다. • 자유로운
                    연차/반차 사용 ▶ 업무 스케쥴만 괜찮다면 언제든지 사용
                    가능합니다. • 스톡옵션 부여 ▶ 기여한 만큼 인정받아요. 성과에
                    따라 스톡옵션 부여해 드립니다. • 리프레쉬 휴가 ▶3년, 5년,
                    7년 근속 시 리프레쉬 휴가를 제공합니다. ＜블루비커 개발팀
                    소개＞ ✓ 저희 개발팀은 팀원 모두 새로운 기술과 방법을
                    도입하는데 주저하지 않고, 신기술에 대한 스터디와 공유를
                    즐기며 일하고 있습니다. 합류하시면 자율성과 소통을 바탕으로
                    좋은 동료들과 함께 일하는 기쁨을 느끼실 수 있을 것이라
                    확신합니다. 현재 개발팀은 백엔드, 프론트엔드, 그래픽스,
                    Hololens 2, 네이티브 앱, 클라우드, 데이터베이스 파트로
                    구성되어 있습니다. 개발 팀은 내부 기획 파트, 디자인 파트,
                    그래픽스, 아티스트 파트와 협업 하여 바이오 메디컬 분야의
                    서비스 개발을 끊임없이 진행하고 있습니다. 【블루비커 기술
                    스택】 • React, WebGL, Unity, Spring Boot, .Net Core,
                    Kotlin, Swift, Stored Procedure : 개발팀에서 서비스에
                    적용하고 있는 기술 스택입니다. • MS Azure Cloud, Netlify :
                    우리는 마이크로소프트의 Azure Cloud 의 기술들을 서비스에
                    활용하고 있습니다. PaaS App 및 Serverless Functions 와
                    Static Web App 을 이용한 웹앱, Blob Storage 및 CDN 을 이용한
                    대용량 스토리지, Traffic Manager 와 FrontDoor를 이용한
                    분산처리, Notification Hub 와 PubSub 을 이용한 소켓통신 등을
                    사용합니다. 부하분산 처리가 필요하지 않은 단순한 웹 앱들은
                    Netlify 클라우드 서비스를 사용합니다. • 그래픽스 :
                    자체적으로 개발한 국내 최고 수준의 WebGL 뷰어와,
                    마이크로소프트 Hololens2 의 서비스들을 개발합니다. Blender를
                    이용해서 모델링한 3D 에셋들을 활용하여 웹과 Hololens2에서
                    사용하기 위한 최적화를 진행하여 개발하고 있습니다.
                    【블루비커 개발 문화】 • CI/CD 파이프라인을 이용하며, 중요
                    서비스는 모두 스테이징 서버와 프로덕션 서버가 분리되어
                    있습니다. • 초기 스타트업 특성상 다양한 아이디어를 빠르고
                    린하게 적용해야 하기 때문에 효율적인 개발 문화를 추구합니다.
                    • 개발 스택의 결정과 프로젝트의 설계는 모든 개발 팀원들의
                    토론을 통해 결정합니다. • 코드 리뷰는 모든 개발 팀원들이
                    참가하여 본인이 개발하는 분야가 아닐지라도 함께 논의하고
                    분석합니다. • 우리는 최신 기술 스택의 도입에 두려움을 가지지
                    않습니다. 새로운 기술에 대해 조사하고, 비교하고, 적용하는
                    과정을 통해 개발자는 한 단계 더 성장할 수 있다고 생각합니다.
                    • 주기적으로 일정 시간을 할애하여 외부 온/오프라인 교육을
                    받을 수 있도록 회사 차원에서 지원합니다. 교육을 통해서
                    서비스에 접목하고자 하는 아이디어가 떠오른다면 토론을 통해서
                    결정하고 진행합니다. • 명확한 Task를 설정한 뒤 업무를
                    진행합니다. 상황에 따른 우선순위를 정하고 Teams Planner를
                    기반으로 1주 혹은 2주 단위의 느슨한 스프린트 방식으로
                    개발하고 있습니다. • 개발자들은 중요한 기획안에 자신들의
                    아이디어를 제안하고, 기술적인 의견을 공유합니다. 【주요 협업
                    툴】 • 모든 소스코드들은 깃허브를 통해 관리되고, 통신 협업을
                    위해서 Postman 을 사용하고 있으며, 모든 기술 문서는
                    Notion으로 정리합니다. • 전사적으로 마이크로소프트 Teams,
                    Notion, Microsoft 365 서비스와 같은 SaaS 서비스를 적극
                    사용해서 구성원 개인 분들의 업무 효율을 높이는데 도움 드리고
                    있습니다. • 모든 팀들은 Teams Planner를 통해 업무 및 일정
                    관리를 하고 있습니다. • 프로덕트팀, 서비스개발팀,
                    마케팅팀과의 디자인 관련 업무는 Figma를 통해 협업하고
                    있습니다. ＜채용절차 및 유의사항＞ ✓ 채용절차는 이렇게
                    진행됩니다. 1. 서류전형 • 블루비커는 자유양식의 지원서를
                    받고 있습니다. 본인의 강점이 잘 드러나는 다양한 정보를
                    알려주세요. • 지원 시 본인의 이력서 또는 포트폴리오와 함께,
                    포지션과 유관하며 직접 작성한 “깃허브 주소” 혹은
                    “소스코드”를 첨부 및 제출해 주시기 바랍니다. • 직접 운영
                    중인 개발 블로그나 서비스가 있다면 함께 보내주시면 적극
                    검토하겠습니다! • 만약 제출이 어려운 경우, 개발팀에서
                    전달해드리는 과제를 수행해주시면 됩니다. 2. 1차 기술
                    인터뷰(온라인) • 개발팀과 진행하는 직무 관련 인터뷰로,
                    지원서 상의 경력과 소스코드 및 과제 내용을 중심으로
                    진행됩니다. • 1시간 가량 온라인 면접으로 진행됩니다. 3. 2차
                    임원 인터뷰(오프라인) • 다른 직군의 팀원 및 경영진과 서로에
                    대해 조금 더 알아가는 시간입니다. • 서로 추구하는 가치관과
                    생각 등에 대해 이야기하는 시간으로 약 1시간 가량 진행됩니다.
                    4. 최종합격 • 처우에 대해 최종적으로 협의 후, 입사 일자를
                    결정합니다. ✓ 블루비커에 관심을 갖고 지원해 주신 모든 분들의
                    서류를 정말 감사한 마음으로 읽어 보고 있습니다. 채용의 모든
                    전형에서 가능한 빠른 피드백을 드리고자 노력하겠습니다.
                  </p>
                </div>
                <div className="JobDetail_Content_Description_Skill">
                  <h3>기술스택 ・ 툴</h3>
                  <ul className="JobDetail_Content_Description_Skill_List">
                    {RecruitSkill.map((i) => (
                      <li>{i.skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr className="JobContent_divider" />
              <div className="JobWorkPlace">
                <div className="Deadline">
                  <span>마감일</span>
                  <span>상시</span>
                </div>
                <div className="WorkPlace">
                  <span>근무지역</span>
                  <span>
                    서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브
                  </span>
                </div>
                <a className="WorkPlaceMap" href="#">
                  {/* <img
                    src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=700&h=254&markers=type:d|size:mid|pos:126.9729133 37.5511247|color:red&scale=2&X-NCP-APIGW-API-KEY-ID=z7e7ujba1u"
                    alt=""
                  /> */}
                </a>
              </div>
              <div className="JobContent_CompanyInfo">
                <div className="JobContent_CompanyInfo_Company">
                  <img
                    src="https://static.wanted.co.kr/images/wdes/0_5.0852ff23.jpg"
                    alt="블루비커"
                  />
                  <div>
                    <span>블루비커</span>
                    <span>IT, 컨텐츠</span>
                  </div>
                </div>
                <div className="JobContent_CompanyInfo_FllowBtn">
                  <span>팔로우</span>
                </div>
              </div>
              <div className="StealingWarning">
                <div className="StealingWarning_Header">
                  <svg className="" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="currentColor" fillRule="evenodd">
                      <path
                        fillRule="nonzero"
                        d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                      ></path>
                      <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                      <path
                        fillRule="nonzero"
                        d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
                      ></path>
                    </g>
                  </svg>
                  <div className="StealingWarning_content">
                    <span>
                      본 채용정보는 원티드랩의 동의없이 무단전재, 재배포,
                      재가공할 수 없으며, 구직활동 이외의 용도로 사용할 수
                      없습니다.
                    </span>
                    <svg
                      className="StealingWarning_BodyBtn"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 13"
                      focusable="false"
                      role="presentation"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        d="M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="StealingWarning_Body">
                  <span>
                    본 채용 정보는 <strong>블루비커</strong>에서 제공한 자료를
                    바탕으로 원티드랩에서 표현을 수정하고 이의 배열 및 구성을
                    편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본
                    정보 및 데이터베이스의 일부 내지는 전부에 대하여 원티드랩의
                    동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수
                    없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의
                    용도로 사용될 수 없습니다. 원티드랩은{" "}
                    <strong>블루비커</strong> 에서 게재한 자료에 대한 오류나 그
                    밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여
                    어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한
                    조치에 대해 책임을 지지 않습니다.{" "}
                    <strong>
                      {"<"}저작권자 (주)원티드랩. 무단전재-재배포금지{">"}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="JobDetail_Process">
              <h3>채용보상금</h3>
              <button className="JobDetail_ShareBtn" type="button">
                <img
                  className="JobDetail_ShareBtn_Img"
                  src={require("../images/share.png")}
                />
              </button>
              <div className="JobDetail_Reward">
                <div className="JobDetail_Reward_Recommender">
                  <h3>추천인</h3>
                  <span>
                    {[500000].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </span>
                </div>
                <div className="JobDetail_Reward_Applicant">
                  <h3>지원자</h3>
                  <span>
                    {[500000].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </span>
                </div>
              </div>
              <button className="JobDetail_BookMarkBtn">
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  // style="color: rgb(51, 102, 255);"
                >
                  <defs>
                    <path
                      id="bookmarkIconLine"
                      d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"
                    ></path>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    {/* <use
                      fill="currentColor"
                      xlink:href="#bookmarkIconLine"
                    ></use> */}
                  </g>
                </svg>
                북마크하기
              </button>
              <button className="JobDetail_ApplyBtn">지원하기</button>
              <div className="Reactions">
                <button className="Reactions_LikeBtn">
                  <svg
                    viewBox="0 0 132.29 120.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(.43865 0 0 .43865 8.1199 -19.589)">
                      <path
                        d="m255.06 68.053a87.637 87.639 45 0 0-59.609-23.395 87.637 87.639 45 0 0-63.12 26.906l-0.0359-0.03594-0.0356 0.03558a87.637 87.639 45 0 0-63.119-26.905 87.637 87.639 45 0 0-87.639 87.639 87.637 87.639 45 0 0 26.905 63.119l-0.035992 0.036 123.92 123.92 123.93-123.93-8e-3 -8e-3a87.637 87.639 45 0 0 26.878-63.148 87.637 87.639 45 0 0-28.028-64.243z"
                        fill="#e1e2e3"
                        strokeWidth="4.7339"
                      />
                    </g>
                  </svg>
                  <span>9</span>
                </button>
                <button className="Reactions_avatars">
                  <ul>
                    <li>
                      <img
                        src="https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://k.kakaocdn.net/dn/chOGWm/btrJ7se3l3K/eeQiZuGgc7rBHKj9RBRFk1/img_110x110.jpg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://lh3.googleusercontent.com/a/ALm5wu2bYv18aK6_ahAXODnanhRHwCfEqvoUbqKJCBKA=s96-c"
                        alt=""
                      />
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </div>

          <div className="JobAssociatedContainer">
            <h3>이 포지션을 찾고 계셨나요?</h3>
            <div>
              <ul className="RecruitList">
                {RecruitDetailPosition.map((i) => (
                  <li>
                    <div className="RecruitList_Content">
                      <a href="#">
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
                          {i.responseLevel !== null ? (
                            <div className="RecruitList_Content_Info_ResponseLevelLabel">
                              <span>{i.responseLevel}</span>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="RecruitList_Content_Info_Location">
                            <span>{i.city}</span>
                            <span>·</span>
                            <span>{i.country}</span>
                          </div>
                          <span className="RecruitList_Content_Info_Reward">
                            {i.reward}
                          </span>
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default RecruitDetail;
