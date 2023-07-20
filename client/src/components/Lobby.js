import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from "./firebaseConfig/firebaseConfig.js";

/**
 * Lobby component that displays a list of code blocks.
 * @returns {JSX.Element} The Lobby component.
 */
function Lobby() {
  const [codeBlocks, setCodeBlocks] = useState([]);
  const blockRef = collection(db, "CodeBlocks");

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const q = query(blockRef, orderBy("roomID", "asc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const fireBlocks = [];
      querySnapshot.forEach((doc) => {
        fireBlocks.push(doc.data());
      });
      setCodeBlocks([...fireBlocks]);
    });
    return () => {
      unsub();
    };
  }, [blockRef]);

  const DisplayCodeBlocks = () => {
    return codeBlocks.map((block, i) => (
      <p key={i}>
        <Link
          className="link"
          to={block.path}
          state={block}
          style={{ textDecoration: "none" }}
        >
          {block.title}
        </Link>
      </p>
    ));
  };

  return (
    <div className="loby-container">
      <h1>Lobby</h1>
      <h2>Choose A Code block:</h2>
      {DisplayCodeBlocks()}
    </div>
  );
}
export default Lobby;
