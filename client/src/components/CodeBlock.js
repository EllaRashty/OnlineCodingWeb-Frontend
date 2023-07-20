import React from "react";
import Editor from "@monaco-editor/react";
import { constants } from "../constants";

/**
 * This function is a React component that renders a code editor using the Monaco Editor library.
 * @param {number} props.users - The number of users currently collaborating on the code block
 * @param {function} props.sendMessage - The function to call when the code in the editor changes
 * @param {string} props.defaultStart - The default value to display in the editor when it first loads
 * @param {string} props.codeString - The current value of the code block
 * @returns {JSX.Element} - The JSX element to render
 */
function CodeBlock({ users, sendMessage, defaultStart, codeString }) {
  if (users >= 2)
    return (
      <>
        <h4>{constants.STUDENT}</h4>
        <Editor
          height="70vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={defaultStart}
          onChange={sendMessage}
        />
      </>
    );
  return (
    <>
      <h4>{constants.MENTOR}</h4>
      <Editor
        height="70vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={codeString}
        defaultValue={constants.MENTOR_TEXT}
        options={{ readOnly: true }}
      />
    </>
  );
}

export default CodeBlock;
