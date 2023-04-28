import React, { FC } from "react";
import "./Overlay.scss";

export const Overlay: FC = (): JSX.Element => {
  return (
    <section data-testid="overlay" className="Overlay">
      <div className="Overlay__one"></div>
      <div className="Overlay__two"></div>
      <div className="Overlay__three"></div>
    </section>
  );
};
