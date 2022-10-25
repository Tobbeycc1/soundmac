import { useContext, useState } from "react";
import classes from "../../CSS files/uploadSongs.module.css";
import { BsPencilFill } from "react-icons/bs";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import { FcCopyright, FcCalendar } from "react-icons/fc";

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
            name={"copyright_holder"}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <div className={classes.purple_block}>
            <FcCalendar className={classes.people_con} />
          </div>
          <div className={classes.input_copyright_date}>
            <p className={classes.copyright_year_text}>Copyright Year</p>
            {/* <YearPicker name={"copyright_year"} onChange={onChangeCopyright} /> */}
          </div>
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
          />
        </div>

        <div className={classes.form_con_small_2}>
          <input
            type={"text"}
            className={classes.input_full}
            style={{ margin: "0", height: "50px" }}
            placeholder={"ISRC"}
            name={"ISRC"}
          />
        </div>
      </div>
    </div>
  );
}
export default PageFive;
