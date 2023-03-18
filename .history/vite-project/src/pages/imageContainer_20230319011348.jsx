import React, { useEffect, useState } from "react";
import eye from "../assets/eye.png";

const ImageContainer = ({
  image,
  format,
  height,
  width,
  bytes,
  setImages,
  images,
}) => {
  // console.log(image);
  const deleteImage = (e) => {
    e.preventDefault();
    console.log(image, "   hello", images[0].url);
    const newimg = images.filter((img) => img.url !== image);
    // setImages();
    console.log(newimg);
  };
  const [count, setCount] = useState(0);
  const counting = (e) => {
    e.preventDefault();
    var n = count + 1;
    setCount(n);
    console.log(count);
    window.open(image, "_blank");
  };
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <div className="image-preview w-56 bg-slate-800 text-white p-4 flex flex-col gap-5">
        <a href={image} target="_blank" onClick={counting}>
          <img src={image} alt="" className="w-96 object-cover h-44" />
          <span className="text-yellow-300"> View image.</span>
        </a>
        <h2>format: {format}</h2>
        <h2>height: {height} px</h2>
        <h2>width: {width} px</h2>
        <h2>size {bytes / 1000} KB</h2>
        <h2 className="overflow-hidden flex items-start flex-col ">
          <div className="flex gap-2">
            <img className="w-4 " src={eye} />
            {count}
          </div>
        </h2>
        <button className="text-black" onClick={deleteImage}>
          delete
        </button>
      </div>
    </div>
  );
};

export default ImageContainer;
