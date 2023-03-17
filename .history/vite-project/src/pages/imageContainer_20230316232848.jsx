import React from "react";

const imageContainer = (image) => {
  console.log(image);
  return (
    <div>
      <div className="image-preview w-48">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default imageContainer;
