import SettingsContext from "./SettingsContext";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const SettingsState = ({ children }) => {
  // react responsiveness
  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 999px)" });

  //   on click of hamburger menu
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const hamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <SettingsContext.Provider
      value={{
        isBigScreen,
        hamburgerMenu,
        setShowHamburgerMenu,
        showHamburgerMenu,
        isSmallScreen,
        country,
        setCountry,
        region,
        setRegion,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsState;
