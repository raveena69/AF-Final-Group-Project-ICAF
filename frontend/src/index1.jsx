// import React from 'react';
import{render} from 'react-dom';
// import App from './App';
// // import settings from './Settings';

// // render(<h1>Hello World</h1>, document.getElementById('root'));
// render(<App />, document.getElementById('root'));

import React from "react";
// import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { AuthProvider } from "./context/AuthContext";

render(
  <LayoutProvider>
    <AuthProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
