import classes from "../CSS files/MusicDribution.module.css";
import musicAppLogos from "../images/music logos.png";

function MusicDistribution(props) {
  return (
    <div>
      <h1
        className={classes.earn}
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Earn While Global <br /> Listeners Enjoy Your Music
      </h1>

      <img
        className={classes.musicAppLogos}
        src={musicAppLogos}
        alt="music app logo"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
    </div>
  );
}
export default MusicDistribution;
