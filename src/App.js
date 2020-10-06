import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/Portfolio2" exact component={Home} />

        <Route path="/Portfolio2/contact" component={Contact} />
        <Route path="/Portfolio2/exemple" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
