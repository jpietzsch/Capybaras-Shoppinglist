import React, { useRef, useState } from "react";

function LoginForm({ loginHandler }) { // { loginHandler } = destructuring 
  const usernameRef = useRef("");   // useRef = wenn der wert verändert wird, findet kein rerendering statt
  const passwordRef = useRef("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  function mosquito() {
    const audio = document.getElementById("mosquito");
    audio.play();
  }

  function btnLogin() {
    mosquito()
    loginHandler(usernameRef.current.value, passwordRef.current.value)
  }

  return (
    <>
      <label id="usernametxt" htmlFor="username">
        E-Mail:
      </label>
      <br />
      <input type="text" id="username" name="username" ref={usernameRef} />
      <br />
      <label id="passwordtxt" htmlFor="password">
        Password:
      </label>
      <br />
      <input type="password" id="password" name="password" ref={passwordRef} />
      <br />
      <input type="submit" value="Einloggen" id="login-button" onClick={btnLogin}  />
    </>
  );
}

export default LoginForm;
