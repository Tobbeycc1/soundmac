import { useRef, useState } from "react";
import classes from "../CSS files/packagesForm.module.css";
import DatePickerForm from "./DatePicker";
import NumberFormat from "react-number-format";

function PackagesForm(props) {
  const checkBoxA = useRef();
  const checkBoxB = useRef();
  const checkBoxC = useRef();
  const checkBoxD = useRef();
  const checkBoxE = useRef();

  const [newSingleSummary, setNewSingleSummary] = useState(false);
  const [beforeReleaseSummary, setBeforeReleaseSummary] = useState(false);
  const [musicVideoOutSummary, setMusicVideoOutSummary] = useState(false);
  const [youtubeAdsSummary, setYoutubeAdsSummary] = useState(false);
  const [spotifyAdsSummary, setspotifyAdsSummary] = useState(false);

  const [newSinglePrice, setNewSinglePrice] = useState(false);
  const [beforeReleasePrice, setBeforeReleasePrice] = useState(false);
  const [musicVideoOutPrice, setMusicVideoOutPrice] = useState(false);
  const [youtubeAdsPrice, setYoutubeAdsPrice] = useState(false);
  const [spotifyAdsPrice, setspotifyAdsPrice] = useState(false);

  // Terms and conditions variables
  const [TC, newTC] = useState(false);

  //   handle change of full name
  const [fullName, setFullName] = useState(null);

  //   handle change of artist name
  const [artisteName, setArtisteName] = useState(null);

  //   handle change of release name
  const [releaseName, setReleaseName] = useState(null);

  //   handle change of emaill
  const [email, setEmail] = useState(null);

  //   handle change of facebook url
  const [fbURl, setFbUrl] = useState(null);

  //   handle change of instagram url
  const [igURl, setIgUrl] = useState(null);

  //   handle submit error of full name
  const [fullNameErr, setFullNameErr] = useState(false);

  //   handle submit error of Artiste name
  const [artisteNameErr, setArtisteNameErr] = useState(false);

  //   handle submit error of release name
  const [releaseNameErr, setReleaseNameErr] = useState(false);

  //   handle submit error of email address
  const [emailErr, setEmailErr] = useState(false);

  //   handle submit error of ig url
  const [igUrlErr, setIgUrlErr] = useState(false);

  //   handle submit error of facebook url
  const [fbUrlErr, setFbUrlErr] = useState(false);

  // new single out now cart summary JSX
  const newSingleJSX = (
    <div className={classes.newSingleJSXCon}>
      {" "}
      <h4 className={classes.newSingleJSXHeader}>New Single Out Now </h4>{" "}
      <h3>
        $ <span>700</span>{" "}
      </h3>{" "}
    </div>
  );

  // Before Release Date + Pre Save JSX
  const beforeReleaseJSX = (
    <div className={classes.newSingleJSXCon}>
      {" "}
      <h4 className={classes.newSingleJSXHeader}>
        Before Release Date + Pre Save{" "}
      </h4>{" "}
      <h3>
        $ <span>850</span>{" "}
      </h3>{" "}
    </div>
  );

  // Music Video + Out Now + Pre Save JSX
  const musicVideoOutJSX = (
    <div className={classes.newSingleJSXCon}>
      {" "}
      <h4 className={classes.newSingleJSXHeader}>
        Music Video + Out Now + Pre Save
      </h4>{" "}
      <h3>
        $ <span>1,000</span>{" "}
      </h3>{" "}
    </div>
  );

  // YouTube Ads JSX
  const youtueAdsJSX = (
    <div className={classes.newSingleJSXCon}>
      {" "}
      <h4 className={classes.newSingleJSXHeader}>YouTube Ads</h4>{" "}
      <h3>
        $ <span>700</span>{" "}
      </h3>{" "}
    </div>
  );

  // Spotify Ads JSX
  const spotifyAdsJSX = (
    <div className={classes.newSingleJSXCon}>
      {" "}
      <h4 className={classes.newSingleJSXHeader}>Spotify Ads </h4>{" "}
      <h3>
        $ <span>1,000</span>{" "}
      </h3>{" "}
    </div>
  );

  const totalNewSinglePrice = newSinglePrice && 700;
  const totalBeforeReleasePrice = beforeReleasePrice && 850;
  const totalMusicVideoOutPrice = musicVideoOutPrice && 1000;
  const totalYoutubeAdsPrice = youtubeAdsPrice && 700;
  const totalspotifyAdsPrice = spotifyAdsPrice && 1000;

  //if check boxes are checked
  function handleChange() {
    if (checkBoxA.current.checked) {
      console.log("AAAAAAA");
      setNewSingleSummary(true);
      setNewSinglePrice(true);
    } else {
      console.log("false AAAAAAA");
      setNewSingleSummary(false);
      setNewSinglePrice(false);
    }

    if (checkBoxB.current.checked) {
      console.log("BBBBBBBBBB");
      setBeforeReleaseSummary(true);
      setBeforeReleasePrice(true);
    } else {
      console.log("false BBBBBB");
      setBeforeReleaseSummary(false);
      setBeforeReleasePrice(false);
    }

    if (checkBoxC.current.checked) {
      console.log("CCCCCCCCC");
      setMusicVideoOutSummary(true);
      setMusicVideoOutPrice(true);
    } else {
      console.log("false CCCCCCCC");
      setMusicVideoOutSummary(false);
      setMusicVideoOutPrice(false);
    }

    if (checkBoxD.current.checked) {
      console.log("DDDDDDDD");
      setYoutubeAdsSummary(true);
      setYoutubeAdsPrice(true);
    } else {
      console.log("false DDDDDD");
      setYoutubeAdsSummary(false);
      setYoutubeAdsPrice(false);
    }

    if (checkBoxE.current.checked) {
      console.log("EEEEEEEE");
      setspotifyAdsSummary(true);
      setspotifyAdsPrice(true);
    } else {
      console.log("false EEEEEE");
      setspotifyAdsSummary(false);
      setspotifyAdsPrice(false);
    }
  }

  function iAgreeChecked(e) {
    console.log(e.target.checked);
    newTC(e.target.checked);
  }

  function handleSubmit() {
    fullName == null || "" ? setFullNameErr(true) : setFullNameErr(false);

    artisteName == null || ""
      ? setArtisteNameErr(true)
      : setArtisteNameErr(false);

    releaseName == null || ""
      ? setReleaseNameErr(true)
      : setReleaseNameErr(false);

    email == null || "" ? setEmailErr(true) : setEmailErr(false);

    fbURl == null || "" ? setFbUrlErr(true) : setFbUrlErr(false);

    igURl == null || "" ? setIgUrlErr(true) : setIgUrlErr(false);
  }

  return (
    <div className={classes.packagesFormCon}>
      <h3 className={classes.formHeader}>
        Book Your Digital Marketing Package
      </h3>

      <h3 className={classes.personalDetails}>Personal Details</h3>
      <p className={classes.ensure}>
        Kindly ensure that all details you input are correct
      </p>

      <form>
        <label className={classes.label}>
          Your Full Name{" "}
          <span className={classes.italics}>
            (Surname Other name First name)
          </span>
        </label>
        <input
          className={
            fullNameErr == true || fullName == ""
              ? classes.inputError
              : classes.input
          }
          type={"text"}
          placeholder="Enter your full name "
          onChange={(e) => setFullName(e.target.value)}
        />

        {/* Artiste & release Name */}
        <div className={classes.artisteReleaseName}>
          <div className={classes.artisteName}>
            <label className={classes.label}>Artist’s Name</label>
            <input
              className={
                artisteNameErr == true || artisteName == ""
                  ? classes.smallInputError
                  : classes.smallInput
              }
              type={"text"}
              placeholder="Enter your artist's stage name"
              onChange={(e) => setArtisteName(e.target.value)}
            />
          </div>

          <div className={classes.RartisteName}>
            <label className={classes.label}>Release Name</label>
            <input
              className={
                releaseNameErr == true || releaseName == ""
                  ? classes.smallInputError
                  : classes.smallInput
              }
              type={"text"}
              placeholder="Enter a name you wish to appear "
              onChange={(e) => setReleaseName(e.target.value)}
            />
          </div>
        </div>

        {/* E-mail Address & release Date */}
        <div className={classes.artisteReleaseName}>
          <div className={classes.artisteName}>
            <label className={classes.label}>E-mail Address</label>
            <input
              className={
                emailErr == true || email == ""
                  ? classes.smallInputError
                  : classes.smallInput
              }
              type={"email"}
              placeholder="Enter your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={classes.RartisteName}>
            <label className={classes.label}>Release Date</label>
            <DatePickerForm />
          </div>
        </div>

        {/* Faceebook url */}
        <label className={classes.label}>Facebook Page URL</label>
        <input
          className={
            fbUrlErr == true || fbURl == "" ? classes.inputError : classes.input
          }
          type={"url"}
          placeholder=" e.g http://www.facebook.com/soundmac "
          onChange={(e) => setFbUrl(e.target.value)}
        />

        {/* Instagram Handle */}
        <label className={classes.label}>Instagram Handle</label>

        <input
          type={"text"}
          placeholder="e.g Sound_Mac"
          className={
            igUrlErr == true || igURl == "" ? classes.inputError : classes.input
          }
          onChange={(e) => setIgUrl(e.target.value)}
        />

        {/* Package Details Section */}

        <h3 className={classes.personalDetails}>Package Details</h3>
        <a href="#checkOur" className={classes.ensure}>
          Click me to learn more about packages
        </a>

        {/* Select a package */}
        <label className={classes.label}>Select A Package</label>

        <div className={classes.inputButDiv}>
          <div className={classes.checkBoxDatalistCon}>
            <input
              onChange={handleChange}
              ref={checkBoxA}
              type={"checkbox"}
              id="New-Single-Out-Now"
              value={"700"}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>New Single Out Now</label>{" "}
            <br />
            <input
              onChange={handleChange}
              ref={checkBoxB}
              type={"checkbox"}
              id="Before-Release-Date-Pre Save"
              value={850}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>
              Before Release Date + Pre Save
            </label>{" "}
            <br />
            <input
              onChange={handleChange}
              ref={checkBoxC}
              type={"checkbox"}
              id="Music-Video-Out-Now-Pre Save"
              value={1000}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>
              Music Video + Out Now + Pre Save
            </label>{" "}
            <br />
            <input
              onChange={handleChange}
              ref={checkBoxD}
              type={"checkbox"}
              id="YouTube-Ads"
              value={700}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>YouTube Ads</label> <br />
            <input
              onChange={handleChange}
              ref={checkBoxE}
              type={"checkbox"}
              id="Spotify Ads"
              value={1000}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>Spotify Ads</label> <br />
          </div>
        </div>

        {/* Cart Summary */}

        <h3 className={classes.cartSummaryHeader}>Cart Summary</h3>

        {newSingleSummary && newSingleJSX}
        {beforeReleaseSummary && beforeReleaseJSX}
        {musicVideoOutSummary && musicVideoOutJSX}
        {youtubeAdsSummary && youtueAdsJSX}
        {spotifyAdsSummary && spotifyAdsJSX}

        <diV className={classes.checkOutBtnCon}>
          <span
            className={
              fullName &&
              artisteName &&
              releaseName &&
              email &&
              fbURl &&
              igURl &&
              TC == true
                ? classes.checkOutBtn
                : classes.checkOutBtnGrey
            }
            onClick={handleSubmit}
          >
            CHECKOUT (
            <NumberFormat
              style={{ color: "white" }}
              value={
                totalNewSinglePrice +
                totalBeforeReleasePrice +
                totalMusicVideoOutPrice +
                totalYoutubeAdsPrice +
                totalspotifyAdsPrice
              }
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            )
          </span>
        </diV>

        <diV className={classes.iAgreeCon}>
          <input
            type={"checkbox"}
            onChange={iAgreeChecked}
            id="i-agree"
            value={"i-agree"}
          />{" "}
          <label className={classes.checkBoxLabelIAgree}>
            I agree to the <a href="#">Terms and Conditions</a>{" "}
          </label>
        </diV>
      </form>
    </div>
  );
}
export default PackagesForm;
