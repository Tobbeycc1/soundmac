import classes from "../../CSS files/Dashboard.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { RiMusicLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Fragment } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import bannerOne from "../../images/dashboard banner one.png";
import bannerTwo from "../../images/dashboard banner two.png";
import bannerThree from "../../images/808ef896-eed6-4312-98c1-ab651beb.jpg";
import bannerFour from "../../images/dashboard banner four.png";
import AuthContext from "../../contexts/auth/authContext";
import SongDetails from "./Upload utilities/SongsDetails";
import UploadSongContext from "../../contexts/upload Song  Fns/uploadSongContext";
import AccountTypeContext from "../../contexts/account type/accountTypeContext";

const dummyData = [
  {
    id: 1,
    artisteName: "Tobbey",
    song: "good girl",
    src:
      "https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg",
    ft: "wizkid",
  },
  {
    id: 2,
    artisteName: "Tobbey",
    song: "Gbese",
    src:
      "https://oscarmini.com/wp-content/uploads/2014/08/michaeljackson_coverart.jpg",
    ft: "Asake, burna boy",
  },
  {
    id: 3,
    artisteName: "Tobbey",
    song: "Essence",
    src:
      "https://graphicriver.img.customer.envatousercontent.com/files/383062766/music-albumcover-templates-bundle78-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=17318da830a8e0cad5e038de293bced3",
    ft: "",
  },
];
const musicCoverArt = [bannerOne, bannerThree, bannerTwo, bannerFour];

