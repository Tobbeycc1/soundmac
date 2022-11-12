import { useState } from "react";
import classes from "../../../CSS files/packagesForm.module.css";
import NumberFormat from "react-number-format";
import "react-datepicker/dist/react-datepicker.css";
import "../../Promotion Page/Promotion utilities/DatePicker";

function PackagesForm(props) {
  //   handle change of date picker name
  const [startDate, setStartDate] = useState(new Date());

  // user details
  const [userDetails, setUserDetails] = useState({
    full_name: "",
    artist_name: "",
    release_name: "",
    email: "",
    release_date: "",
    facebook_url: "",
    instagram_url: "",
  });

  // package details
  const [checkbox, setCheckbox] = useState({
    new_single_out: "",
    before_release_date: "",
    music_video_and_pre_save: "",
    youtube_ads: "",
    spotify_ads: "",
  });

  const {
    full_name,
    artist_name,
    release_name,
    email,
    release_date,
    facebook_url,
    instagram_url,
  } = userDetails;

  const {
    new_single_out,
    before_release_date,
    music_video_and_pre_save,
    youtube_ads,
    spotify_ads,
  } = checkbox;

  //  check out sum
  const sum =
    Number(new_single_out) +
    Number(before_release_date) +
    Number(music_video_and_pre_save) +
    Number(youtube_ads) +
    Number(spotify_ads);

  // handle input change
  const onChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  // handle click button
  const onClick = (e) => {
    e.target.checked
      ? setCheckbox(() => ({ ...checkbox, [e.target.id]: e.target.value }))
      : setCheckbox(() => ({ ...checkbox, [e.target.id]: "" }));
  };

  console.log(sum);

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
          className={classes.input}
          type={"text"}
          placeholder="Enter your full name"
          name="full_name"
          onChange={onChange}
        />

        {/* Artiste & release Name */}
        <div className={classes.artisteReleaseName}>
          <div className={classes.artisteName}>
            <label className={classes.label}>Artist’s Name</label>
            <input
              className={classes.smallInput}
              type={"text"}
              placeholder="Enter your artist's stage name"
              name="artist_name"
              onChange={onChange}
            />
          </div>

          <div className={classes.RartisteName}>
            <label className={classes.label}>Release Name</label>
            <input
              className={classes.smallInput}
              type={"text"}
              placeholder="Enter a name you wish to appear "
              name="release_name"
              onChange={onChange}
            />
          </div>
        </div>

        {/* E-mail Address & release Date */}
        <div className={classes.artisteReleaseName}>
          <div className={classes.artisteName}>
            <label className={classes.label}>E-mail Address</label>
            <input
              className={classes.smallInput}
              type={"email"}
              placeholder="Enter your e-mail address"
              name="email"
              onChange={onChange}
            />
          </div>

          <div className={classes.RartisteName}>
            <label className={classes.label}>Release Date</label>
            <div className={classes.smallInput}>
              <input
                className={classes.input}
                type={"date"}
                placeholder=" release date"
                name="release_date"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        {/* Facebook url */}
        <label className={classes.label}>Facebook Page URL</label>
        <input
          className={classes.input}
          type={"url"}
          placeholder=" e.g http://www.facebook.com/soundmac "
          name="facebook_url"
          onChange={onChange}
        />

        {/* Instagram Handle */}
        <label className={classes.label}>Instagram Handle</label>

        <input
          type={"text"}
          placeholder="e.g Sound_Mac"
          className={classes.input}
          name="instagram_url"
          onChange={onChange}
        />

        {/* Package Details Section */}

        <h3 className={classes.personalDetails}>Package Details</h3>
        <a href="#checkOur" className={classes.ensure}>
          Click me to learn more about packages
        </a>

        {/* Select a package */}
        <label className={classes.label}>Select A Package</label>

        <div className={classes.inputDiv}>
          <div className={classes.checkBoxDatalistCon}>
            <input
              type={"checkbox"}
              id="new_single_out"
              name="new single out"
              value={700}
              onChange={onClick}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>New Single Out Now</label>{" "}
            <br />
            <input
              type={"checkbox"}
              name="before release date"
              id="before_release_date"
              value={850}
              className={classes.checkBoxPF}
              onChange={onClick}
            />{" "}
            <label className={classes.checkBoxLabel}>
              Before Release Date + Pre Save
            </label>{" "}
            <br />
            <input
              type={"checkbox"}
              id="music_video_and_pre_save"
              name="music video + pre save"
              value={1000}
              onChange={onClick}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>
              Music Video + Out Now + Pre Save
            </label>{" "}
            <br />
            <input
              type={"checkbox"}
              id="youtube_ads"
              name="youtube ads"
              onChange={onClick}
              value={700}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>YouTube Ads</label> <br />
            <input
              type={"checkbox"}
              id="spotify_ads"
              name="spotify ads"
              onChange={onClick}
              value={1000}
              className={classes.checkBoxPF}
            />{" "}
            <label className={classes.checkBoxLabel}>Spotify Ads</label> <br />
          </div>
        </div>

        {/* Cart Summary */}

        <h3 className={classes.cartSummaryHeader}>Cart Summary</h3>
        <div>
          {new_single_out !== "" && (
            <PackageDescripComponent
              title={"New Single Out"}
              value={new_single_out}
            />
          )}

          {before_release_date !== "" && (
            <PackageDescripComponent
              title={"Before Release Date"}
              value={before_release_date}
            />
          )}

          {music_video_and_pre_save !== "" && (
            <PackageDescripComponent
              title={"Music video + pre-save"}
              value={music_video_and_pre_save}
            />
          )}

          {youtube_ads !== "" && (
            <PackageDescripComponent
              title={"YouTube Ads"}
              value={youtube_ads}
            />
          )}

          {spotify_ads !== "" && (
            <PackageDescripComponent
              title={"Spotify Ads"}
              value={spotify_ads}
            />
          )}

          {/*  */}
        </div>
        <div className={classes.checkOutBtnCon}>
          <span className={classes.checkOutBtn}>
            CHECKOUT (
            <NumberFormat
              style={{ color: "white" }}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              value={sum}
            />
            )
          </span>
        </div>

        <div className={classes.iAgreeCon}>
          <input type={"checkbox"} id="i-agree" value={"i-agree"} />{" "}
          <label className={classes.checkBoxLabelIAgree}>
            I agree to the <a href="#">Terms and Conditions</a>{" "}
          </label>
        </div>
      </form>
    </div>
  );
}

function PackageDescripComponent(props) {
  return (
    <div className={classes.newSingleJSXCon}>
      <h2 className={classes.newSingleJSXHeader}>{props.title}</h2>
      <NumberFormat
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        value={props.value}
      />
    </div>
  );
}
export default PackagesForm;
