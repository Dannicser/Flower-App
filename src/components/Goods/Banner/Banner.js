import { useEffect, useState } from "react";
import "./Banner.scss";

const Banner = ({ data }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(data);
  }, []);

  return (
    <div className="banner__container">
      {slides.map(({ id, img }) => {
        return <img key={id} src={img} alt="..." />;
      })}
    </div>
  );
};

export default Banner;
