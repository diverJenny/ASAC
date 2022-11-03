import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import DevRecruitMain from "./pages/dev_recruit_main";
import RecruitDetail from "./pages/recruit_detail_page";
import SearchBar from "./pages/searchBar";
import SearchResult from "./pages/searchResult";
import LoginModal from "./component/loginModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/DevRecruitMain" element={<DevRecruitMain />}></Route>
          <Route path="/RecruitDetail" element={<RecruitDetail />}></Route>
          <Route path="/RecruitDetail/:id" element={<RecruitDetail />}></Route>
          <Route path="/SearchBar" element={<SearchBar />}></Route>
          <Route path="/SearchResult" element={<SearchResult />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
