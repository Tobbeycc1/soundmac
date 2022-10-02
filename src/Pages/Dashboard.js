import classes from "../CSS files/Dashboard.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
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

const dummyImages = [
  {
    id: 1,
    src: "https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg",
  },
  {
    id: 2,
    src: "https://oscarmini.com/wp-content/uploads/2014/08/michaeljackson_coverart.jpg",
  },
  {
    id: 3,
    src: "https://graphicriver.img.customer.envatousercontent.com/files/383062766/music-albumcover-templates-bundle78-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=17318da830a8e0cad5e038de293bced3",
  },
  {
    id: 4,
    src: "https://www.bellanaija.com/wp-content/uploads/2018/09/rasaking-720x720.jpg",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/dc/ae/9a/dcae9acc196c7de7fdb4214b01de84ac.jpg",
  },
  {
    id: 6,
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
    new Set(["Please Select An Account Type"])
  );
  console.log(selected);

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  useEffect(() => {
    handler();
  }, []);

  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <div className={classes.select_account_type_con}>
          <p>SOUNDMAC ACCOUNT TYPE</p>
          <Dropdown>
            <Dropdown.Button light color="primary" css={{ tt: "capitalize" }}>
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
      </Modal>
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
          {dummyImages.map((item, index) => (
            <SplideSlide>
              <div className={classes.Cover_Image}>
                <img src={item.src} className={classes.src} alt={item.id} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
export default Dashboard;
