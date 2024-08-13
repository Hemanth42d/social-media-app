import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <Header></Header>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content">
            <div className="posts_content">
              {selectedTab === "Home" ? (
                <PostList></PostList>
              ) : (
                <CreatePost></CreatePost>
              )}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </PostListProvider>
    </>
  );
}

export default App;
