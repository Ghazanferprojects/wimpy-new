import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./Main";
import "./styles/reset.css";
import BasicExample from "./BasicExample";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import  useHistory  from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <a href="App.js"  ></a> */}
    
      <Switch>
        <Route  path="/" exact={true}>
          <Main />

        </Route>

        <Route 
         path="/App" exact={true}>
          <App />

        </Route>
      </Switch>
    </Router>

    {/* <BasicExample/> */}
    {/* <Home/> */}






    {/* <App /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 