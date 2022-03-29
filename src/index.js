import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react"; 
import Loading from "./Components/Loading/Loading";
import App from "./App"; 
import PostList  from "./api/axiosInstance";
const PageNotFound = lazy(() => import("./Pages/PageNotFound")); 
const Recruit = lazy(() => import("./Pages/Recruit")); 
const FAQs = lazy(() => import("./Pages/FAQs/")); 
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>  
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={App} /> 
                <Route exact path="/tuyen-dung" component={Recruit} /> 
                <Route exact path="/hoi-dap" component={FAQs} /> 
                <Route exact path="/api" component={PostList} /> 
                <Route path="/*" component={PageNotFound} />
              </Switch>
            </Suspense> 
  </BrowserRouter>,
  rootElement
);
