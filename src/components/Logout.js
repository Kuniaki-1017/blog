import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function LogOut({ setIsAuth }) {
  // リダイレクト関数
  const navigate = useNavigate();
  // ログアウトの処理
  const LogOutInWithGoogle = () => {
    // ログアウト
    signOut(auth).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={LogOutInWithGoogle}>ログアウト</button>
    </div>
  );
}

export default LogOut;
