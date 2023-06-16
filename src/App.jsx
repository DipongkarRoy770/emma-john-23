import "./App.css";
import Bannar from "./componets/Bannar";
import Clock from "./componets/Clock";
import Counter from "./componets/Counter";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Home from "./componets/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Bannar></Bannar>
      <Clock></Clock>
      <Home></Home>
      <Counter></Counter>
      <Footer></Footer>
    </>
  );
}

export default App;
