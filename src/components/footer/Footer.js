import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <p>{props.note}</p>
    </div>
  );
}
