import React, { useEffect, useState } from "react";
import "../css/loginModal.css";
import {isValidEmail} from "../utils/emailFormating";
import {isSamePassword, isValidPassword} from "../utils/passwordFormating";
import {isAllConsentChk} from "../utils/consentChk";
import consentList from "../consent.json";

function LoginModal({ LoginModalOn, SetLoginModalOn }) {
  function LoginModalOff() {
    // console.log("LoginModalOff : " + LoginModalOn);
    // console.log("SetLoginModalOn" + SetLoginModalOn);
    SetLoginModalOn(0);
    // console.log("LoginModalOff : " + LoginModalOn);
  }

  const [EmailInput, SetEmailInput] = useState("");
  const [emailChk, setEmailChk] = useState("");
  const EmailOnChange = (e) => {
    // console.log("EmailOnchange: " + EmailInput)
    SetEmailInput(e.target.value);
    // console.log("EmailOnChangeChk: " + emailChk);
  };
  useEffect(() => {
    setEmailChk(isValidEmail(EmailInput));
    if(EmailInput === "") setEmailChk(true);
  }, [EmailInput]);

  // EmailInput의 setState 기본값을 true로 지정
/*   useEffect(() => {
    setEmailChk(true)
  }, []); */

  function SignUpModalOn() {
    // console.log("EmailInput : " + EmailInput)
    if (isValidEmail(EmailInput)) SetLoginModalOn(2);
  }

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [passwordConfirmChk, setPasswordConfirmChk] = useState("");
  const passWordOnChange = (e) => {
    setPasswordInput(e.target.value);
  }

  useEffect(() => {
    setPasswordChk(isValidPassword(passwordInput));
    // console.log(passwordInput);
    // console.log("passwordChk : " + isValidPassword(passwordInput));
    if(passwordInput === "") {
      setPasswordChk(true);
    }
  }, [passwordInput]);

  const passwordConfirmOnChange =(e) => {
    setPasswordConfirmInput(e.target.value);
  }

  useEffect(() => {
    setPasswordConfirmChk(isSamePassword(passwordInput, passwordConfirmInput));
    if(passwordConfirmInput === "") {
      setPasswordConfirmChk(true);
    }
  }, [passwordConfirmInput]);

  const [allConsent, setAllConsent] = useState("");
  const [isCheckedConsent, setIsCheckedConsent] = useState([]);

  const changeAllConsentChk = (e) => {
    if(e.target.checked) {
      setAllConsent(true);

    } else {
      setAllConsent(false);
      setIsCheckedConsent([]);
    }
  }

  const changeConsentChk = (checked, id) => {
    if(checked) {
      setIsCheckedConsent(prev => [...prev, id]);
    } else {
      setIsCheckedConsent(isCheckedConsent.filter((el) => el !== id));
    }
  }


  // 회원가입 모달에서 뒤로가기
  function GoBackSignUp() {
    SetLoginModalOn(1);
  }

  function OutSideClick(e) {
    if (e.target.className === "LoginModalContainer") LoginModalOff();
  }

  function SignUpModalOutSideClick(e) {
    if (e.target.className === "SignUpModalContainer") LoginModalOff();
  }

  return (
    <>
      {/* {console.log("LoginModalOn : " + LoginModalOn)} */}
      {LoginModalOn === 1 && (
        <div
          id="LoginModalContainer"
          className="LoginModalContainer"
          onClick={OutSideClick}
        >
          <div id="LoginModal" className="LoginModal">
            <div className="ModalHeader">
              <img src="https://www.wantedlab.com/img/logo.png" alt="wanted" />
              <button className="LoginModal_CloseBtn" onClick={LoginModalOff}>
                <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                  <path
                    fill="currentColor"
                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="ModalBody">
              <div className="TextContainer">
                <h1>
                  직장인을위한
                  <br />
                  커리어 플랫폼, 원티드!
                </h1>
                <br />
                <h2>
                  커리어 성장과 행복을 위한 여정
                  <br />
                  지금 원티드에서 시작하세요.
                </h2>
              </div>
              <div className="InputWrapper">
                <div className="Input_EmailContainer">
                  <span>이메일</span>
                  <input
                    id="InputEmail"
                    type="email"
                    placeholder="이메일을 입력해 주세요."
                    onChange={EmailOnChange}
                  />
                  {!emailChk && 
                  <span className="EmailChkMessage">올바른 이메일을 입력해주세요.</span>
                }
                </div>
                <div className="HowToLogin">
                  <button className="EmailLoginBtn" onClick={SignUpModalOn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#FFF"
                        strokeWidth="2"
                      >
                        <rect
                          width="17.2"
                          height="14"
                          x="3.4"
                          y="5"
                          rx="3"
                        ></rect>
                        <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                      </g>
                    </svg>
                    이메일로 계속하기
                  </button>
                  <span>or</span>
                  <div className="SocialLoginWrapper">
                    <span>다음 계정으로 계속하기</span>
                    <div className="SocialLogin">
                      <div className="SocialLogin_Kakao">
                        <div className="SocialLogin_Kakao_btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                          >
                            <path
                              fill="#000"
                              fillRule="nonzero"
                              d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                            ></path>
                          </svg>
                        </div>
                        <div className="SocialLogin_Name">kakao</div>
                      </div>

                      <div className="SocialLogin_Facebook">
                        <div className="SocialLogin_Facebook_btn">
                          <img
                            src={require("../images/socialLogin/facebook.png")}
                            alt="facebook"
                          />
                        </div>
                        <div className="SocialLogin_Name">Facebook</div>
                      </div>
                      <div className="SocialLogin_Google">
                        <div className="SocialLogin_Google_btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                          >
                            <g fill="none" fillRule="nonzero">
                              <path
                                fill="#EA4335"
                                d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
                              ></path>
                              <path
                                fill="#4285F4"
                                d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                              ></path>
                              <path
                                fill="#FBBC05"
                                d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                              ></path>
                              <path
                                fill="#34A853"
                                d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
                              ></path>
                              <path d="M0 0L23 0 23 23 0 23z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="SocialLogin_Name">Google</div>
                      </div>
                      <div className="SocialLogin_Apple">
                        <div className="SocialLogin_Apple_btn">
                          <img
                            src={require("../images/socialLogin/Apple-Logo2.png")}
                            alt="apple"
                          />
                        </div>
                        <div className="SocialLogin_Name">Apple</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {LoginModalOn === 2 && (
        <div className="SignUpModalContainer" onClick={SignUpModalOutSideClick}>
          <div className="SignUpModal">
            <div className="SignUpModal_Header">
              <button className="SignUpModal_BackBtn" onClick={GoBackSignUp}>
                <img
                  className="SignUpModal_BackImg"
                  src={require("../images/chevron-left.png")}
                />
              </button>
              <div className="SignUpModal_Title">
                <h2>회원가입</h2>
              </div>
            </div>
            <div className="SignUp_Input_Wrapper">
              <div className="SignUp_Input_Item SignUp_InputEmail_Container">
                <h4>이메일</h4>
                <input
                  id="SignUp_InputEmail"
                  type="text"
                  placeholder={EmailInput}
                  readOnly
                />
              </div>
              <div className="SignUp_Input_Item SignUp_InputName_Container">
                <h4>이름</h4>
                <input
                  id="SignUpInputName"
                  type="text"
                  placeholder="이름을 입력해주세요."
                />
              </div>
              <div className="SignUp_Input_Item SignUp_InputPhoneNumber_Container">
                <h4>휴대폰 번호</h4>
                <select name="CountryCode" id="SignUp_CountryCode">
                  <option value="KR">South Korea +82</option>
                  <option value="JP">Japan +81</option>
                  <option value="TW">Taiwan +886</option>
                  <option value="HK">Hong Kong +852</option>
                  <option value="SG">Singapore +65</option>
                  <option value="AF">Afghanistan +93</option>
                  <option value="AL">Albania +355</option>
                  <option value="DZ">Algeria +213</option>
                  <option value="AO">Angola +244</option>
                  <option value="AR">Argentina +54</option>
                  <option value="AM">Armenia +374</option>
                  <option value="AW">Aruba +297</option>
                  <option value="AU">Australia +61</option>
                  <option value="AT">Austria +43</option>
                  <option value="AZ">Azerbaijan +994</option>
                  <option value="BH">Bahrain +973</option>
                  <option value="BD">Bangladesh +880</option>
                  <option value="BY">Belarus +375</option>
                  <option value="BE">Belgium +32</option>
                  <option value="BZ">Belize +501</option>
                  <option value="BJ">Benin +229</option>
                  <option value="BT">Bhutan +975</option>
                  <option value="BO">Bolivia +591</option>
                  <option value="BW">Botswana +267</option>
                  <option value="BR">Brazil +55</option>
                  <option value="BN">Brunei +673</option>
                  <option value="BG">Bulgaria +359</option>
                  <option value="BF">Burkina Faso +226</option>
                  <option value="KH">Cambodia +855</option>
                  <option value="CM">Cameroon +237</option>
                  <option value="CA">Canada +1</option>
                  <option value="CL">Chile +56</option>
                  <option value="CN">China +86</option>
                  <option value="CX">Christmas Island +61</option>
                  <option value="CC">Cocos Islands +61</option>
                  <option value="CO">Colombia +57</option>
                  <option value="KM">Comoros +269</option>
                  <option value="CR">Costa Rica +506</option>
                  <option value="HR">Croatia +385</option>
                  <option value="CU">Cuba +53</option>
                  <option value="CW">Curacao +599</option>
                  <option value="CY">Cyprus +357</option>
                  <option value="CZ">Czech Republic +420</option>
                  <option value="DK">Denmark +45</option>
                  <option value="DJ">Djibouti +253</option>
                  <option value="EC">Ecuador +593</option>
                  <option value="EG">Egypt +20</option>
                  <option value="SV">El Salvador +503</option>
                  <option value="GQ">Equatorial Guinea +240</option>
                  <option value="EE">Estonia +372</option>
                  <option value="ET">Ethiopia +251</option>
                  <option value="FO">Faroe Islands +298</option>
                  <option value="FJ">Fiji +679</option>
                  <option value="FI">Finland +358</option>
                  <option value="FR">France +33</option>
                  <option value="PF">French Polynesia +689</option>
                  <option value="GM">Gambia +220</option>
                  <option value="GE">Georgia +995</option>
                  <option value="DE">Germany +49</option>
                  <option value="GH">Ghana +233</option>
                  <option value="GR">Greece +30</option>
                  <option value="GL">Greenland +299</option>
                  <option value="GT">Guatemala +502</option>
                  <option value="GN">Guinea +224</option>
                  <option value="GY">Guyana +592</option>
                  <option value="HT">Haiti +509</option>
                  <option value="HN">Honduras +504</option>
                  <option value="HU">Hungary +36</option>
                  <option value="IS">Iceland +354</option>
                  <option value="IN">India +91</option>
                  <option value="ID">Indonesia +62</option>
                  <option value="IR">Iran +98</option>
                  <option value="IQ">Iraq +964</option>
                  <option value="IE">Ireland +353</option>
                  <option value="IL">Israel +972</option>
                  <option value="IT">Italy +39</option>
                  <option value="JO">Jordan +962</option>
                  <option value="KZ">Kazakhstan +7</option>
                  <option value="KE">Kenya +254</option>
                  <option value="XK">Kosovo +383</option>
                  <option value="KW">Kuwait +965</option>
                  <option value="KG">Kyrgyzstan +996</option>
                  <option value="LA">Laos +856</option>
                  <option value="LV">Latvia +371</option>
                  <option value="LB">Lebanon +961</option>
                  <option value="LY">Libya +218</option>
                  <option value="LI">Liechtenstein +423</option>
                  <option value="LT">Lithuania +370</option>
                  <option value="LU">Luxembourg +352</option>
                  <option value="MO">Macau +853</option>
                  <option value="MK">Macedonia +389</option>
                  <option value="MG">Madagascar +261</option>
                  <option value="MW">Malawi +265</option>
                  <option value="MY">Malaysia +60</option>
                  <option value="MV">Maldives +960</option>
                  <option value="ML">Mali +223</option>
                  <option value="MT">Malta +356</option>
                  <option value="MH">Marshall Islands +692</option>
                  <option value="MR">Mauritania +222</option>
                  <option value="MU">Mauritius +230</option>
                  <option value="MX">Mexico +52</option>
                  <option value="MD">Moldova +373</option>
                  <option value="MN">Mongolia +976</option>
                  <option value="ME">Montenegro +382</option>
                  <option value="MA">Morocco +212</option>
                  <option value="MZ">Mozambique +258</option>
                  <option value="MM">Myanmar +95</option>
                  <option value="NA">Namibia +264</option>
                  <option value="NP">Nepal +977</option>
                  <option value="NL">Netherlands +31</option>
                  <option value="NC">New Caledonia +687</option>
                  <option value="NZ">New Zealand +64</option>
                  <option value="NI">Nicaragua +505</option>
                  <option value="NE">Niger +227</option>
                  <option value="NG">Nigeria +234</option>
                  <option value="NO">Norway +47</option>
                  <option value="OM">Oman +968</option>
                  <option value="PK">Pakistan +92</option>
                  <option value="PW">Palau +680</option>
                  <option value="PS">Palestine +970</option>
                  <option value="PA">Panama +507</option>
                  <option value="PG">Papua New Guinea +675</option>
                  <option value="PY">Paraguay +595</option>
                  <option value="PE">Peru +51</option>
                  <option value="PH">Philippines +63</option>
                  <option value="PL">Poland +48</option>
                  <option value="PT">Portugal +351</option>
                  <option value="QA">Qatar +974</option>
                  <option value="RE">Reunion +262</option>
                  <option value="RO">Romania +40</option>
                  <option value="RU">Russia +7</option>
                  <option value="RW">Rwanda +250</option>
                  <option value="WS">Samoa +685</option>
                  <option value="SA">Saudi Arabia +966</option>
                  <option value="SN">Senegal +221</option>
                  <option value="RS">Serbia +381</option>
                  <option value="SC">Seychelles +248</option>
                  <option value="SL">Sierra Leone +232</option>
                  <option value="SK">Slovakia +421</option>
                  <option value="SI">Slovenia +386</option>
                  <option value="SB">Solomon Islands +677</option>
                  <option value="SO">Somalia +252</option>
                  <option value="ZA">South Africa +27</option>
                  <option value="SS">South Sudan +211</option>
                  <option value="ES">Spain +34</option>
                  <option value="LK">Sri Lanka +94</option>
                  <option value="SD">Sudan +249</option>
                  <option value="SR">Suriname +597</option>
                  <option value="SE">Sweden +46</option>
                  <option value="CH">Switzerland +41</option>
                  <option value="SY">Syria +963</option>
                  <option value="TJ">Tajikistan +992</option>
                  <option value="TZ">Tanzania +255</option>
                  <option value="TH">Thailand +66</option>
                  <option value="TG">Togo +228</option>
                  <option value="TO">Tonga +676</option>
                  <option value="TN">Tunisia +216</option>
                  <option value="TR">Turkey +90</option>
                  <option value="TM">Turkmenistan +993</option>
                  <option value="UG">Uganda +256</option>
                  <option value="UA">Ukraine +380</option>
                  <option value="AE">United Arab Emirates +971</option>
                  <option value="GB">United Kingdom +44</option>
                  <option value="US">United States +1</option>
                  <option value="UY">Uruguay +598</option>
                  <option value="UZ">Uzbekistan +998</option>
                  <option value="VU">Vanuatu +678</option>
                  <option value="VE">Venezuela +58</option>
                  <option value="VN">Vietnam +84</option>
                  <option value="YE">Yemen +967</option>
                  <option value="ZM">Zambia +260</option>
                  <option value="ZW">Zimbabwe +263</option>
                </select>
                <div className="SignUp_InputPhoneNumber_Verification">
                  <input type="text" placeholder="(예시) 01013245768" />
                  <button>
                    <span>인증번호 받기</span>
                  </button>
                </div>
                <input
                  type="text"
                  name=""
                  id="SignUp_InputPhoneNumber_Verification_Input"
                  placeholder="인증번호를 입력해주세요."
                />
              </div>
              <div className="SignUp_Input_Item SignUp_InputPassword_Container">
                <h4>비밀번호</h4>
                <input className="signUpPw" type="text" placeholder="비밀번호를 입력해주세요." onChange={passWordOnChange} />
                {!passwordChk && 
                <span>올바르지 않은 비밀번호입니다.</span>}
                <input className="signUpPwConfirm"
                  type="text"
                  placeholder="비밀번호를 다시 한번 입력해주세요." onChange={passwordConfirmOnChange}
                />
                {!passwordConfirmChk && 
                <span>비밀번호가 서로 일치하지 않습니다.</span>
                }
                <span>
                  영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                  16자 이하로 입력해주세요.
                </span>
              </div>
            </div>
            <div className="ConsentItems_Container">
              <div className="FullConsent ConsentItem">
                <input
                  type="checkbox"
                  className="ConsentChkBox"
                  id="FullConsentChkBox" checked={true} onChange={changeAllConsentChk}
                />
                <label htmlFor="FullConsentChkBox">
                  <span>전체 동의</span>
                </label>
              </div>
              <hr className="SignUpModal_divider" />
              {
                consentList.map((i) => (
                    <div className="ConsentItem">
                    <input
                      type="checkbox"
                      className="ConsentChkBox"
                      onChange={changeConsentChk}
                      checked={true}
                    />
                    <label>
                      <span>{i.content}{i.required === "Y" ? <span>&nbsp;(필수)</span> : ""}</span>
                    </label>
                    {i.detail === "Y" ?                 <a>자세히</a> : ""}
                    </div>
                  )
                )
              }
            </div>
            <div className="SignUp_Input_Submit">
              <div></div>
              <button className="SignUp_Input_SubmitBtn">
                <span>가입하기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
