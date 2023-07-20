import { Route, Routes } from "react-router-dom";
import "./App.css";
import Lobby from "./components/Lobby";
import Block from "./components/Block";
import GeneralPage from "./components/GeneralPage";
import { constants } from "./constants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lobby />}></Route>
      <Route path="/block/:id" element={<Block />} />
      <Route path="*" element={<GeneralPage message={constants.NOT_FOUND} />} />
    </Routes>
  );
}

export default App;
