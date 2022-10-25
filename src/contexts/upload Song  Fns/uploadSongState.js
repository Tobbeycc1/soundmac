import { useState } from "react";
import UploadSongContext from "./uploadSongContext";

const accountType = "Independent_artist";

const UploadSongState = ({ children }) => {
  const [allInfo, setAllInfo] = useState({
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
  });

  const onChangeInfo = (e) => {
    console.log("hg");
    setAllInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <UploadSongContext.Provider value={{ onChangeInfo, allInfo, accountType }}>
      {children}
    </UploadSongContext.Provider>
  );
};

export default UploadSongState;
