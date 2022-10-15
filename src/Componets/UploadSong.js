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
import { BsPencilFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import { YearPicker } from "react-dropdown-date";
import { useEffect } from "react";

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
    <div className={classes.upload_page_con}>
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
          <p className={classes.submit}>submit</p>
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

  const [featuring, setFeaturing] = useState(false);
  const [songwriter, setSongwriter] = useState(false);
  const [producer, setProducer] = useState(false);
  const [composer, setComposer] = useState(false);

  const [filledText, setFilledText] = useState({
    featuringText: "",
    songwriterText: "",
    producerText: "",
    composerText: "",
  });

  const {
    featuringText,
    songwriterText,
    producerText,
    composerText,
  } = filledText;

  const onFillText = (e) => {
    setFilledText(() => ({ ...filledText, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  return (
    <div className={classes.page3_con}>
      <div className={classes.credits_fill_space_con}>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Featuring</p>{" "}
            <span
              onClick={() => setFeaturing(!featuring)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {featuring && (
            <input
              type={"text"}
              name={"featuringText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>

        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Songwriter(s)</p>{" "}
            <span
              onClick={() => setSongwriter(!songwriter)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {songwriter && (
            <input
              type={"text"}
              name={"songwriterText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>

        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Producer(s)</p>{" "}
            <span
              onClick={() => setProducer(!producer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {producer && (
            <input
              type={"text"}
              name={"producerText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>

        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Composer(s)</p>{" "}
            <span
              onClick={() => setComposer(!composer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {composer && (
            <input
              type={"text"}
              name={"composerText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>
      </div>
      <div className={classes.credits_filled_display}>
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={
                featuringText !== "" ? classes.feat : classes.feat_grey
              }
            />{" "}
            <h2
              className={
                featuringText !== "" ? classes.feat : classes.feat_grey
              }
            >
              Feat
            </h2>
          </div>
          {featuringText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${featuringText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>
        {/* songwriter */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={
                songwriterText !== "" ? classes.feat : classes.feat_grey
              }
            />{" "}
            <h2
              className={
                songwriterText !== "" ? classes.feat : classes.feat_grey
              }
            >
              Written by:
            </h2>
          </div>
          {songwriterText !== "" && (
            <h2
              className={classes.credits_filled}
            >{` ◉ ${songwriterText.replace(/,/g, "\n ◉ ")}`}</h2>
          )}
        </>

        {/* producer */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={producerText !== "" ? classes.feat : classes.feat_grey}
            />{" "}
            <h2
              className={producerText !== "" ? classes.feat : classes.feat_grey}
            >
              Produced by:
            </h2>
          </div>

          {producerText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${producerText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>

        {/* composer */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={composerText !== "" ? classes.feat : classes.feat_grey}
            />{" "}
            <h2
              className={composerText !== "" ? classes.feat : classes.feat_grey}
            >
              Composed by:
            </h2>
          </div>

          {composerText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${composerText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>
      </div>
    </div>
  );
}

function PageFour(props) {
  return <div></div>;
}
function PageFive(props) {
  return (
    <div>
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
      </div>
    </div>
  );
}
export default UploadSongs;
