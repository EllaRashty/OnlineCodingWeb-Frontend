/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import CodeBlock from "./CodeBlock";
import { constants } from "../constants";
import { checkSolution } from "../utils";
import smiley from "../images/smiley.png";
import GeneralPage from "./GeneralPage";

const socket = io.connect("http://onlinecodingweb-backend-production.up.railway.app");

function Block() {
  const [codeString, setCodeString] = useState("");
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState(0);
  const { id } = useParams();
  const location = useLocation();
  const block = location.state;

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (id !== "") {
        socket.emit("join_room", id, (message) => setUsers(`${message}`));
      }
    }
  }, [id]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.id === id) setCodeString(data.value);
    });
  }, [socket,id]);

  /**
   * This function sends a message to the server with the current value of the code block and checks if it matches the solution
   * @param {string} value - The current value of the code block
   */
  const sendMessage = (value) => {
    setSuccess(checkSolution(value, block.solution));
    socket.emit("send_message", { value, id });
  };

  if (!block) return <GeneralPage message={constants.NOT_FOUND} />;
  else if (users === 0) return <GeneralPage message={constants.OCCUPIED} />;
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        {constants.GO_BACK}
      </Link>
      <h1>{block?.title}</h1>
      <h3 className="description">{block?.description}</h3>
      {success && <img alt={"smiley"} src={smiley} />}
      <CodeBlock
        users={users}
        sendMessage={sendMessage}
        defaultStart={block?.defaultStart}
        codeString={codeString}
      />
    </>
  );
}
export default Block;
