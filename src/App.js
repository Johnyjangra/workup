import "./App.css";
import Feature from "./components/home/Feature";
// import Hero from "./components/home/Hero";
import OurMisson from "./components/home/OurMisson";
import OurWaitList from "./components/home/OurWaitList";
import SoluctionSucces from "./components/home/SoluctionSucces";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Feature/>
      <OurMisson />
      <SoluctionSucces/>
      <OurWaitList/>
    </>
  );
}

export default App;
