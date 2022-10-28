import { useState } from "react";
import UploadSongContext from "./uploadSongContext";

const freeAccountReleaseDate = new Date();
freeAccountReleaseDate.setDate(freeAccountReleaseDate.getDate() + 10);
const accountType = "Independent_artist";

console.log(freeAccountReleaseDate);
const UploadSongState = ({ children }) => {
  const [allInfo, setAllInfo] = useState({
    image: [],
    song: [],
    main_artiste: "",
    label_name: "",
    song_title: "",
    other_artiste: "",
    explicit: "",
    performed_by: "",
    produced_by: "",
    remixed_by: "",
    composed_by: "",
    lyrics_by: "",
    published_by: "",
    featuring: "",
    conducted_by: "",
    arranged_by: "",
    orchestrated_by: "",
    acted_by: "",
    language: "",
    genre: "",
    copyright_holder: "",
    copyright_year: "",
    assign_upc: true,
    assign_isrc: true,
    UPC: "",
    ISRC: "",
    release_date: freeAccountReleaseDate,
  });

  const onChangeInfo = (e) => {
    setAllInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <UploadSongContext.Provider
      value={{ onChangeInfo, allInfo, setAllInfo, accountType }}
    >
      {children}
    </UploadSongContext.Provider>
  );
};

export default UploadSongState;
