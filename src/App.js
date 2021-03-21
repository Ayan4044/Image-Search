import React from "react";
import "./styles.css";
import SearchScreenContainer from "./componentScreen/searchScreenContainer";
export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-12">
          <SearchScreenContainer />
        </div>
      </div>
    </div>
  );
}
