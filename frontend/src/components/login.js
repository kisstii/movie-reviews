import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUsername, setUserPicture, setIsLoggedIn }) {
  let history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const url = new URL(window.location.href);
    const authCode = url.searchParams.get("code");
    let decodedToken;

    if (token !== "undefined" && token !== "null" && token !== undefined && token !== null) {
      decodedToken = jwt_decode(token);
      setUsername(decodedToken.user_given_name);
      setUserPicture(decodedToken.user_picture);
      setIsLoggedIn(true);
      return;
    }

    if (authCode) {
      fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authCode,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            localStorage.setItem("accessToken", data.accessToken);
            decodedToken = jwt_decode(data.accessToken);
            setUsername(decodedToken.user_given_name);
            setUserPicture(decodedToken.user_picture);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      loginAuth();
    }
    history.push("/home");
    // eslint-disable-next-line
  }, []);

  const loginAuth = () => {
    localStorage.removeItem("accessToken");
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=688625215457-908uiir82ne95e88esmhlbv6e5fpv8je.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=http%3A//localhost:3000/login&prompt=select_account";
  };

  return <></>;
}

export default Login;
