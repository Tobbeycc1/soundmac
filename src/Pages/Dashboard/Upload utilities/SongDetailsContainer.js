import classes from "../../../CSS files/Dashboard.module.css";

function SongDetailsCon(props) {
  return (
    <div className={classes.song_details_con}>
      <h1 className={classes.song_details_song_name}>{props.songName}</h1>
      <p className={classes.song_details_record_label}>
        Record Label: {props.recordLabel}
      </p>
      <p className={classes.song_details_record_label}>
        Release Date: {props.releaseDate}
      </p>
      <div className={classes.song_details_hr}></div>
    </div>
  );
}
export default SongDetailsCon;
