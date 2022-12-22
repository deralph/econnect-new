// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/landingpage-signin/Landingpage";
import Login from "./components/landingpage-signin/Login";
import Register from "./components/landingpage-signin/Register";
import NewsFeed from "./components/newsFeed/newsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
// import Admin from "./components/admin/Admin";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