function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  const { gottenSongs } = useContext(UploadSongContext);
  const {
    onSelectAccountType,
    accountTypeVal,
    proceed,
    loadingNameAvailability,
    availabilityMssg,
  } = useContext(AccountTypeContext);

  // upload song
  const navigate = useNavigate();

  const firstFive = gottenSongs.length > 0 && gottenSongs.slice(0, 5);

  // open song details on click of each song
  const [songModal, setSongModal] = useState(false);

  const openSongModal = () => {
    setSongModal(!songModal);
  };

  const [account_type_db, setAccount_type_db] = useState("");

  return (
    <Fragment>
      {user !== null && !loading ? (
        <div className={classes.dashboard_con}>
          {/* if account type is empty */}
          {account_type_db === "" && (
            <div className={classes.modal}>
              {/* error message */}

              <div className={classes.modal_sub_con}>
                <div className={classes.select_account_type_con}>
                  <p className={classes.account_type_header}>
                    SOUNDMAC ACCOUNT TYPE
                  </p>
                </div>
                <select
                  className={classes.account_type_con}
                  name={"account_type"}
                  onChange={onSelectAccountType}
                >
                  <option value="">none</option>
                  <option>Free Account</option>
                  <option>Independent Account</option>
                  <option>Mini Label Account</option>
                  <option>Label Account</option>
                </select>
                {accountTypeVal.account_type !== "" && (
                  <>
                    {(accountTypeVal.account_type === "Free Account" ||
                      accountTypeVal.account_type ===
                        "Independent Account") && (
                      <div className={classes.input_account_type}>
                        <input
                          className={classes.input_artiste_name_field}
                          type={"text"}
                          placeholder={"Artiste name"}
                          name={"artisteName"}
                          onChange={onSelectAccountType}
                        />
                        {loadingNameAvailability === true ? (
                          <SkeletonTheme
                            baseColor="#7a1400af"
                            highlightColor="#444"
                          >
                            <Skeleton
                              count={1}
                              className={classes.skeleton_con_b}
                            />
                          </SkeletonTheme>
                        ) : (
                          <p
                            className={
                              availabilityMssg !== "Name available"
                                ? classes.availability_mssg_red
                                : classes.availability_mssg
                            }
                          >
                            {availabilityMssg}
                          </p>
                        )}
                      </div>
                    )}

                    {(accountTypeVal.account_type === "Mini Label Account" ||
                      accountTypeVal.account_type === "Label Account") && (
                      <div className={classes.input_account_type}>
                        <input
                          className={classes.input_artiste_name_field}
                          type={"text"}
                          placeholder={"Label name"}
                          onChange={onSelectAccountType}
                        />
                      </div>
                    )}

                    <div className={classes.proceed_button}>
                      <button onClick={proceed} className={classes.proceed}>
                        Proceed
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <MediaQuery minWidth={1000}>
            <div className={classes.slide_con_con}>
              <div className={classes.slide_con}>
                <Splide
                  options={{
                    rewind: true,
                    type: "loop",
                    padding: "34%",
                    gap: "20px",
                    pagination: false,
                    autoScroll: {
                      pauseOnHover: false,
                      pauseOnFocus: false,
                      rewind: false,
                      speed: 1,
                    },
                    focus: "center",
                  }}
                  extensions={{ AutoScroll }}
                >
                  {musicCoverArt.map((item, index) => (
                    <SplideSlide>
                      <div className={classes.Cover_Image}>
                        <img src={item} className={classes.src} alt={index} />
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </MediaQuery>
          {/* for screen sizes lower tha 750px <<<<< */}
          <MediaQuery maxWidth={999}>
            <div className={classes.slide_con_con}>
              <div className={classes.slide_con}>
                <Splide
                  options={{
                    rewind: true,
                    type: "loop",
                    // gap: "20px",
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    autoplay: true,
                  }}
                >
                  {musicCoverArt.map((item, index) => (
                    <SplideSlide>
                      <div className={classes.Cover_Image}>
                        <img src={item} className={classes.src} alt={index} />
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </MediaQuery>
          {/* songs, album & Upload song & Upload album */}
          <div className={classes.section2_con}>
            <div className={classes.todays_stream_A}>
              <p className={classes.song_heading}>Songs</p>
              {firstFive.length > 0 &&
                firstFive.map((item) => (
                  <div
                    className={classes.small_songs_con}
                    onClick={openSongModal}
                  >
                    <img
                      src={item.cover_art_url}
                      alt={item.title}
                      className={classes.small_music_icon}
                    />

                    <div className={classes.items_con}>
                      <p className={classes.item_song}>{item.release_title}</p>
                      <p className={classes.item_artiste_name}>
                        {item.artist_name}
                      </p>
                    </div>
                  </div>
                ))}
              <br />
              <Link
                to={"/dashboard/allsongs"}
                className={classes.link_to_catalog}
              >
                more
              </Link>
            </div>
            {/* {gottenSongs.map((item, index) => (
              <div>{item.artist_name} </div>
            ))} */}
            <div className={classes.todays_stream}>
              <p className={classes.song_heading}>Albums</p>
              {firstFive.length > 0 &&
                firstFive.map((item, index) => (
                  <div className={classes.small_songs_con}>
                    <img
                      src={item.src}
                      alt={item.title}
                      className={classes.small_music_icon}
                    />

                    <div className={classes.items_con}>
                      <p className={classes.item_song}>{item.song}</p>
                      <p className={classes.item_artiste_name}>
                        {item.artisteName}{" "}
                        {item.ft !== "" ? `ft ${item.ft}` : ""}{" "}
                      </p>
                    </div>
                  </div>
                ))}
              <Link to={"/album_catalog"} className={classes.link_to_catalog}>
                more
              </Link>
            </div>
            {/* upload song */}
            <div className={classes.upload_con_con}>
              <div
                className={classes.upload_song_con}
                onClick={() => navigate("/upload/single")}
              >
                <div className={classes.cloud_icon_con}>
                  <RiMusicLine className={classes.cloud_icon} />
                </div>
                <p className={classes.upload_song}>Upload Songs</p>
              </div>

              {/* upload album */}
              <div
                className={classes.upload_song_con}
                onClick={() => navigate("/upload/album")}
              >
                <div className={classes.cloud_icon_con}>
                  <RiNeteaseCloudMusicLine className={classes.cloud_icon} />
                </div>
                <p className={classes.upload_song}>Upload Album</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <MediaQuery minWidth={1000}>
            <div className={classes.slide_con_con}>
              <div className={classes.slide_con}>
                <Splide
                  options={{
                    rewind: true,
                    type: "loop",
                    padding: "34%",
                    gap: "20px",
                    pagination: false,
                    autoScroll: {
                      pauseOnHover: false,
                      pauseOnFocus: false,
                      rewind: false,
                      speed: 1,
                    },
                    focus: "center",
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <Skeleton className={classes.skeleton} />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={999}>
            <div className={classes.slide_con_con}>
              <div className={classes.slide_con}>
                <Splide
                  options={{
                    rewind: true,
                    type: "loop",
                    // gap: "20px",
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    autoplay: true,
                  }}
                >
                  <SplideSlide>
                    <Skeleton className={classes.skeleton} />
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </MediaQuery>

          <div className={classes.skeleton_con}>
            {" "}
            <Skeleton className={classes.skeleton} />
          </div>
        </>
      )}
      {songModal && <SongDetails closeSongModal={openSongModal} />}
    </Fragment>
  );
}
export default Dashboard;
