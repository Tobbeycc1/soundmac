import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "../CSS files/uploadSongs.module.css";
import { useDropzone } from "react-dropzone";

import { FcPicture } from "react-icons/fc";
import { FcHeadset } from "react-icons/fc";

import { FcBusinessman } from "react-icons/fc";
import { FcMusic } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

import { FcDownRight } from "react-icons/fc";
import { FcDownLeft } from "react-icons/fc";

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

  const [clickCount, setClickCount] = useState(0);

  const pageIncrement = () => {
    setClickCount(clickCount + 1);
    // clickCount > 2 && setClickCount(0);
  };

  const pageDecrement = () => {
    setClickCount(clickCount - 1);
  };
  console.log(clickCount);

  return (
    <div>
      <div>
        <span onClick={backBtn} className={classes.back_icon}>
          <IoReturnDownBack />
        </span>{" "}
        <h2 className={classes.text}>Upload Songs</h2>
      </div>
      <div className={classes.upload_group_con}>
        {clickCount === 0 && (
          <>
            <UploadImageComp />
            <UploadAudioComp />
          </>
        )}

        {clickCount === 1 && (
          <>
            <PageTwo />
          </>
        )}

        {clickCount === 2 && (
          <>
            <div>Copywright Info, producer & songwriter</div>
          </>
        )}

        {clickCount === 3 && (
          <>
            <div>uspc, isrc & release date</div>
          </>
        )}
      </div>

      <div className={classes.next_con}>
        {clickCount !== 0 && (
          <p className={classes.prev_button} onClick={pageDecrement}>
            <FcDownLeft />
          </p>
        )}

        {clickCount === 3 ? (
          <p className={classes.submit}>submit</p>
        ) : (
          <p className={classes.next_button} onClick={pageIncrement}>
            <FcDownRight />
          </p>
        )}
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

// song details

function PageTwo(props) {
  return (
    <div>
      {/* form */}
      <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcBusinessman className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input}
          style={{ marginRight: "auto" }}
          placeholder={"Artiste name"}
        />

        <div className={classes.purple_block}>
          <FcMusic className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input}
          placeholder={"Song title"}
        />
      </div>

      <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcBusinesswoman className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input}
          style={{ width: "100%" }}
          placeholder={"featuring? e.g Isaac Chukwuma, Isong Ahmad"}
        />
      </div>

      <form>
        <p className={classes.explicit}>Explicit?</p>
        <input type={"radio"} name="explicit" />{" "}
        <label style={{ marginRight: "40px" }}>Yes</label>
        <input type={"radio"} name="explicit" /> <label>No</label>
      </form>
    </div>
  );
}

export default UploadSongs;
