import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Header.css";

const staticServerUri = process.env.REACT_APP_PATH || "";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != null) setIsLogin(true);

    console.log(isLogin);
  }, [isLogin]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to={staticServerUri + "/"}>
          <img src={staticServerUri + "/logoKakao.png"} alt="logoKakao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              <Link to={staticServerUri + "/cart"}>
                <img src={staticServerUri + "/cart.png"} alt="cart.png" height={30} />
              </Link>
            </span>
            <span>|</span>
            <span>
              {isLogin ? (
                <Link
                  to={staticServerUri + "/login"}
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그아웃{" "}
                </Link>
              ) : (
                <Link
                  to={staticServerUri + "/login"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그인{" "}
                </Link>
              )}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
