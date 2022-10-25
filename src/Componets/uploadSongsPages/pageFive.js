import { useContext, useState } from "react";
import classes from "../../CSS files/uploadSongs.module.css";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import { FcCopyright, FcCalendar } from "react-icons/fc";
import { YearPicker } from "react-dropdown-date";

function PageFive(props) {
  const { onChangeInfo, allInfo } = useContext(UploadSongContext);

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
            name={"copyright_holder"}
            onChange={onChangeInfo}
            value={allInfo.copyright_holder}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <div className={classes.purple_block}>
            <FcCalendar className={classes.people_con} />
          </div>
          <input
            type={"number"}
            className={classes.input_full}
            placeholder={"Copyright holder"}
            name={"copyright_year"}
            onChange={onChangeInfo}
            value={allInfo.copyright_year}
          />
        </div>
      </div>

      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_small}>
          <input
            type={"text"}
            className={classes.input_full}
            style={{ margin: "0", height: "50px" }}
            placeholder={"USPC"}
            name={"USPC"}
            onChange={onChangeInfo}
            value={allInfo.USPC}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <input
            type={"text"}
            className={classes.input_full}
            style={{ margin: "0", height: "50px" }}
            placeholder={"ISRC"}
            name={"ISRC"}
            onChange={onChangeInfo}
            value={allInfo.ISRC}
          />
        </div>
      </div>
    </div>
  );
}
export default PageFive;
