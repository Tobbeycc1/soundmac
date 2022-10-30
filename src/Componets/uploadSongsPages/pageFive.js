import { useContext, useState } from "react";
import classes from "../../CSS files/uploadSongs.module.css";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import { FcCopyright, FcCalendar } from "react-icons/fc";
import { YearPicker } from "react-dropdown-date";

function PageFive(props) {
  const { onChangeInfo, allInfo, setAllInfo } = useContext(UploadSongContext);

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
            placeholder={"Copyright year"}
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
            className={
              allInfo.assign_upc === true
                ? classes.input_full_disabled
                : classes.input_full
            }
            style={{ margin: "0", height: "50px" }}
            placeholder={"UPC"}
            name={"UPC"}
            onChange={onChangeInfo}
            value={allInfo.UPC}
            disabled={allInfo.assign_upc === true}
          />
        </div>

        <div className={classes.form_con_small_2}>
          <input
            type={"text"}
            className={
              allInfo.assign_isrc === true
                ? classes.input_full_disabled
                : classes.input_full
            }
            style={{ margin: "0", height: "50px" }}
            placeholder={"ISRC"}
            name={"ISRC"}
            onChange={onChangeInfo}
            value={allInfo.ISRC}
            disabled={allInfo.assign_isrc === true}
          />
        </div>
      </div>
      <div className={classes.form_con_check}>
        <div className={classes.assign_uspc_con}>
          <input
            type={"checkbox"}
            name="assign_upc"
            className={classes.assign_checkbox}
            onChange={(e) => {
              e.target.checked
                ? setAllInfo((prev) => ({ ...prev, [e.target.name]: true }))
                : setAllInfo((prev) => ({ ...prev, [e.target.name]: false }));

              e.target.checked && setAllInfo((prev) => ({ ...prev, UPC: "" }));
            }}
            checked={allInfo.assign_upc === true}
          />{" "}
          <label className={classes.assign_label_uspc}>
            {" "}
            Automatically assign UPC
          </label>
        </div>

        <div className={classes.assign_uspc_con}>
          <input
            type={"checkbox"}
            name="assign_isrc"
            className={classes.assign_checkbox}
            onChange={(e) => {
              e.target.checked
                ? setAllInfo((prev) => ({ ...prev, [e.target.name]: true }))
                : setAllInfo((prev) => ({ ...prev, [e.target.name]: false }));

              e.target.checked && setAllInfo((prev) => ({ ...prev, ISRC: "" }));
            }}
            checked={allInfo.assign_isrc === true}
          />{" "}
          <label className={classes.assign_label_uspc}>
            Automatically assign ISRC
          </label>
        </div>
      </div>
    </div>
  );
}
export default PageFive;
