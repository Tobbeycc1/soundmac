import { useContext, useState } from "react";
import classes from "../../../CSS files/uploadSongs.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import UploadSongContext from "../../../contexts/upload Song  Fns/uploadSongContext";

function DisplayedCredits() {
  const { onChangeInfo, allInfo, accountType } = useContext(UploadSongContext);
  return (
    <div className={classes.credits_filled_display}>
      {/* performer */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.performed_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.performed_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Performed by:
          </h2>
        </div>
        {allInfo.performed_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.performed_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* producer */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.produced_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.produced_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Produced by:
          </h2>
        </div>

        {allInfo.produced_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.produced_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* remixer */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.remixed_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.remixed_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Remixed by:
          </h2>
        </div>

        {allInfo.remixed_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.remixed_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* composer */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.composed_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.composed_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Composed by:
          </h2>
        </div>

        {allInfo.composed_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.composed_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* songwriter */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.lyrics_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.lyrics_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Written by:
          </h2>
        </div>
        {allInfo.lyrics_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.lyrics_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* publisher */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.published_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.published_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Published by:
          </h2>
        </div>
        {allInfo.published_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.published_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* feat */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.featuring !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.featuring !== "" ? classes.feat : classes.feat_grey
            }
          >
            Feat
          </h2>
        </div>
        {allInfo.featuring !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.featuring.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* conductor */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.conducted_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.conducted_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Conducted by:
          </h2>
        </div>
        {allInfo.conducted_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.conducted_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* arranger */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.arranged_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.arranged_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Arranged by:
          </h2>
        </div>
        {allInfo.arranged_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.arranged_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* orchestra */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.orchestrated_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.orchestrated_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Orchestrated by:
          </h2>
        </div>
        {allInfo.orchestrated_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.orchestrated_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>

      {/* orchestra */}
      <>
        <div className={classes.feat_con}>
          <AiFillCheckCircle
            className={
              allInfo.acted_by !== "" ? classes.feat : classes.feat_grey
            }
          />{" "}
          <h2
            className={
              allInfo.acted_by !== "" ? classes.feat : classes.feat_grey
            }
          >
            Acted by:
          </h2>
        </div>
        {allInfo.acted_by !== "" && (
          <h2
            className={classes.credits_filled}
          >{` ◉ ${allInfo.acted_by.replace(/,/g, "\n ◉ ")}`}</h2>
        )}
      </>
    </div>
  );
}
export default DisplayedCredits;
