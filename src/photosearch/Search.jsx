import React, { useState } from "react";
import ShowSearch from "./ShowSearch";
const Search = () => {
  const [image, setImage] = useState("");
  const handleOnChange = (e) => {
    setImage(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={image}
        placeholder="search any thing"
        onChange={handleOnChange}
      />
      <ShowSearch />
    </div>
  );
};

export default Search;
