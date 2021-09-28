import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus India updates", "Top news - 886 reader")}
      {newsArticle("Tesla hits new highs", "Car & auto - 330 reader")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 600 reader")}
      {newsArticle("Redux is good", "Code - 500 reader")}
      {newsArticle(
        "FramerMotion is good for animations",
        "Programming - 764 reader"
      )}
    </div>
  );
};

export default Widgets;
