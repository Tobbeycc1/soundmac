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

  // payout info state
  const [payOutInfo, setPayOutInfo] = useState({
    payOutOption: "",
  });

  // payout function on select of payment optiopn
  const payoutFn = (e) => {
    setPayOutInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
        payoutFn,
        payOutInfo,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsState;
