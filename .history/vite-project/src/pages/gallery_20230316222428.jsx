import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import image from "./image";
function Gallery() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // logout section
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");

    dispatch(logout());
  };

  // ////////////////////////////
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "yash-911-cloud",
        uploadPreset: "vaaar8p2",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [...prev, result.info.url]);
          console.log("Done! Here is the image info: ", result.info.secure_url);
        }
      }
    );
    // open widget
    myWidget.open();
  }
  useEffect(() => {
    console.log(images);
    Axios.put(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/image`, {
      username: user.name,
      image: images,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [images]);
  return (
    <div className="App">
      <div
        className="bg-center bg-cover bg-no-repeat h-screen  overflow-x-hidden  w-auto "
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2018/03/09/18/39/dandelion-3212292_960_720.jpg)",
        }}
      >
        {" "}
        <div className="text-white flex flex-col  justify-center items-center ml-[40rem] mt-40 w-[25rem]  gap-4 drop-shadow-lg shadow-yellow-500">
          <h1 className="text-[3rem]  mb-8 border-b-2 border-b-amber-300">
            Welcome to your e-gallery{" "}
            <span className="text-yellow-300 ">{user.name}</span>
          </h1>
          <h2>
            put all your images from various platforms like{" "}
            <span className="text-yellow-300 ">
              {" "}
              insta, unsplash, web, your pc{" "}
            </span>{" "}
            or any other place at one place.
          </h2>
          <button
            id="upload-widget"
            className="cloudinary-button"
            onClick={() => handleOpenWidget()}
          >
            upload pictures
          </button>
          <h3 className="text-xs text-yellow-300">
            {" "}
            upload your images in your <span className=" ">e-gallery</span> and
            get a sharable link.
          </h3>
        </div>
      </div>

      <div className="images-preview-container">
        <div className="flex justify-center items-center text-xs p-4">
          <h1>View your uploaded images in the gallery</h1>
        </div>
        <div>
          {images.map((image, index) => (
            <image />
          ))}
        </div>
      </div>
      {/* logout section */}
      <button onClick={(e) => handleLogout(e)}>logout</button>
    </div>
  );
}

export default Gallery;
