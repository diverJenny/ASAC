import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/main";
import DevRecruitMain from "./pages/dev_recruit_main";
import RecruitDetail from "./pages/recruit_detail_page";
import SearchBar from "./component/searchBar";
import SearchResult from "./pages/searchResult";
import LoginModal from "./component/loginModal";
import Header from "./component/header";

function App() {
  const [LoginModalOn, SetLoginModalOn] = useState(0);
  const [SearchBarOn, SetSearchBarOn] = useState(false);

  return (
    <>
      <BrowserRouter>
        {LoginModalOn !== 0 && (
          <LoginModal
            LoginModalOn={LoginModalOn}
            SetLoginModalOn={SetLoginModalOn}
          />
        )}
        {SearchBarOn && <SearchBar SetSearchBarOn={SetSearchBarOn} />}
        <Header
          LoginModalOn={LoginModalOn}
          SetLoginModalOn={SetLoginModalOn}
          SetSearchBarOn={SetSearchBarOn}
        />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/DevRecruitMain" element={<DevRecruitMain />}></Route>
          <Route path="/RecruitDetail" element={<RecruitDetail />}></Route>
          <Route path="/RecruitDetail/:id" element={<RecruitDetail />}></Route>
          <Route path="/SearchResult" element={<SearchResult />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
