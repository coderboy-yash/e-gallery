import React from "react";
import eye from "../assets/eye.png";
const ImageContainer = ({ image, format, height, width, bytes }) => {
  console.log(image);
  return (
    <div>
      <div className="image-preview w-56 bg-slate-800 text-white p-4">
        <img src={image} alt="" className="w-96 object-cover h-44" />
        <h2>format: {format}</h2>
        <h2>height: {height}</h2>
        <h2>width: {width}</h2>
        <h2>size {bytes / 1000} KB</h2>

        <h2 className="overflow-hidden flex items-center ">
          view image:
          <a className="text-yellow-200" href={image} target="_blank">
            <img className="w-4" src={eye} />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ImageContainer;
