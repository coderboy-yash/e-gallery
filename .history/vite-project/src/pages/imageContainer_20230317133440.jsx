import React, { useEffect, useState } from "react";
import eye from "../assets/eye.png";
const ImageContainer = ({ image, format, height, width, bytes }) => {
  console.log(image);
  const [count, setCount] = useState(0);
  const counting = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(count);
  }, count);

  return (
    <div>
      <div className="image-preview w-56 bg-slate-800 text-white p-4 flex flex-col gap-5">
        <img src={image} alt="" className="w-96 object-cover h-44" />
        <h2>format: {format}</h2>
        <h2>height: {height} px</h2>
        <h2>width: {width} px</h2>
        <h2>size {bytes / 1000} KB</h2>

        <h2 className="overflow-hidden flex items-start flex-col ">
          view image:
          <button onClick={(e) => counting(e)}>
            <a
              className="text-yellow-200 hover:text-gray-300"
              href={image}
              target="_blank"
            >
              {image}
            </a>
          </button>
          <div className="flex gap-2">
            <img className="w-4 " src={eye} />
            {count}
          </div>
        </h2>
      </div>
    </div>
  );
};

export default ImageContainer;
