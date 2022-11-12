import classes from "../../../CSS files/uploadSongs.module.css";
import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function DashboardBackBtn(props) {
  const navigate = useNavigate();
  return (
    <div className={classes.backBtn_upload_con}>
      <span onClick={() => navigate(-1)} className={classes.back_icon}>
        <IoReturnDownBack />
      </span>{" "}
      <h2 className={classes.text}>{props.title}</h2>
    </div>
  );
}
export default DashboardBackBtn;
