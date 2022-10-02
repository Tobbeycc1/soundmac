import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "../CSS files/uploadSongs.module.css";
import { useDropzone } from "react-dropzone";

import { FcPicture } from "react-icons/fc";
import { useEffect } from "react";
import { useState } from "react";

function UploadSongs(props) {
  // back button
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };

  //   file upload library
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      maxFiles: 1,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  console.log(acceptedFileItems.length > 0);

  return (
    <div>
      <span onClick={backBtn} className={classes.back_icon}>
        <IoReturnDownBack />
      </span>{" "}
      <h2 className={classes.text}>Upload Songs</h2>
      {/* file upload button */}
      <div>
        <div className={classes.upload_container}>
          <div
            {...getRootProps({ className: "dropzone" })}
            className={classes.upload_sub_con}
          >
            <input {...getInputProps()} />
            <div>
              <FcPicture className={classes.picture_con} />
            </div>
            <p>(Only *.jpeg and *.png images will be accepted)</p>
          </div>
        </div>
        <div>
          {acceptedFileItems.length > 0 && (
            <div>
              {" "}
              <h4>Accepted files</h4>
              <ul>{acceptedFileItems}</ul>
            </div>
          )}

          {fileRejectionItems.length > 0 && (
            <div>
              {" "}
              <h4>Rejected files</h4>
              <ul>{fileRejectionItems}</ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadSongs;
