import React, { Component } from "react";
import SearchScreenUI from "./searchScreen";
import ImageSearchGallery from "./imageSearchGalleryComponent";
import { CircularProgress } from "@material-ui/core";

class SearchScreenContainer extends Component {
  state = {
    inpVal: "",
    imagesData: [],
    images: "",
    loader: true
  };

  CallAPi = () => {
    //console.log(this.state.inpVal);
    this.setState({
      loader: true
    });
    let keyword = this.state.inpVal;
    fetch(
      `https://pixabay.com/api/?key=18112703-f6a2ee52f2f97171550896f49&q=${keyword}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          imagesData: data.hits,
          loader: false
        });
        console.log(this.state.imagesData);
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    //console.log(value);
    this.setState({ [name]: value, loader: false });
  };
  render() {
    const imageSearchGallery = this.state.imagesData.map((item) => (
      <ImageSearchGallery
        key={item.id}
        largeImageURL={item.largeImageURL}
        tags={item.tags}
      />
    ));

    return (
      <div>
        <SearchScreenUI
          handleChange={this.handleChange}
          inpVal={this.inpVal}
          CallAPi={this.CallAPi}
        />
        {/*{galleryComponent}*/}
        {this.state.loader ? (
          <div class="loader_div">
            <CircularProgress />
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row">{imageSearchGallery}</div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchScreenContainer;
