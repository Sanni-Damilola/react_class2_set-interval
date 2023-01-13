import React, { useState, useEffect, useRef } from "react";

import img1 from "../image/ava1.jpg";
import img2 from "../image/micheal.webp";
import img3 from "../image/efootball1.jpg";
import img4 from "../image/coding.jpg";

const Header = () => {
  const [count, setcount] = useState(0);
  const [count_dec, setdec] = useState("");

  const ref_bi = useRef();
  const ref_circle1 = useRef();
  const ref_circle2 = useRef();
  const ref_circle3 = useRef();
  const ref_circle4 = useRef();

  useEffect(() => {
    ref_bi.current.style.backgroundImage = bi[count % bi.length];
    ref_circle1.current.style.backgroundColor = circle1[count % circle1.length];
    ref_circle2.current.style.backgroundColor = circle2[count % circle2.length];
    ref_circle3.current.style.backgroundColor = circle3[count % circle3.length];
    ref_circle4.current.style.backgroundColor = circle4[count % circle4.length];

    // setInterval(() => {
    //   setcount(count + 1);
    // }, 3000);
  });

  const bi = [
    `url('${img1}')`,
    `url('${img2}')`,
    `url('${img3}')`,
    `url('${img4}')`,
  ];

  const circle1 = ["black", "red", "red", "red"];
  const circle2 = ["red", "black", "red", "red"];
  const circle3 = ["red", "red", "black", "red"];
  const circle4 = ["red", "red", "red", "black"];

  const dec = ["a", "b", "c", "d"];

  const add = () => {
    setcount(count + 1);
  };

  const sub = () => {
    if (count <= 0) {
      setcount(bi.length - 1);
    } else {
      setcount(count - 1);
    }
  };

  const fun_dec = () => {
    count_dec([...dec.length]);
  };

  return (
    <div ref={ref_bi} className="container">
      <h1>header</h1>
      <div className="button_wrapper">
        <button onClick={sub}>-</button>
        <h1>{dec[count % dec.length]}</h1>
        <button onClick={add}>+</button>
      </div>

      <div className="circle_wrapper">
        <div ref={ref_circle1}></div>
        <div ref={ref_circle2}></div>
        <div ref={ref_circle3}></div>
        <div ref={ref_circle4}></div>
      </div>
    </div>
  );
};

export default Header;
