import React from "react";

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
        <h2 className="overflow-auto ">
          url:-{" "}
          <a className="text-yellow-200" href={image}>
            {image}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ImageContainer;
