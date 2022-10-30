import { useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import classes from "../CSS files/uploadSongs.module.css";
import UploadArtBtn from "./uploadAlbumPages/uploadArtBtn";
import PageTwoUploadAlbum from "./uploadAlbumPages/page2UploadAlbum";
import { useContext } from "react";
import UploadAlbumContext from "../contexts/upload album fns/uploadAlbumContext";

function UploadAlbum() {
  const { setN, n, albumInfo, setAlbumInfo } = useContext(UploadAlbumContext);

  const navigate = useNavigate();
  return (
    <div className={classes.backBtn_upload_con}>
      <span onClick={() => navigate(-1)} className={classes.back_icon}>
        <IoReturnDownBack />
      </span>{" "}
      <h2 className={classes.text}>Upload Album</h2>
      <div className={classes.upload_group_con}>
        <>
          <UploadArtBtn />{" "}
          <p
            onClick={() => {
              setN(n + 1);
            }}
          >
            add song
          </p>
          <PageTwoUploadAlbum />
        </>
      </div>
    </div>
  );
}
export default UploadAlbum;
