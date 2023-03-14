import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);
  // const [url, setUrl] = useState(null);
  // const gallery = [];
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
            { url: result.info.url, public_id: result.info.public_id },
          ]);
          console.log("Done! Here is the image info: ", result.info.secure_url);
          // setUrl(result.info.secure_url);
          // gallery.push(result.info.secure_url);
          // console.log(gallery);
        }
      }
    );
    // open widget
    myWidget.open();
  }
  return (
    <div className="App">
      <button
        id="upload-widget"
        className="cloudinary-button"
        onClick={() => handleOpenWidget()}
      >
        upload pictures
      </button>
      <div className="images-preview-container">
        show pictures
        {images.map((image) => (
          <div className="image-preview">
            <img src={image.url} alt="" />
          </div>
        ))}
        {/* <img src={image.url} alt="" /> */}
      </div>
    </div>
  );
}

export default App;
