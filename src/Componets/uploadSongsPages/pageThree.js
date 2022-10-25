import { useContext, useState } from "react";
import classes from "../../CSS files/uploadSongs.module.css";
import { BsPencilFill } from "react-icons/bs";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import DisplayedCredits from "../Upload utilities/displayedCredits";

function PageThree(props) {
  const { onChangeInfo, allInfo, accountType } = useContext(UploadSongContext);

  const [performer, setPerformer] = useState(false);
  const [producer, setProducer] = useState(false);
  const [remixer, setRemixer] = useState(false);
  const [composer, setComposer] = useState(false);
  const [songwriter, setSongwriter] = useState(false);
  const [publisher, setPublisher] = useState(false);
  const [featuring, setFeaturing] = useState(false);
  const [conductor, setConductor] = useState(false);
  const [arranger, setArranger] = useState(false);
  const [orchestra, setOrchestra] = useState(false);
  const [actor, setActor] = useState(false);

  return (
    <div className={classes.page3_con}>
      <div className={classes.credits_fill_space_con}>
        <p
          className={classes.featuring}
          style={{ marginBottom: "30px", color: "var(--red)" }}
        >
          Credits
        </p>{" "}
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Performer(s)</p>{" "}
            <span
              onClick={() => setPerformer(!performer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {performer && (
            <input
              type={"text"}
              name={"performed_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.performed_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Producer(s)</p>{" "}
            <span
              onClick={() => setProducer(!producer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {producer && (
            <input
              type={"text"}
              name={"produced_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.produced_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Remixer(s)</p>{" "}
            <span
              onClick={() => setRemixer(!remixer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {remixer && (
            <input
              type={"text"}
              name={"remixed_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.remixed_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Composer(s)</p>{" "}
            <span
              onClick={() => setComposer(!composer)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {composer && (
            <input
              type={"text"}
              name={"composed_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.composed_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Lyricist(s)</p>{" "}
            <span
              onClick={() => setSongwriter(!songwriter)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {songwriter && (
            <input
              type={"text"}
              name={"lyrics_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.lyrics_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Publisher(s)</p>{" "}
            <span
              onClick={() => setPublisher(!publisher)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {publisher && (
            <input
              type={"text"}
              name={"published_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.published_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Featuring</p>{" "}
            <span
              onClick={() => setFeaturing(!featuring)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {featuring && (
            <input
              type={"text"}
              name={"featuring"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.featuring}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Conductor(s)</p>{" "}
            <span
              onClick={() => setConductor(!conductor)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {conductor && (
            <input
              type={"text"}
              name={"conducted_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.conducted_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Aranger(s)</p>{" "}
            <span
              onClick={() => setArranger(!arranger)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {arranger && (
            <input
              type={"text"}
              name={"arranged_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.arranged_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Orchestra(s)</p>{" "}
            <span
              onClick={() => setOrchestra(!orchestra)}
              className={classes.pencil}
            >
              <BsPencilFill />
            </span>
          </div>
          {orchestra && (
            <input
              type={"text"}
              name={"orchestrated_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.orchestrated_by}
            />
          )}
        </div>
        <div className={classes.featuring_con}>
          <div className={classes.featuring_sub_con}>
            <p className={classes.featuring}>Actor(s)</p>{" "}
            <span onClick={() => setActor(!actor)} className={classes.pencil}>
              <BsPencilFill />
            </span>
          </div>
          {actor && (
            <input
              type={"text"}
              name={"acted_by"}
              className={classes.input_featuring}
              placeholder={"E.g Isaac Chukwuma, Isong Ahmad"}
              onChange={onChangeInfo}
              value={allInfo.acted_by}
            />
          )}
        </div>
      </div>
      <DisplayedCredits />
    </div>
  );
}
export default PageThree;
