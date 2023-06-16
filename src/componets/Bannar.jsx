import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import banner from "../assets/01.jpg";
import banner1 from "../assets/02.jpg";
import banner2 from "../assets/03.png";
import banner3 from "../assets/04.jpg";
import banner4 from "../assets/05.png";
import banner5 from "../assets/06.png";

const Bannar = () => {
  return (
    <>
      <AwesomeSlider cssModule={AwesomeSliderStyles} className="w-full h-[450px]">
      <div data-src={banner} />
      <div data-src={banner1} />
      <div data-src={banner2} />
      <div data-src={banner3} />
      <div data-src={banner4} />
      <div data-src={banner5} />
    </AwesomeSlider>
    </>
  );
};

export default Bannar;