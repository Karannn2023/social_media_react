import "./App.css";
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import CreatePost from "./components/createPost.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostList from "./postList.jsx";
import PostListProvider from "./store/post_list_store.jsx";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="container">
        <Sidebar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="container2">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
