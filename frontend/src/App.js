import "./App.css";
import jwt_decode from "jwt-decode";
import Navbar from "./components/navbar";
import Home from "./components/home";
import MovieList from "./components/movieList";
import Login from "./components/login";
import Logout from "./components/logout";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPicture, setUserPicture] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    let decodedToken;
    if (token !== "undefined" && token !== "null" && token !== undefined && token !== null) {
      decodedToken = jwt_decode(token);
      setUsername(decodedToken.user_given_name);
      setUserPicture(decodedToken.user_picture);
      setIsLoggedIn(true);
      return;
    }
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} userPicture={userPicture} />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/movies">
        <MovieList />
      </Route>
      <Route exact path="/login" component={() => <Login setUsername={setUsername} setUserPicture={setUserPicture} setIsLoggedIn={setIsLoggedIn} />} />
      <Route exact path="/logout" component={() => <Logout setUsername={setUsername} setUserPicture={setUserPicture} setIsLoggedIn={setIsLoggedIn} />} />
    </div>
  );
}

export default App;
