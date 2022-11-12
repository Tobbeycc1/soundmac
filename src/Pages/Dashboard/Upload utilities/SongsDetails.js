import ModalBackground from "../../Sign In and Register/ModalBackground";
import SongDetailsCon from "./SongDetailsContainer";

function SongDetails(props) {
  return (
    <div>
      <ModalBackground noDeets={props.closeSongModal} />
      <SongDetailsCon
        songName={"Frames (Who's Gonna Know)"}
        recordLabel={"Starboy/RCA Records"}
        releaseDate={"11/11/2022"}
      />
    </div>
  );
}
export default SongDetails;
