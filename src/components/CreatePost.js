import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      auther: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postConteiner">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <h2>タイトル</h2>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputPost">
          <h2>投稿</h2>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
