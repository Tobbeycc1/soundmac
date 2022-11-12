import classes from "../../../../CSS files/uploadSongs.module.css";
import { ImCancelCircle } from "react-icons/im";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PageThree from "./uploadSongsPages/pageThree";
import PageFour from "./uploadSongsPages/pageFour";
import PageFive from "./uploadSongsPages/pageFive";
import UploadSongContext from "../../../../contexts/upload Song  Fns/uploadSongContext";
import AuthContext from "../../../../contexts/auth/authContext";
import { Loading } from "@nextui-org/react";
import DashboardBackBtn from "../../dashboard utilities/dashboardBackButton";
import PageTwo from "./uploadSongsPages/pageTwo";
import UploadImageButton from "./uploadSongsPages/pageOne";

const privacyPolicyLink =
  "https://docs.google.com/document/d/1-tynZeQmY3k-WYpBu4-enhhRGlXYvvEq3nLWpdvvdF4/edit";
const termsAndConditionsLink =
  "https://docs.google.com/document/d/1-_DkSO5wLcjmCgUsdDBuGAqumsRQBzAOf1mZ8JutOJc/edit";

function UploadSongs(props) {
  // change page numbers
  const [clickCount, setClickCount] = useState(0);
  const [wavFormat, setWavFormat] = useState(false);

  const { user } = useContext(AuthContext);

  // context
  const {
    allInfo,
    accountType,
    onChangeInfo,
    onSubmitAllInfo,
    loading,
  } = useContext(UploadSongContext);

  const pageIncrement = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 0 && allInfo.image.length === 0) {
      toast.error("Upload a valid image!");
      setClickCount(clickCount);
    } else if (clickCount === 0 && allInfo.image[0].file.size > 10000000) {
      toast.error("Image size should be less than 10mb!");
      setClickCount(clickCount);
    } else if (clickCount === 0 && wavFormat === false) {
      toast.error("Upload a valid song!");
      setClickCount(clickCount);
    } else if (clickCount === 0 && allInfo.song.size > 150000000) {
      toast.error("Song size should be less than 150mb!");
      setClickCount(clickCount);
    } else if (clickCount === 1 && allInfo.main_artiste === "") {
      toast.error("Main artiste field can't be empty!");
      setClickCount(clickCount);
    } else if (
      clickCount === 1 &&
      accountType !== "Independent_artist" &&
      accountType !== "Free_account" &&
      allInfo.label_name === ""
    ) {
      toast.error("Label name field can't be empty!");
      setClickCount(clickCount);
    } else if (clickCount === 1 && allInfo.song_title === "") {
      toast.error("Song title field can't be empty!");
      setClickCount(clickCount);
    } else if (clickCount === 1 && allInfo.explicit === "") {
      toast.error("Explicit field can't be empty!");
      setClickCount(clickCount);
    } else if (clickCount === 2 && allInfo.produced_by === "") {
      toast.error("producer field can't be empty!");
      setClickCount(clickCount);
    } else if (clickCount === 2 && allInfo.lyrics_by === "") {
      toast.error("Lyricist field can't be empty!");
      setClickCount(clickCount);
    } else if (
      (clickCount === 3 && allInfo.genre === "") ||
      (clickCount === 3 && allInfo.genre === "click to select")
    ) {
      toast.error("Select a genre");
      setClickCount(clickCount);
    } else if (
      (clickCount === 3 && allInfo.language === "") ||
      (clickCount === 3 && allInfo.language === "click to select")
    ) {
      toast.error("Select a language!");
      setClickCount(clickCount);
    }
  };

  const pageDecrement = () => {
    setClickCount(clickCount - 1);
  };

  // onProceed
  // set release date after filling all form
  const [releaseDateCon, setReleaseDateCon] = useState(false);
  const onProceed = () => {
    if (clickCount === 4 && allInfo.copyright_holder === "") {
      toast.error("Copyright holder field can't be empty!");
      setClickCount(clickCount);
    } else if (clickCount === 4 && allInfo.copyright_year.length !== 4) {
      toast.error("Incorrect copyright year!");
      setClickCount(clickCount);
    } else {
      setReleaseDateCon(true);
    }
  };

  // on submit
  const onSubmit = () => {
    if (allInfo.release_date <= 0) {
      toast.error("Input a valid date!");
    } else {
      onSubmitAllInfo();
    }
  };

  // acknoledgements
  const [acknoledgement, setAcknoledgement] = useState({
    tracks_rejection: false,
    own_the_copyright: false,
    other_artiste_permission: false,
    terms_and_condition: false,
  });
  // on change acknoledgment function
  const onChangeAcknoledgement = (e) => {
    setAcknoledgement((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };
  // console.log(acknoledgement.tracks_rejection);

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
            <p className={classes.R_d_label}>Release Date</p>
            {user.premium !== false ? (
              <input
                type={"date"}
                className={classes.release_date_input}
                name={"release_date"}
                value={allInfo.release_date}
                onChange={onChangeInfo}
              />
            ) : (
              <p
                className={classes.assign_label_uspc}
                style={{ fontWeight: "bold", color: "var(--red)" }}
              >
                {allInfo.release_date.toString()}
              </p>
            )}

            <br />
            <br />
            <p
              className={classes.assign_label_uspc}
              style={{ fontWeight: "bold" }}
            >
              ACKNOLEDGEMENT
            </p>

            <input
              type={"checkbox"}
              name="tracks_rejection"
              className={classes.assign_checkbox}
              onChange={onChangeAcknoledgement}
              checked={acknoledgement.tracks_rejection === true}
            />
            <label className={classes.assign_label_uspc}>
              I Understand tracks may be rejected from stores if they are not
              correctly labelled as explicit or if formatting is inaccurate.
            </label>
            <br />
            <br />
            <input
              type={"checkbox"}
              name="own_the_copyright"
              className={classes.assign_checkbox}
              onChange={onChangeAcknoledgement}
              checked={acknoledgement.own_the_copyright === true}
            />
            <label className={classes.assign_label_uspc}>
              I own the copyright for the music and I authorised to sell it and
              collect royalties.
            </label>
            <br />
            <br />
            <input
              type={"checkbox"}
              name="other_artiste_permission"
              className={classes.assign_checkbox}
              onChange={onChangeAcknoledgement}
              checked={acknoledgement.other_artiste_permission === true}
            />
            <label className={classes.assign_label_uspc}>
              I am not using any other artiste's name, song, title or album
              title without their consent.
            </label>
            <br />
            <br />
            <input
              type={"checkbox"}
              name="terms_and_condition"
              className={classes.assign_checkbox}
              onChange={onChangeAcknoledgement}
              checked={acknoledgement.terms_and_condition === true}
            />
            <label className={classes.assign_label_uspc}>
              I understand that i have agreed the{" "}
              <a
                className={classes.terms_link}
                href={termsAndConditionsLink}
                target="_blank"
                rel="noopener"
              >
                TERMS OF SERVICE{" "}
              </a>{" "}
              AND{" "}
              <a
                className={classes.terms_link}
                href={privacyPolicyLink}
                target="_blank"
                rel="noopener"
              >
                {" "}
                PRIVACY POLICY
              </a>{" "}
              and that they are applicable to this transaction.
            </label>

            <div className={classes.submit_modal_con}>
              {acknoledgement.tracks_rejection === true &&
                acknoledgement.own_the_copyright === true &&
                acknoledgement.other_artiste_permission === true &&
                acknoledgement.terms_and_condition === true &&
                (loading !== true ? (
                  <p className={classes.submit_modal_text} onClick={onSubmit}>
                    Submit
                  </p>
                ) : (
                  <p className={classes.loading_text_button}>
                    {" "}
                    <Loading type="points" color="secondary" /> hold on this
                    might take a while...
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}

      <DashboardBackBtn title="Upload Songs" />
      <div className={classes.upload_group_con}>
        {clickCount === 0 && (
          <>
            <UploadImageButton />
            <UploadAudioComp
              wavFormat={wavFormat}
              setWavFormat={setWavFormat}
            />
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
          <p className={classes.submit} onClick={onProceed}>
            proceed
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

// music upload component
const UploadAudioComp = ({ wavFormat, setWavFormat }) => {
  const { allInfo, setAllInfo } = useContext(UploadSongContext);

  const onChange = (e) => {
    setAllInfo((prev) => ({ ...prev, ["song"]: e.target.files[0] }));
    setWavFormat(e.target.value.includes(".wav"));
    console.log(e.target.value.includes(".wav"));
  };
  return (
    <div className={classes.upload_audio_con}>
      <p className={classes.select_audio}>
        Select Audio (Accepted files: .wav, <br /> not more than 150mb)
      </p>
      <input
        className={classes.upload_song_button}
        type="file"
        name="song"
        id="file"
        onChange={onChange}
      />
      <p className={classes.song_name}>{allInfo.song.name}</p>
    </div>
  );
};

export default UploadSongs;
