"use client";

import { useSwiper } from "swiper/react";
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"

interface slidebtn {
    containerStyle:string;
    btnStyle:string
    // iconStyle:string;
}

const WorkSlideBtn: React.FC<slidebtn> = ({containerStyle,btnStyle}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyle} onClick={()=>swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSlideBtn
