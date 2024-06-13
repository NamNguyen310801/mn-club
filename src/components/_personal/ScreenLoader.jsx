import React from "react";

export default function ScreenLoader() {
  return (
    <div
      className="screen-loader screen-loader--off"
      style={{ background: "rgb(108, 13, 13)" }}>
      <span className="loader" />
    </div>
  );
}
