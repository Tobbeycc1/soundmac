import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "../CSS files/uploadSongs.module.css";
import { useDropzone } from "react-dropzone";

import { FcPicture } from "react-icons/fc";
import { FcHeadset } from "react-icons/fc";

import { useEffect } from "react";
import { useState } from "react";

function UploadSongs(props) {
  // back button
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };

  // console.log(acceptedFileItems.length > 0);

  // input music

  return (
    <div>
      <span onClick={backBtn} className={classes.back_icon}>
        <IoReturnDownBack />
      </span>{" "}
      <h2 className={classes.text}>Upload Songs</h2>
      <div className={classes.file_uploader_con}>
        <div className={classes.upload_group_con}>
          <UploadImageComp />
          <UploadAudioComp />
        </div>

        <div className={classes.form_group}>
          {/* artiste name  */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Artiste Name</label>
            <div className={classes.input_con}>
              <input
                type={"text"}
                placeholder={"enter artiste name"}
                className={classes.input_form}
              />
            </div>
          </div>
          {/* Song title */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Song Title</label>
            <div className={classes.input_con}>
              <input
                type={"text"}
                placeholder={"enter song title"}
                className={classes.input_form}
              />
            </div>
          </div>
          {/* Copywright holder  */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Copywright Holder</label>
            <div className={classes.input_con}>
              <input
                type={"text"}
                placeholder={"enter copywright holder"}
                className={classes.input_form}
              />
            </div>
          </div>
          {/* Copywright Year */}
          <div className={classes.input_con_con}>
            <label className={classes.label}> Copywright Year</label>
            <div className={classes.input_con}>
              <input
                type={"date"}
                placeholder={"pick date"}
                className={classes.input_form_date}
              />
            </div>
          </div>

          {/* Release date */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Release Date</label>
            <div className={classes.input_con}>
              <input
                type={"date"}
                placeholder={"pick date"}
                className={classes.input_form_date}
              />
            </div>
          </div>
          {/* Language  */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Language</label>
            <div className={classes.input_con}>
              <input
                type={"text"}
                placeholder={"enter language"}
                className={classes.input_form}
              />
            </div>
          </div>
          {/* explicit */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Explicit ?</label>
            <div className={classes.input_con}>
              <select className={classes.input_form}>
                <option>yes</option>
                <option>no</option>
              </select>
            </div>
          </div>

          {/* credit  */}
          <div className={classes.input_con_con}>
            <label className={classes.label}>Credit</label>
            <div className={classes.input_con}>
              <input
                type={"text"}
                placeholder={
                  "seperate each individual's name with a comma ( , )"
                }
                className={classes.input_form_credit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const UploadImageComp = () => {
  //   image upload library
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "music/jpeg": [],
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
  return (
    <div>
      {/* Image upload button */}
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
            <p className={classes.type_text}>
              (Only *.jpeg and *.png images will be accepted)
            </p>
          </div>
        </div>
        <div>
          {acceptedFileItems.length > 0 && (
            <div className={classes.mssg_con}>
              {" "}
              <h4 className={classes.mssg}>Accepted </h4>
              <span className={classes.file_name}>{acceptedFileItems}</span>
            </div>
          )}

          {fileRejectionItems.length > 0 && (
            <div className={classes.mssg_con_red}>
              {" "}
              <h4 className={classes.mssg_red}>Rejected </h4>
              <span className={classes.file_name}>{fileRejectionItems}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// music upload component
const UploadAudioComp = () => {
  //   image upload library
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "audio/wav": [],
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
  return (
    <div>
      {/* audio upload button */}
      <div>
        <div className={classes.upload_container}>
          <div
            {...getRootProps({ className: "dropzone" })}
            className={classes.upload_sub_con}
          >
            <input {...getInputProps()} />
            <div>
              <FcHeadset className={classes.picture_con} />
            </div>
            <p className={classes.type_text}>
              (Only *.wav images will be accepted)
            </p>
          </div>
        </div>
        <div>
          {acceptedFileItems.length > 0 && (
            <div className={classes.mssg_con}>
              {" "}
              <h4 className={classes.mssg}>Accepted </h4>
              <span className={classes.file_name}>{acceptedFileItems}</span>
            </div>
          )}

          {fileRejectionItems.length > 0 && (
            <div className={classes.mssg_con_red}>
              {" "}
              <h4 className={classes.mssg_red}>Rejected </h4>
              <span className={classes.file_name}>{fileRejectionItems}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadSongs;
