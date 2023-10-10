import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feature from "./components/home/Feature";
// import Hero from "./components/home/Hero";
import OurMisson from "./components/home/OurMisson";
import OurWaitList from "./components/home/OurWaitList";
import SoluctionSucces from "./components/home/SoluctionSucces";
import Homepage from "./views/Homepage";
import ChatRoom from "./views/ChatRoom";
import Founder from "./views/Founder";
import Brand from "./views/Brand";

function App() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Feature/>
      <OurMisson />
      <SoluctionSucces /> */}
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
