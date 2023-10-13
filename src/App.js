import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./views/Homepage";
import ChatRoom from "./views/ChatRoom";
import Founder from "./views/Founder";
import Brand from "./views/Brand";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/brand" element={<Brand />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
