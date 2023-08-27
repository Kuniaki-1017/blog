import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { gsap } from "gsap";
import { useState } from "react";

function App() {
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>;
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    gsap.to(".cursor", {
      x: mouseX,
      y: mouseY,
      stagger: 1,
    });
  });

  // ログインの状態を管理
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="App">
      <Router>
        <div className="cursor"></div>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/createpost"
            element={<CreatePost isAuth={isAuth} />}
          ></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
