import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./views/Homepage";
import ChatRoom from "./views/ChatRoom";
import Founder from "./views/Founder";
import Brand from "./views/Brand";
import BackToTop from "./components/common/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
    AOS.refresh();
  }, []);
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
      <BackToTop />
    </>
  );
}

export default App;
