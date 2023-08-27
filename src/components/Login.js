import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  // リダイレクト関数
  const navigate = useNavigate();

  // Googleログインの処理
  const loginInWithGoogle = () => {
    // Googleポップアップウインドウでログイン
    signInWithPopup(auth, provider).then((result) => {
      // ローカルストレージにログイン状態を保存
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
}

export default Login;
