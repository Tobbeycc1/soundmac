import { useState } from "react";
import ImageUploading from "react-images-uploading";
import classes from "../../../../../CSS files/uploadSongs.module.css";
import { useContext } from "react";
import { useEffect } from "react";
import errorSRCLINK from "../../../../../images/uploadImageIcon.png";
import UploadAlbumContext from "../../../../../contexts/upload album fns/uploadAlbumContext";

function UploadArtBtn() {
  const { albumInfo, setAlbumInfo } = useContext(UploadAlbumContext);
  console.log(albumInfo);

  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const [src, setSrc] = useState("");

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setAlbumInfo((prev) => ({ ...prev, ["image"]: imageList }));
  };

  const srcFn = () => {
    setSrc(albumInfo.image[0].data_url);
    // console.log(allInfo.image.length);
  };
  useEffect(() => {
    albumInfo.image.length !== 0 && srcFn();
  }, [albumInfo]);
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
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
            <p
              className={classes.select_audio}
              style={{ marginBottom: "10px" }}
            >
              Accepted files: .png/jpg, size: 3000 X 3000
              <br /> not more than 10mb)
            </p>
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
              <p className={classes.choose_file}> Choose album art</p>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadArtBtn;
