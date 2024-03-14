import { Route, Routes } from "react-router";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";

import Login from "../page/loginPage/Login";
import HomePage from "../page/homePage/HomePage";
import Registration from "../page/registrationPage/Registration";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <div className="container">
        <div className={scss.Content}>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
