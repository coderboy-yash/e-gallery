import React from "react";

const ImageContainer = ({ image, format, height, width, bytes }) => {
  console.log(image);
  return (
    <div>
      <div className="image-preview w-48 bg-black">
        <img src={image} alt="" />
        <h2>format:{format}</h2>
        <h2>height:{height}</h2>
        <h2>width:{width}</h2>
        <h2>size {bytes / 1000} KB</h2>
      </div>
    </div>
  );
};

export default ImageContainer;
