import React from "react";
import { Header } from "../componets/Header";
import { AppLable } from "../componets/AppLable";
import { AppButton } from "../componets/AppButton";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header/>
          <form className="welcome__form">
            <AppLable/>
            <AppButton/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
