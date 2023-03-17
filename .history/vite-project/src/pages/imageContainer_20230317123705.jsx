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

        <h2 className="overflow-hidden flex ">
          <a className="text-yellow-200" href={image} target="_blank">
            <img
              className="w-28"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_80929906_eye-sign-illustration-vector-white-icon-with-soft-shadow-on-transparent-background.html&psig=AOvVaw0mda3e4Joy79s9G7Y5U8Ci&ust=1679123186574000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjh07mz4v0CFQAAAAAdAAAAABAE"
              alt=""
            />
          </a>
          view image:
        </h2>
      </div>
    </div>
  );
};

export default ImageContainer;
