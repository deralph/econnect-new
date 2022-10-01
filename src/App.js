// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/landingpage-signin/Landingpage";
import Login from "./components/landingpage-signin/Login";
import Register from "./components/landingpage-signin/Register";
import NewsFeed from "./components/newsFeed/newsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<Login admin />} />
          <Route path="/forget-password" element={<Login forget />} />
          <Route path="/news-feed" element={<NewsFeed />} />
          <Route path="/post" element={<NewsFeed post />} />
          <Route path="/e-portal" element={<NewsFeed portal />} />
          <Route path="/results" element={<NewsFeed results />} />
          <Route path="/teaching-practice" element={<NewsFeed teachprac />} />
          <Route path="/nysc-list" element={<NewsFeed nysc />} />
          <Route
            path="/academic-assistance"
            element={<NewsFeed assistance />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
