import { useState } from "react";
import UploadAlbumContext from "./uploadAlbumContext";

const UploadAlbumState = ({ children }) => {
  const [albumInfo, setAlbumInfo] = useState({
    image: [],
    song: [],
  });

  const [n, setN] = useState(0);

  return (
    <UploadAlbumContext.Provider value={{ albumInfo, setAlbumInfo, n, setN }}>
      {children}
    </UploadAlbumContext.Provider>
  );
};

export default UploadAlbumState;
