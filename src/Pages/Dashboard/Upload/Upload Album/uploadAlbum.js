import classes from "../../../../CSS files/uploadSongs.module.css";
import UploadArtBtn from "./uploadAlbumPages/uploadArtBtn";
import PageTwoUploadAlbum from "./uploadAlbumPages/page2UploadAlbum";
import { useContext } from "react";
import UploadAlbumContext from "../../../../contexts/upload album fns/uploadAlbumContext";
import DashboardBackBtn from "../../dashboard utilities/dashboardBackButton";

function UploadAlbum() {
  const { setN, n, albumInfo, setAlbumInfo } = useContext(UploadAlbumContext);

  return (
    <div className={classes.backBtn_upload_con}>
      <DashboardBackBtn title="Upload Album" />
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
