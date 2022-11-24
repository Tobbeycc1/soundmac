import classes from "../../CSS files/InputYourArtiste.module.css";
import { BsFileEarmarkPerson } from "react-icons/bs";

function InputYourArtiste() {
  return (
    <div className={classes.input_your_artiste_con}>
      <h1 className={classes.text}>Input Your Artiste</h1>
      <div className={classes.form_con_small_flex}>
        <div className={classes.form_con_small}>
          <div className={classes.purple_block}>
            <BsFileEarmarkPerson className={classes.people_con} />
          </div>

          <input
            type={"text"}
            className={classes.input_full}
            placeholder={"Artiste Name"}
          />
        </div>
        <div className={classes.add_artiste_container}>
          <p className={classes.add_artiste}>Add Artiste</p>
        </div>
      </div>
    </div>
  );
}
export default InputYourArtiste;
