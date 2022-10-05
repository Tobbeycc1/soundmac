import classes from "../CSS files/Dashboard.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import { ToastContainer, toast } from "react-toastify";
import { Dropdown, Popover, Text, Button } from "@nextui-org/react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import AccountTypeContext from "../contexts/account type/accountTypeContext";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { RiMusicLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import { GoKebabVertical } from "react-icons/go";

const dummyData = [
  {
    id: 1,
    artisteName: "Tobbey",
    song: "good girl",
    src: "https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg",
    ft: "wizkid",
  },
  {
    id: 2,
    artisteName: "Tobbey",
    song: "Gbese",
    src: "https://oscarmini.com/wp-content/uploads/2014/08/michaeljackson_coverart.jpg",
    ft: "Asake, burna boy",
  },
  {
    id: 3,
    artisteName: "Tobbey",
    song: "Essence",
    src: "https://graphicriver.img.customer.envatousercontent.com/files/383062766/music-albumcover-templates-bundle78-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=17318da830a8e0cad5e038de293bced3",
    ft: "",
  },
  {
    id: 4,
    artisteName: "Tobbey",
    song: "Daddy yo",
    src: "https://www.bellanaija.com/wp-content/uploads/2018/09/rasaking-720x720.jpg",
    ft: "",
  },
  {
    id: 5,
    artisteName: "Tobbey",
    song: "Holla at your boy ",
    src: "https://i.pinimg.com/736x/dc/ae/9a/dcae9acc196c7de7fdb4214b01de84ac.jpg",
    ft: "",
  },
  {
    id: 6,
    artisteName: "Tobbey",
    song: "soweto baby",
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-art-template-design-6d5b5d8df1dbe0c1fcaa4c1ba16a86a9_screen.jpg?ts=1635384690",
    ft: "",
  },
  {
    id: 7,
    artisteName: "Tobbey",
    song: "Grace",
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-art-template-design-6d5b5d8df1dbe0c1fcaa4c1ba16a86a9_screen.jpg?ts=1635384690",
    ft: "chris brown",
  },
];

function Dashboard(props) {
  // Modal
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  // drop down to select account type
  const [selected, setSelected] = useState(
    new Set(["Please Select  Account Type"])
  );
  console.log(selected.anchorKey);

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  // modal
  const [modal, showModal] = useState(false);

  // modal shown onLoad
  const modalShown = () => {
    showModal(true);
  };

  // handle artiste name in the account type form
  const [artisteFormName, setArtisteFormName] = useState("");

  const onChange = (e) => {
    // console.log(e.target.value);
    setArtisteFormName(e.target.value);
  };
  console.log(artisteFormName);

  const { proceed } = useContext(AccountTypeContext);

  const onSubmit = () => {
    if (artisteFormName === "") {
      console.log("error");
      toast.error("Field can't be empty !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      proceed();
      showModal(false);
    }
  };

  // upload song
  const navigate = useNavigate();

  const uploadSongFn = () => {
    console.log("upload song");
    navigate("/uploadmusic");
  };
  useEffect(() => {
    // handler();
    modalShown();
  }, []);

  // select the first 5 objects
  const firstFive = dummyData.slice(0, 5);
  // console.log(firstFive);
  // console.log(dummyData);

  return (
    <div className={classes.dashboard_con}>
      {modal && (
        <div className={classes.modal}>
          {/* error message */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className={classes.modal_sub_con}>
            <div className={classes.select_account_type_con}>
              <p className={classes.account_type_header}>
                SOUNDMAC ACCOUNT TYPE
              </p>
              <div className={classes.drop_drop_down_con}>
                <Dropdown>
                  <Dropdown.Button
                    light
                    color="default"
                    css={{ tt: "capitalize" }}
                  >
                    {selectedValue}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="default"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                  >
                    <Dropdown.Item key="Free_account">
                      Free Account
                    </Dropdown.Item>
                    <Dropdown.Item key="Independent_artist">
                      Independent Artist
                    </Dropdown.Item>
                    <Dropdown.Item key="label">Label</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            {selected.anchorKey === "Independent_artist" ||
            selected.anchorKey === "label" ||
            selected.anchorKey === "Free_account" ? (
              <div className={classes.input_account_type}>
                {" "}
                <input
                  className={classes.input_artiste_name_field}
                  type={"text"}
                  placeholder={
                    selected.anchorKey === "label"
                      ? "Label name"
                      : "Artiste name"
                  }
                  onChange={onChange}
                />
              </div>
            ) : (
              <></>
            )}
            <div className={classes.proceed_button}>
              <button auto onClick={onSubmit} className={classes.proceed}>
                Proceed
              </button>
            </div>
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
              {firstFive.map((item, index) => (
                <SplideSlide>
                  <div className={classes.Cover_Image}>
                    <img src={item.src} className={classes.src} alt={item.id} />
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
              {firstFive.map((item, index) => (
                <SplideSlide>
                  <div className={classes.Cover_Image}>
                    <img src={item.src} className={classes.src} alt={item.id} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </MediaQuery>

      {/* song streams, music, visit & Upload song  */}
      <div className={classes.section2_con}>
        <div className={classes.todays_stream_A}>
          <p className={classes.song_heading}>Songs</p>
          {firstFive.map((item, index) => (
            <div className={classes.small_songs_con}>
              <img
                src={item.src}
                alt={item.title}
                className={classes.small_music_icon}
              />

              <div className={classes.items_con}>
                <p className={classes.item_song}>{item.song}</p>
                <p className={classes.item_artiste_name}>
                  {item.artisteName} {item.ft !== "" ? `ft ${item.ft}` : ""}{" "}
                </p>
              </div>
              <div className={classes.pop_over_con}>
                <Popover isBordered disableShadow>
                  <Popover.Trigger>
                    <Button auto flat>
                      <GoKebabVertical />
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content>
                    <div>
                      <p className={classes.popover_content}>
                        no content from th endpoint yet
                      </p>
                    </div>
                  </Popover.Content>
                </Popover>
              </div>
            </div>
          ))}
          <br />
          <Link to={"/music_catalog"} className={classes.link_to_catalog}>
            more
          </Link>
        </div>

        <div className={classes.todays_stream}>
          <p className={classes.song_heading}>Albums</p>
          {firstFive.map((item, index) => (
            <div className={classes.small_songs_con}>
              <img
                src={item.src}
                alt={item.title}
                className={classes.small_music_icon}
              />

              <div className={classes.items_con}>
                <p className={classes.item_song}>{item.song}</p>
                <p className={classes.item_artiste_name}>
                  {item.artisteName} {item.ft !== "" ? `ft ${item.ft}` : ""}{" "}
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
          <div className={classes.upload_song_con} onClick={uploadSongFn}>
            <div className={classes.cloud_icon_con}>
              <RiMusicLine className={classes.cloud_icon} />
            </div>
            <p className={classes.upload_song}>Upload Songs</p>
          </div>

          {/* upload album */}
          <div className={classes.upload_song_con}>
            <div className={classes.cloud_icon_con}>
              <RiNeteaseCloudMusicLine className={classes.cloud_icon} />
            </div>
            <p className={classes.upload_song}>Upload Album</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
