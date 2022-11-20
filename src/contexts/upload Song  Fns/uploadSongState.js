import { useEffect, useState } from "react";
import UploadSongContext from "./uploadSongContext";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const freeAccountReleaseDate = new Date();
freeAccountReleaseDate.setDate(freeAccountReleaseDate.getDate() + 10);
const accountType = "Independent_artist";

// console.log(freeAccountReleaseDate);

const URL = process.env.REACT_APP_SERVER_URL;

// main state for upload songd
const UploadSongState = ({ children }) => {
  const emptyAllInfo = {
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
  };
  const [allInfo, setAllInfo] = useState(emptyAllInfo);

  // when user changes input field
  const onChangeInfo = (e) => {
    setAllInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //  when user clicks the final submit button
  const onSubmitAllInfo = () => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("image", allInfo.image[0].file);
    formData.append("audio", allInfo.song);
    formData.append("artist_name", allInfo.main_artiste);
    formData.append("label_name", allInfo.label_name);
    formData.append("release_title", allInfo.song_title);
    // formData.append("other_artiste", allInfo.other_artiste);
    formData.append("explicit", allInfo.explicit);
    // formData.append("performed_by", allInfo.performed_by);
    // formData.append("produced_by", allInfo.produced_by);
    // formData.append("remixed_by", allInfo.remixed_by);
    // formData.append("composed_by", allInfo.composed_by);
    // formData.append("lyrics_by", allInfo.lyrics_by);
    // formData.append("featuring", allInfo.featuring);
    // formData.append("conducted_by", allInfo.conducted_by);
    // formData.append("orchestrated_by", allInfo.orchestrated_by);
    // formData.append("acted_by", allInfo.acted_by);
    formData.append("language", allInfo.language);
    formData.append("genre", allInfo.genre);
    formData.append("copyright_holder", allInfo.copyright_holder);
    formData.append("copyright_year", allInfo.copyright_year);
    // formData.append("assign_upc", allInfo.assign_upc);
    // formData.append("assign_isrc", allInfo.assign_isrc);
    formData.append("UPC", allInfo.UPC);
    formData.append("ISRC", allInfo.ISRC);
    formData.append("release_date", allInfo.release_date);

    // submit(formData)
    onPost(formData);
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // post api for uploading songs
  const onPost = async (value) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("auth-token"),
      },
    };
    try {
      const res = await axios.post(`${URL}/api/single`, value, config);
      const data = res.data;
      console.log(data);
      setLoading(false);
      swal("Good job!", "Your Song Has Been Uploaded!", "success").then(() => {
        navigate("/dashboard");
      });
      setAllInfo(emptyAllInfo);
    } catch (err) {
      console.log(err.response.data);
      setLoading(false);
    }
  };

  // get songs
  const [gottenSongs, setGottenSongs] = useState([]);

  // get songs function
  const getSongs = async () => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
      },
    };
    try {
      const res = await axios.get(`${URL}/api/single/tracks`, config);
      const data = res.data.songs;
      console.log(data);
      setGottenSongs(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    gottenSongs === "" && getSongs();
  }, []);

  return (
    <UploadSongContext.Provider
      value={{
        onChangeInfo,
        allInfo,
        setAllInfo,
        accountType,
        onSubmitAllInfo,
        loading,
        gottenSongs,
      }}
    >
      {children}
    </UploadSongContext.Provider>
  );
};

export default UploadSongState;
