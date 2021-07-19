import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Logout = ({ setUsername, setUserPicture, setIsLoggedIn }) => {
  let history = useHistory();
  useEffect(() => {
    localStorage.removeItem("accessToken");
    setUsername("");
    setUserPicture(null);
    setIsLoggedIn(false);
    history.push("/home");
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default Logout;
