import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

export default function ImageSearchGallery(props) {
  // console.log(props);

  return (
    <div className="col-md-6 col-lg-6 mt-2">
      <Card>
        <CardImg
          top
          width="100%"
          src={props.largeImageURL}
          alt="Card image cap"
        />
      </Card>
    </div>
  );
}
