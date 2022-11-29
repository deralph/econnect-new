// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/landingpage-signin/Landingpage";
import Login from "./components/landingpage-signin/Login";
import Register from "./components/landingpage-signin/Register";
import NewsFeed from "./components/newsFeed/newsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Admin from "./components/admin/Admin";

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
          <Route path="/post/:id" element={<NewsFeed post />} />
          <Route path="/e-portal" element={<NewsFeed portal />} />
          <Route path="/results" element={<NewsFeed results />} />
          <Route path="/teaching-practice" element={<NewsFeed teachprac />} />
          <Route path="/nysc-list" element={<NewsFeed nysc />} />
          <Route path="/school-map" element={<NewsFeed schoolMap />} />
          <Route path="/direction" element={<NewsFeed direction />} />
          <Route path="/faq" element={<NewsFeed faq />} />
          <Route path="/addques" element={<NewsFeed addques />} />
          <Route path="/myquestion" element={<NewsFeed myquestion />} />
          <Route path="/business" element={<NewsFeed business />} />
          <Route path="/profile" element={<NewsFeed profile />} />
          <Route path="/edit-profile" element={<NewsFeed editProfile />} />
          <Route path="/Notification" element={<NewsFeed notification />} />
          <Route path="/friends" element={<NewsFeed friends />} />
          <Route path="/add-friends" element={<NewsFeed addFriends />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat-profile" element={<Chat profile />} />
          <Route path="/no-chat" element={<Chat non />} />
          <Route
            path="/friends-profile"
            element={<NewsFeed friendsProfile />}
          />
          <Route
            path="/business-details"
            element={<NewsFeed businessDetails />}
          />
          <Route
            path="/academic-assistance"
            element={<NewsFeed assistance />}
          />
          {/* admin pages */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit-admin" element={<Admin edit />} />
          <Route path="/users" element={<Admin user />} />
          <Route path="/users-profile" element={<Admin userProfile />} />
          <Route path="/verified-user" element={<Admin verify />} />
          <Route path="/post-news" element={<Admin news />} />
          <Route path="/updates" element={<Admin update />} />
          <Route path=" /upload-tp" element={<Admin tp />} />
          <Route path="/upload-nysc" element={<Admin nysc />} />
          <Route path="/approve-Business" element={<Admin approve />} />
          <Route path="/disable-Business" element={<Admin disable />} />
          <Route path="/sub" element={<Admin sub />} />
          <Route path="/admin-Business" element={<Admin business />} />
          <Route path="/admin-faq" element={<Admin faq />} />
          <Route path="/user-stats" element={<Admin userStats />} />{" "}
          <Route path="/in-user-stats" element={<Admin inuserStats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
