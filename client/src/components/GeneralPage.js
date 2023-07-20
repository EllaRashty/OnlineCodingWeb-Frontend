import { Link } from "react-router-dom";
import { constants } from "../constants";

function GeneralPage({ message }) {
  return (
    <h1>
      {message}
      <Link to={"/"} >{constants.RETURN}</Link>
    </h1>
  );
}

export default GeneralPage;
