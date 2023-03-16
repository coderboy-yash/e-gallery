import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
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
        <h1 className="text-white flex justify-end items-center p-10 mr-32 gap-4 drop-shadow-lg shadow-white">
          Welcome <span>{user.name}</span>
        </h1>
      </div>

      <button
        id="upload-widget"
        className="cloudinary-button"
        onClick={() => handleOpenWidget()}
      >
        upload pictures
      </button>
      <div className="images-preview-container">
        show pictures
        {images.map((image, index) => (
          <div className="image-preview">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      {/* logout section */}
      <button onClick={(e) => handleLogout(e)}>logout</button>
    </div>
  );
}

export default Gallery;
