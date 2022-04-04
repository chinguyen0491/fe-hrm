import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RecruitProvider } from "./hook/ContextRecruit";
import { Suspense, lazy } from "react";
import Loading from "./Components/Loading/Loading";
import App from "./App";
const SignIn = lazy(() => import("./Pages/Account/SignIn"));
const SignOut = lazy(() => import("./Pages/Account/SignOut"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Recruit = lazy(() => import("./Pages/Recruit"));
const FormRecruit = lazy(() => import("./Pages/FormRecruit/FormRecruit"));

const FAQs = lazy(() => import("./Pages/FAQs"));
const Detail = lazy(() => import("./Pages/DetailJob"))

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <RecruitProvider>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/tuyen-dung" component={Recruit} />
          <Route path="/tuyen-dung/:name" component={Recruit} />
          <Route exact path="/recruit/apply" component={FormRecruit} />
          <Route exact path="/chi-tiet" component={Detail} />
          <Route exact path="/hoi-dap" component={FAQs} />
          <Route exact path="/dang-nhap" component={SignIn} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </RecruitProvider>
  </BrowserRouter>,
  rootElement
);
