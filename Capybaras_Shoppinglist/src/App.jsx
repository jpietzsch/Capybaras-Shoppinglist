import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import LoginForm from "./components/login-form";
import AboutUs from "./components/about-us";
import Legal from "./components/legal";
import userProvider from "./provider/user.provider";
import "./App.css";

function App() {
  const [page, setPage] = useState("");
  const { isLoggedIn, loginUser } = userProvider()

  const Content = ({ page }) => {
    switch (page) {
      case "about-us":
        return <AboutUs />;
      case "legal":
        return <Legal />;
      default:
        return <></>;
    }
  };
  
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <h1>Capybaras Shopping List</h1>
        <section>{Content({ page })}</section>
        {!isLoggedIn ? <LoginForm loginHandler={loginUser}/> : <></>}
      </div>
    </div>
  );
}

export default App;
