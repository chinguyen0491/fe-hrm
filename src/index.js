import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react"; 
import Loading from "./Components/Loading/Loading";
import App from "./App"; 
const PageNotFound = lazy(() => import("./Pages/PageNotFound")); 
const Recruit = lazy(() => import("./Pages/Recruit")); 
const FormRecruit = lazy(() => import("./Pages/FormRecruit/FormRecruit")); 
const FAQs = lazy(() => import("./Pages/FAQs/")); 
const DetailJob = lazy(() => import("./Pages/DetailJob"))
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>  
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={App} /> 
                <Route exact path="/tuyen-dung" component={Recruit} /> 
                <Route path="/tuyen-dung/:name" component={DetailJob} />  
                <Route exact path="/tuyen-dung/apply" component={FormRecruit} />  
                <Route exact path="/hoi-dap" component={FAQs} /> 
                <Route path="/*" component={PageNotFound} />
              </Switch>
            </Suspense> 
  </BrowserRouter>,
  rootElement
);
