import { NavLink } from "react-router-dom";

function Navbar({ username, userPicture }) {
  return (
    <div className="navbar">
      <NavLink to="/home" className="link" activeClassName="linkActive">
        Home
      </NavLink>

      {username && (
        <NavLink to="/movies" className="link" activeClassName="linkActive">
          Movies
        </NavLink>
      )}

      {!username && (
        <NavLink to="/movies" className="linkHidden">
          Movies
        </NavLink>
      )}

      <div className="loginContainer">
        {!username && (
          <NavLink to="/login" className="linkLogin">
            Login
          </NavLink>
        )}

        {username && (
          <NavLink to="/logout" className="linkLogin">
            Logout
          </NavLink>
        )}

        {username && (
          <div className="loggedInText">
            <p id="loggedInUsername">{username}</p>
            <img id="userPicture" src={userPicture} alt="user" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
