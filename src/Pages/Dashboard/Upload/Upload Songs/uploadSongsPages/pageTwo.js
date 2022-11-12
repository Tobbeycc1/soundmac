import { useContext } from "react";
import classes from "../../../../../CSS files/uploadSongs.module.css";
import UploadSongContext from "../../../../../contexts/upload Song  Fns/uploadSongContext";
import {
  FcBusinessman,
  FcBusinesswoman,
  FcMusic,
  FcConferenceCall,
} from "react-icons/fc";

function PageTwo(props) {
  const { onChangeInfo, allInfo, accountType } = useContext(UploadSongContext);
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
            name={"main_artiste"}
            onChange={onChangeInfo}
            value={allInfo.main_artiste}
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
            name={"song_title"}
            onChange={onChangeInfo}
            value={allInfo.song_title}
          />
        </div>
      </div>

      {accountType !== "Independent_artist" && accountType !== "Free_account" && (
        <div className={classes.form_con}>
          <div className={classes.purple_block}>
            <FcConferenceCall className={classes.people_con} />
          </div>
          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"Label Name"}
            name={"label_name"}
            onChange={onChangeInfo}
            value={allInfo.label_name}
          />
        </div>
      )}

      <div className={classes.form_con}>
        <div className={classes.purple_block}>
          <FcBusinesswoman className={classes.people_con} />
        </div>
        <input
          type={"text"}
          className={classes.input_full}
          placeholder={"Other artiste"}
          name={"other_artiste"}
          onChange={onChangeInfo}
          value={allInfo.other_artiste}
        />
      </div>

      <form className={classes.checkbox_font}>
        <p className={classes.explicit}>Explicit?</p>
        <input
          type={"radio"}
          name="explicit"
          value={"yes"}
          checked={allInfo.explicit === "yes"}
          onChange={onChangeInfo}
        />{" "}
        <label style={{ marginRight: "40px" }}>Yes</label>
        <input
          type={"radio"}
          name="explicit"
          value={"no"}
          checked={allInfo.explicit === "no"}
          onChange={onChangeInfo}
        />{" "}
        <label>No</label>
      </form>
    </div>
  );
}
export default PageTwo;
