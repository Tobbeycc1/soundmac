// import { YearPicker } from "react-dropdown-date";
import langList from "lang-list";
import MusicGenres from "musicgenres-json";
import { useContext } from "react";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import classes from "../../CSS files/uploadSongs.module.css";
import { languagesArr } from "../Upload utilities/languageList";

const genres = new MusicGenres();
const genreList = genres.get();
genreList.unshift("click to select");

function PageFour(props) {
  const { onChangeInfo, allInfo } = useContext(UploadSongContext);
  return (
    <div>
      <h2 className={classes.featuring} style={{ marginBottom: "10px" }}>
        Genre
      </h2>
      <div className={classes.featuring_con}>
        <select
          className={classes.genre}
          name={"genre"}
          onChange={onChangeInfo}
          value={allInfo.genre}
        >
          {genreList.map((item, index) => (
            <>
              <option value={item} name={"genre"} key={index}>
                {item}
              </option>{" "}
            </>
          ))}
        </select>
      </div>

      {/* languages */}
      <h2 className={classes.featuring} style={{ marginBottom: "10px" }}>
        Language
      </h2>
      <div className={classes.featuring_con}>
        <select
          className={classes.genre}
          name={"language"}
          onChange={onChangeInfo}
          value={allInfo.language}
        >
          {languagesArr.map((item, index) => (
            <>
              <option value={item} name={"language"}>
                {item}
              </option>{" "}
            </>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PageFour;
