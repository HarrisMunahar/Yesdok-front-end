import {
    BrowserRouter as Router,
    Switch,
    Route,   
  } from "react-router-dom";
import ArticleContainer from "./Components/ArticleDetail";
import FooterContainer from "./Components/Footer";
import { MainSection } from "./Components/HomePage";
import MainNavigation from "./Components/Navigation";

const RouteIndex = () => {
    return (
        <Router>
          <MainNavigation></MainNavigation>
          <Switch>
            <Route path="/article/:id">
              <ArticleContainer></ArticleContainer>
            </Route>
            <Route path="/">
                <MainSection></MainSection>
            </Route>
          </Switch>
          <FooterContainer></FooterContainer>
      </Router>
    )
}

export default RouteIndex