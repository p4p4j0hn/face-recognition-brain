import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {box.map((x, i) => {
          return (
            <div
              className="bounding-box"
              key={i}
              style={{
                top: x.topRow,
                right: x.rightCol,
                bottom: x.bottomRow,
                left: x.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;

