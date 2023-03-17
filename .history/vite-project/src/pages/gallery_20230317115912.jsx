import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ImageContainer from "./ImageContainer";
function Gallery() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  console.log(user);
  // logout section
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");

    dispatch(logout());
  };

  // ////////////////////////////get request
  const [data, setData] = useState(null);

  // Axios.get(
  //   `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/user?user=${user.name}`
  // )
  //   .then(function (response) {
  //     console.log(response.data[0].images);
  //     // setData(response.data[0]);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // console.log(data);

  // ///////////////////
  const [images, setImages] = useState([]);
  // const [url, setUrl] = useState("");
  // const [format, setFormat] = useState("");
  // const [height, setHeight] = useState(0);
  // const [width, setWidth] = useState(0);
  // const [bytes, setBytes] = useState(0);

  const [imageToRemove, setImageToRemove] = useState(null);

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "yash-911-cloud",
        uploadPreset: "vaaar8p2",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [
            ...prev,
            {
              url: result.info.url,
              format: result.info.format,
              height: result.info.height,
              width: result.info.width,
              bytes: result.info.bytes,
            },
          ]);
          console.log("Done! Here is the image info: ", result);
          // setUrl(result.info.secure_url);
          // setFormat(result.info.format);
          // setHeight(result.info.height);
          // setWidth(result.info.width);
          // setBytes(result.info.bytes);
        }
      }
    );
    // open widget
    myWidget.open();
  }
  useEffect(() => {
    console.log(images);
    if (images === []) return;
    Axios.put(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/image`, {
      username: user.name,
      image: images,
    })
      .then((response) => {
        Axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/user?user=${
            user.name
          }`
        )
          .then(function (response) {
            console.log(response.data[0].images);
            setData(response.data[0]);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [images]);

  useEffect(() => {
    console.log("Initiating data and images");
    Axios.get(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/user?user=${
        user.name
      }`
    )
      .then(function (response) {
        console.log("response: ", response.data[0]);
        setImages(response.data[0].images);
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        <div className="flex  justify-center items-center text-xs p-4">
          <h1>View your uploaded images in the gallery</h1>
        </div>
        <div className="flex flex-wrap gap-8 p-4">
          {images.map((image, index) => (
            <ImageContainer image={image.url} />
          ))}
        </div>
      </div>
      {/* logout section */}
      <button onClick={(e) => handleLogout(e)}>logout</button>
    </div>
  );
}

export default Gallery;
