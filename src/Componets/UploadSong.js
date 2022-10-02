import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function UploadSongs(props) {
  // back button
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };
  return (
    <div>
      <span onClick={backBtn}>
        <IoReturnDownBack />
      </span>{" "}
      <h2>Upload Songs</h2>
    </div>
  );
}
export default UploadSongs;
