import { useContext } from "react";
import UploadAlbumContext from "../../../../../contexts/upload album fns/uploadAlbumContext";

function PageTwoUploadAlbum() {
  const { n, albumInfo, setAlbumInfo } = useContext(UploadAlbumContext);
  return (
    <div>
      <input
        type={"text"}
        name={`artiste ${n}`}
        onChange={(e) => {
          setAlbumInfo((prev) => ({
            ...prev,
            [e.target.name]: "",
          }));
          setAlbumInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }}
        value={albumInfo.artiste0}
      />
    </div>
  );
}
export default PageTwoUploadAlbum;
