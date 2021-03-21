import React from "react";
import { TextField, Button } from "@material-ui/core";
const SearchScreenUI = (props) => {
  //console.table(props.CallAPi);
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Image Category"
        variant="outlined"
        color="secondary"
        placeholder="Landscape"
        className="mt-2  w-100"
        name="inpVal"
        value={props.inpVal}
        onChange={props.handleChange}
      />

      <br />
      <Button
        variant="contained"
        color="secondary"
        className="mt-2  mb-4 p2 w-100"
        onClick={props.CallAPi}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchScreenUI;
