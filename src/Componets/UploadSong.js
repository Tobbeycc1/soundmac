import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "../CSS files/uploadSongs.module.css";
import { useDropzone } from "react-dropzone";
import MusicGenres from "musicgenres-json";
import { ImCancelCircle } from "react-icons/im";

import { FcPicture, FcHeadset, FcCopyright, FcCalendar } from "react-icons/fc";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import PageTwo from "./uploadSongsPages/pageTwo";
import PageThree from "./uploadSongsPages/pageThree";
import PageFour from "./uploadSongsPages/pageFour";
import PageFive from "./uploadSongsPages/pageFive";

// import { YearPicker } from "react-dropdown-date";

function UploadSongs(props) {
  // back button
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };

  // change page numbers
  const [clickCount, setClickCount] = useState(0);

  const pageIncrement = () => {
    setClickCount(clickCount + 1);
  };

  const pageDecrement = () => {
    setClickCount(clickCount - 1);
  };

  // set release date after filling all form
  const [releaseDateCon, setReleaseDateCon] = useState(false);
  const showReleaseDate = () => {
    setReleaseDateCon(!releaseDateCon);
  };

  return (
    <div className={classes.upload_page_con}>
      <ToastContainer />
      {releaseDateCon && (
        <div className={classes.pick_a_date_con}>
          <div
            className={classes.x}
            onClick={() => setReleaseDateCon(!releaseDateCon)}
          >
            <ImCancelCircle className={classes.Gi} onClick={props.showDeets} />
          </div>
          <div className={classes.pick_date_text}>
            <label className={classes.R_d_label}>Release Date</label>
            <input type={"date"} className={classes.release_date_input} />
            <div className={classes.submit_modal_con}>
              <p className={classes.submit_modal_text}>Submit</p>
            </div>
          </div>
        </div>
      )}

      <div className={classes.backBtn_upload_con}>
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
            <PageThree />
          </>
        )}

        {clickCount === 3 && (
          <>
            <PageFour />
          </>
        )}

        {clickCount === 4 && (
          <>
            <div>
              <PageFive />
            </div>
          </>
        )}
      </div>

      <div className={classes.next_con}>
        {clickCount !== 0 && (
          <p className={classes.prev_button} onClick={pageDecrement}>
            prev{" "}
          </p>
        )}

        {clickCount === 4 ? (
          <p className={classes.submit} onClick={showReleaseDate}>
            submit
          </p>
        ) : (
          <p className={classes.next_button} onClick={pageIncrement}>
            next{" "}
          </p>
        )}
      </div>
    </div>
  );
}

const UploadImageComp = () => {
  //   image upload library
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
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
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
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
              (Only *.wav audio will be accepted)
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

const genres = new MusicGenres();
const genreList = genres.get();

export default UploadSongs;
