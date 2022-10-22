import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "../CSS files/uploadSongs.module.css";
import { useDropzone } from "react-dropzone";
import MusicGenres from "musicgenres-json";

import {
  FcPicture,
  FcBusinessman,
  FcHeadset,
  FcBusinesswoman,
  FcCopyright,
  FcCalendar,
  FcMusic,
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

  const [releaseDateCon, setReleaseDateCon] = useState(false);
  const showReleaseDate = () => {
    setReleaseDateCon(!releaseDateCon);
  };

  return (
    <div className={classes.upload_page_con}>
      {releaseDateCon && (
        <div
          className={classes.pick_a_date_con}
          onClick={() => setReleaseDateCon(!releaseDateCon)}
        ></div>
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
            placeholder={"Main Artiste"}
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
          placeholder={"Other artiste e.g Isaac Chukwuma, Isong Ahmad"}
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

  const [performer, setPerformer] = useState(false);
  const [producer, setProducer] = useState(false);
  const [remixer, setRemixer] = useState(false);
  const [composer, setComposer] = useState(false);
  const [songwriter, setSongwriter] = useState(false);
  const [publisher, setPublisher] = useState(false);
  const [featuring, setFeaturing] = useState(false);
  const [conductor, setConductor] = useState(false);
  const [arranger, setArranger] = useState(false);
  const [orchestra, setOrchestra] = useState(false);
  const [actor, setActor] = useState(false);

  const [filledText, setFilledText] = useState({
    perfomerText: "",
    producerText: "",
    remixerText: "",
    composerText: "",
    songwriterText: "",
    publisherText: "",
    featuringText: "",
    conductorText: "",
    arrangerText: "",
    orchestraText: "",
    actorText: "",
  });

  const {
    perfomerText,
    producerText,
    remixerText,
    composerText,
    songwriterText,
    publisherText,
    featuringText,
    conductorText,
    arrangerText,
    orchestraText,
    actorText,
  } = filledText;

  const onFillText = (e) => {
    setFilledText(() => ({ ...filledText, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  return (
    <div className={classes.page3_con}>
      <div className={classes.credits_fill_space_con}>
        <p
          className={classes.featuring}
          style={{ marginBottom: "30px", color: "var(--red)" }}
        >
          Credits
        </p>{" "}
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Performer(s)</p>{" "}
            <span
              onClick={() => setPerformer(!performer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {performer && (
            <input
              type={"text"}
              name={"perfomerText"}
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
            <p className={classes.featuring}>Remixer(s)</p>{" "}
            <span
              onClick={() => setRemixer(!remixer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {remixer && (
            <input
              type={"text"}
              name={"remixerText"}
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
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Lyricist(s)</p>{" "}
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
            <p className={classes.featuring}>Publisher(s)</p>{" "}
            <span
              onClick={() => setPublisher(!publisher)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {publisher && (
            <input
              type={"text"}
              name={"publisherText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>
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
            <p className={classes.featuring}>Conductor(s)</p>{" "}
            <span
              onClick={() => setConductor(!conductor)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {conductor && (
            <input
              type={"text"}
              name={"conductorText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Aranger(s)</p>{" "}
            <span
              onClick={() => setArranger(!arranger)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {arranger && (
            <input
              type={"text"}
              name={"arrangerText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Orchestra(s)</p>{" "}
            <span
              onClick={() => setOrchestra(!orchestra)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {orchestra && (
            <input
              type={"text"}
              name={"orchestraText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Actor(s)</p>{" "}
            <span onClick={() => setActor(!actor)} className={classes.pencil}>
              <BsPencilFill />
            </span>
          </div>
          {actor && (
            <input
              type={"text"}
              name={"actorText"}
              onChange={onFillText}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
            />
          )}
        </div>
      </div>
      <div className={classes.credits_filled_display}>
        {/* performer */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={perfomerText !== "" ? classes.feat : classes.feat_grey}
            />{" "}
            <h2
              className={perfomerText !== "" ? classes.feat : classes.feat_grey}
            >
              Performed by:
            </h2>
          </div>
          {perfomerText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${perfomerText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
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

        {/* remixer */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={remixerText !== "" ? classes.feat : classes.feat_grey}
            />{" "}
            <h2
              className={remixerText !== "" ? classes.feat : classes.feat_grey}
            >
              Remixed by:
            </h2>
          </div>

          {remixerText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${remixerText.replace(
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

        {/* publisher */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={
                publisherText !== "" ? classes.feat : classes.feat_grey
              }
            />{" "}
            <h2
              className={
                publisherText !== "" ? classes.feat : classes.feat_grey
              }
            >
              Published by:
            </h2>
          </div>
          {publisherText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${publisherText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>

        {/* feat */}
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

        {/* conductor */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={
                conductorText !== "" ? classes.feat : classes.feat_grey
              }
            />{" "}
            <h2
              className={
                conductorText !== "" ? classes.feat : classes.feat_grey
              }
            >
              Conducted by:
            </h2>
          </div>
          {conductorText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${conductorText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>

        {/* arranger */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={arrangerText !== "" ? classes.feat : classes.feat_grey}
            />{" "}
            <h2
              className={arrangerText !== "" ? classes.feat : classes.feat_grey}
            >
              Arranged by:
            </h2>
          </div>
          {arrangerText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${arrangerText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>

        {/* orchestra */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={
                orchestraText !== "" ? classes.feat : classes.feat_grey
              }
            />{" "}
            <h2
              className={
                orchestraText !== "" ? classes.feat : classes.feat_grey
              }
            >
              Orchestrated by:
            </h2>
          </div>
          {orchestraText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${orchestraText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>

        {/* orchestra */}
        <>
          <div className={classes.feat_con}>
            <AiFillCheckCircle
              className={actorText !== "" ? classes.feat : classes.feat_grey}
            />{" "}
            <h2 className={actorText !== "" ? classes.feat : classes.feat_grey}>
              Acted by:
            </h2>
          </div>
          {actorText !== "" && (
            <h2 className={classes.credits_filled}>{` ◉ ${actorText.replace(
              /,/g,
              "\n ◉ "
            )}`}</h2>
          )}
        </>
      </div>
    </div>
  );
}

const genres = new MusicGenres();
const genreList = genres.get();

const languagesArr = [
  "Afrikaans",
  "Arabic",
  "Bengali",
  "Bulgarian",
  "Cantonese",
  "Catalan",
  "Chinese",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Estonian",
  "Finnish",
  "French",
  "German",
  "Greek",
  "Haitian",
  "Hausa",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Icelandic",
  "Igbo",
  "Indonesian",
  "Irish",
  "Italian",
  "Japanese",
  "Kazakh",
  "Korean",
  "Lao",
  "Latin",
  "Latvian",
  "Lithuanian",
  "Malay",
  "Norweigian",
  "Persian",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Romanian",
  "Russian",
  "Sanskrit",
  "Slovak",
  "Slovenian",
  "Spanish",
  "Swedish",
  "Tagalog",
  "Tamil",
  "Telugu",
  "Thai",
  "Turkish",
  "Ukranian",
  "Urdu",
  "Vietnamese",
  "Yoruba",
  "Zulu",
];

function PageFour(props) {
  // console.log(genreList);

  const [genre, setGenre] = useState("");
  const genreState = (e) => {
    setGenre(e.target.value);
  };

  const [lang, setLang] = useState("");
  const langState = (e) => {
    setLang(e.target.value);
  };
  return (
    <div>
      <h2 className={classes.featuring} style={{ marginBottom: "10px" }}>
        Genre
      </h2>
      <div className={classes.featuring_con}>
        <select className={classes.genre} onChange={genreState}>
          {genreList.map((item, index) => (
            <>
              <option value={item}>{item}</option>{" "}
            </>
          ))}
        </select>
      </div>

      {/* languages */}
      <h2 className={classes.featuring} style={{ marginBottom: "10px" }}>
        Language
      </h2>
      <div className={classes.featuring_con}>
        <select className={classes.genre} onChange={langState}>
          {languagesArr.map((item, index) => (
            <>
              <option value={item}>{item}</option>{" "}
            </>
          ))}
        </select>
      </div>
    </div>
  );
}
function PageFive(props) {
  return (
    <div>
      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_small}>
          <div className={classes.purple_block}>
            <FcCopyright className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"Copyright holder"}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <div className={classes.purple_block}>
            <FcCalendar className={classes.people_con} />
          </div>
          <div className={classes.input_copyright_date}>
            <p className={classes.copyright_year_text}>Copyright Year</p>
            <YearPicker />
          </div>
        </div>
      </div>

      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_small}>
          <input
            type={"text"}
            className={classes.input_full}
            style={{ margin: "0" }}
            placeholder={"USPC"}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <input
            type={"text"}
            className={classes.input_full}
            style={{ margin: "0", height: "50px" }}
            placeholder={"ISRC"}
          />
        </div>
      </div>
    </div>
  );
}
export default UploadSongs;
