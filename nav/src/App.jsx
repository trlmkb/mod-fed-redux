import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import { StoreProvider } from "store/store";

import "./index.scss";

const App = () => (
  <StoreProvider>
    <div className="page">
      <fieldset className="mf-wrap">
        <legend>
          <span className="mf">I am <strong>Nav</strong> microfrontend</span>
        </legend>

        <Header />
        <div className="count-wrapper">
          This isn't the microfrontend you're looking for.
        </div>
      </fieldset>
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
