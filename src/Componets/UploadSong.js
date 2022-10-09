import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "../CSS files/uploadSongs.module.css";
import { useDropzone } from "react-dropzone";

import {
  FcPicture,
  FcBusinessman,
  FcHeadset,
  FcBusinesswoman,
  FcDownRight,
  FcDownLeft,
  FcCopyright,
  FcCalendar,
  FcMusic,
  FcElectricalSensor,
  FcInspection,
  FcDisplay,
  FcDataSheet,
} from "react-icons/fc";

import { useState } from "react";
import { YearPicker } from "react-dropdown-date";

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
            <FcDownLeft className={classes.left_icon} />
          </p>
        )}

        {clickCount === 4 ? (
          <p className={classes.submit}>submit</p>
        ) : (
          <p className={classes.next_button} onClick={pageIncrement}>
            <FcDownRight className={classes.left_icon} />
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
  const [yearSelected, setYear] = useState("Copyright year");
  return (
    <div>
      {/* form */}

      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_small}>
          <div className={classes.purple_block}>
            <FcBusinessman className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"Artiste name"}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <div className={classes.purple_block}>
            <FcMusic className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"Song title"}
          />
        </div>
      </div>

      <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcBusinesswoman className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input_full}
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

function PageThree(props) {
  const [yearSelected, setYear] = useState(1990);
  return (
    <div>
      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_medium}>
          <div className={classes.purple_block}>
            <FcCopyright className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"Copyright holder & date"}
          />
        </div>

        <div className={classes.form_con_smallest}>
          <div className={classes.purple_block}>
            <FcCalendar className={classes.people_con} />
          </div>
          <div className={classes.input_copyright_date}>
            <YearPicker
              yearArray={["2019", "2020"]}
              value={yearSelected}
              onSelect={(e) => setYear(e)}
              hideInput={false}
              minRange={1000}
              maxRange={2018}
            />
          </div>
        </div>
      </div>

      <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcElectricalSensor className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input}
          style={{ width: "100%" }}
          placeholder={"Producer(s)? e.g Isaac Chukwuma, Isong Ahmad"}
        />
      </div>

      <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcInspection className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input}
          style={{ width: "100%" }}
          placeholder={"Songwriter(s)? e.g Isaac Chukwuma, Isong Ahmad"}
        />
      </div>
    </div>
  );
}

function PageFour(props) {
  return (
    <div>
      <div className={classes.form_con} style={{ height: "300px" }}>
        <div className={classes.purple_block}>
          <FcInspection className={classes.people_con} />
        </div>
        <textarea
          className={classes.input}
          style={{ width: "100%" }}
          placeholder={"Credits"}
        />
      </div>
    </div>
  );
}
function PageFive(props) {
  return (
    <div>
      {/* <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcBusinessman className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input}
          style={{ marginRight: "auto" }}
          placeholder={"UPC"}
        />

        <div className={classes.purple_block}>
          <FcMusic className={classes.people_con} />
        </div>
        <input type={"text"} className={classes.input} placeholder={"ISRC"} />
      </div> */}

      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_small}>
          <div className={classes.purple_block}>
            <FcDisplay className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"UPC"}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <div className={classes.purple_block}>
            <FcDataSheet className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"ISRC"}
          />
        </div>
      </div>
    </div>
  );
}
export default UploadSongs;
