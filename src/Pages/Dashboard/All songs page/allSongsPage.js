import { useContext } from "react";
import UploadSongContext from "../../../contexts/upload Song  Fns/uploadSongContext";
import DashboardBackBtn from "../dashboard utilities/dashboardBackButton";
import classes from "../All songs page/allSongsPage.module.css";

function AllSongsPages(props) {
  const { gottenSongs } = useContext(UploadSongContext);
  return (
    <div className={classes.all_songs_page_container}>
      <DashboardBackBtn title="All Songs" />

      <div className={classes.all_songs_page_sub_container}>
        {gottenSongs.length > 0 &&
          gottenSongs.map((item, index) => (
            <div className={classes.song_details_container} key={index}>
              <img
                src={item.cover_art_url}
                alt={item.release_title + "Cover Art"}
                className={classes.cover_art}
              />
              <div className={classes.artist_and_song_con}>
                <h1 className={classes.artist_name}>{item.artist_name}</h1>
                <p className={classes.release_title}>{item.release_title} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default AllSongsPages;
