import classes from "../CSS files/Dashboard.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import { ToastContainer, toast } from "react-toastify";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Grid,
  Dropdown,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import AccountTypeContext from "../contexts/account type/accountTypeContext";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { RiMusicLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    song: "good girl",
    src: "https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg",
  },
  {
    id: 2,
    song: "good girl",
    src: "https://oscarmini.com/wp-content/uploads/2014/08/michaeljackson_coverart.jpg",
  },
  {
    id: 3,
    song: "good girl",
    src: "https://graphicriver.img.customer.envatousercontent.com/files/383062766/music-albumcover-templates-bundle78-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=17318da830a8e0cad5e038de293bced3",
  },
  {
    id: 4,
    song: "good girl",
    src: "https://www.bellanaija.com/wp-content/uploads/2018/09/rasaking-720x720.jpg",
  },
  {
    id: 5,
    song: "good girl",
    src: "https://i.pinimg.com/736x/dc/ae/9a/dcae9acc196c7de7fdb4214b01de84ac.jpg",
  },
  {
    id: 6,
    song: "good girl",
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-art-template-design-6d5b5d8df1dbe0c1fcaa4c1ba16a86a9_screen.jpg?ts=1635384690",
  },
  {
    id: 7,
    song: "good girl",
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-art-template-design-6d5b5d8df1dbe0c1fcaa4c1ba16a86a9_screen.jpg?ts=1635384690",
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
    if (selected.anchorKey !== "Free_account" && artisteFormName == "") {
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
    handler();
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
              <Dropdown>
                <Dropdown.Button
                  light
                  color="primary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="Free_account">Free Account</Dropdown.Item>
                  <Dropdown.Item key="Independent_artist">
                    Independent Artist
                  </Dropdown.Item>
                  <Dropdown.Item key="label">Label</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {selected.anchorKey === "Independent_artist" ||
            selected.anchorKey === "label" ? (
              <div className={classes.input_account_type}>
                {" "}
                <Input
                  labelPlaceholder="Artiste Name"
                  status="default"
                  onChange={onChange}
                />
              </div>
            ) : (
              <></>
            )}
            <div className={classes.proceed_button}>
              <Button color="gradient" auto onPress={onSubmit}>
                Proceed
              </Button>
            </div>
          </div>
        </div>
      )}

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

      {/* song streams, music, visit & Upload song  */}
      <div className={classes.section2_con}>
        <div className={classes.todays_stream}></div>

        {/* upload song */}

        <div className={classes.upload_song_con} onClick={uploadSongFn}>
          <p className={classes.upload_song}> Upload Song</p>
          <div className={classes.cloud_icon_con}>
            <RiMusicLine className={classes.cloud_icon} />
          </div>
          <p className={classes.supported_format}> Supported format: mp3</p>
        </div>

        {/* upload album */}
        <div className={classes.upload_song_con}>
          <p className={classes.upload_song}> Upload Album</p>
          <div className={classes.cloud_icon_con}>
            <RiNeteaseCloudMusicLine className={classes.cloud_icon} />
          </div>
          <p className={classes.supported_format}> Supported format: zip</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
