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
      <div>
        <span onClick={backBtn} className={classes.back_icon}>
          <IoReturnDownBack />
        </span>{" "}
        <h2 className={classes.text}>Upload Songs</h2>
      </div>
      <div className={classes.upload_group_con}>
        <UploadImageComp />
        <UploadAudioComp />
      </div>
      <div className={classes.form_con}>
        {/* for Artiste name & song title  */}
        <div className={classes.first_form_sub_con}>
          <div className={classes.small_input_con}>
            <label className={classes.form_label}>Artiste name</label> <br />
            <input
              type={"text"}
              className={classes.small_input}
              placeholder="enter ariste's name"
            />
          </div>
          <div className={classes.small_input_con_B}>
            <label className={classes.form_label}>Song title</label> <br />
            <input
              type={"text"}
              placeholder="enter song's title"
              className={classes.small_input}
            />
          </div>
        </div>

        {/* for Copywright holder & date  */}
        <div className={classes.first_form_sub_con}>
          <div className={classes.small_input_con}>
            <label className={classes.form_label}>Copywright holder</label>{" "}
            <br />
            <input
              type={"text"}
              className={classes.small_input}
              placeholder="enter copywright holder's name"
            />
          </div>
          <div className={classes.small_input_con_B}>
            <label className={classes.form_label}>Copywright date</label> <br />
            <input
              type={"date"}
              placeholder="enter song's title"
              className={classes.small_input}
            />
          </div>
        </div>

        {/* for language, Explicit, date  */}
        <div className={classes.first_form_sub_con}>
          <div className={classes.small_input_con}>
            <label className={classes.form_label}> Language</label> <br />
            <input
              type={"text"}
              className={classes.small_input}
              placeholder="e.g English, Spanish, Yoruba"
            />
          </div>

          {/* Explcit & release date */}
          <div className={classes.smaller_input_con}>
            <label className={classes.form_label}>Explicit?</label> <br />
            <select className={classes.small_input}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={classes.smaller_input_con_B}>
            <label className={classes.form_label}>Release date</label> <br />
            <input
              type={"date"}
              placeholder="enter song's title"
              className={classes.small_input}
            />
          </div>
        </div>

        {/* for producers  */}
        <div className={classes.first_form_sub_con}>
          <div className={classes.big_input_con}>
            <label className={classes.form_label}>Producer(s) </label> <br />
            <input
              type={"text"}
              className={classes.small_input}
              placeholder="e.g Chukwuma Musa, Isong Ayodele"
            />
          </div>
        </div>

        {/* for Song writers  */}
        <div className={classes.first_form_sub_con}>
          <div className={classes.big_input_con}>
            <label className={classes.form_label}>Songwriter(s) </label> <br />
            <input
              type={"text"}
              className={classes.small_input}
              placeholder="e.g Chukwuma Musa, Isong Ayodele"
            />
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
    <div className={classes.Outer_con}>
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
    <div className={classes.Outer_con}>
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
