import { ReactNode, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

type Props = {
  slideItems: ReactNode[];
};

const Slide = ({ slideItems }: Props) => {
  return (
    <Splide hasTrack={false} aria-label="...">
      <div className="custom-wrapper">
        <SplideTrack>
          {slideItems &&
            slideItems.length > 0 &&
            slideItems.map((item, index) => (
              <SplideSlide key={index}>{item}</SplideSlide>
            ))}
        </SplideTrack>
        <div className="splide__arrows" />
      </div>
    </Splide>
  );
};
export default Slide;
