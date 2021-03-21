import React from "react";
import Gallery from "react-photo-gallery";
import { Paper } from "@material-ui/core";
export default function ImageGalleryComponent(props) {
  console.log(props.images);
  return (
    <Paper elevation={3}>
      <Gallery
        images={props.images}
        onSelectImage={props.onSelectImage}
        showLightboxThumbnails={true}
      />
    </Paper>
  );
}
