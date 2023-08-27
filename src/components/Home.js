import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const Home = () => {
  // 取得したデータの状態管理変数をuseStateで管理
  const [postList, setPostList] = useState([]);

  // firestoreのデータを取得
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // data.docsのデータをmap関数で一つずつ取り出す。...doc.dataデータ取得、さらにidも追加して返す
      // 状態変数の更新
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  const handeleDlete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1 className="postContents__title">{post.title}</h1>
            </div>
            <div className="postTextConteiner">{post.postsText}</div>
            <div className="nameAndDeliteButton">
              <h2 className="nameAndDeliteButton__ttl">
                {post.auther.username}
              </h2>
              {post.auther.id === auth.currentUser?.uid && (
                <button
                  className="nameAndDeliteButton__btn"
                  onClick={() => handeleDlete(post.id)}
                >
                  削除
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
