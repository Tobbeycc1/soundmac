import { useState } from "react";
import ImageUploading from "react-images-uploading";
import classes from "../../CSS files/uploadSongs.module.css";
import { FcPicture } from "react-icons/fc";
import { useContext } from "react";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import { useEffect } from "react";
import errorSRCLINK from "../../images/uploadImageIcon.png";

function UploadImageButton() {
  const { allInfo, setAllInfo } = useContext(UploadSongContext);

  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const [src, setSrc] = useState("");

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setAllInfo((prev) => ({ ...prev, ["image"]: imageList }));
  };

  const srcFn = () => {
    setSrc(allInfo.image[0].data_url);
    console.log(allInfo.image.length);
  };
  useEffect(() => {
    allInfo.image.length !== 0 && srcFn();
  }, [allInfo]);
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div className={classes.src_con}>
              <img
                src={src}
                alt={""}
                className={classes.src}
                onError={(e) => (
                  (e.target.onerror = null), (e.target.src = errorSRCLINK)
                )}
              />
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img style={{ display: "none" }} src={image.data_url} alt="" />

                <div
                  className={classes.change}
                  onClick={() => onImageUpdate(index)}
                >
                  Change
                </div>
              </div>
            ))}

            <div
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              <p className={classes.choose_file}> Choose file</p>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImageButton;
