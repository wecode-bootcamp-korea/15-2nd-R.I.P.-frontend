import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Pages/Main/Main";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import StandardSignUp from "./Pages/SignUp/StandardSignUp";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from "./Styles/theme";
import CategoryNav from "./Components/Navigation/CategoryNav";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <ThemeProvider theme={theme}>
            {/* <Navigation /> */}
            <Switch>
              <Route exact path="/StandardSignUp" component={StandardSignUp} />
              <Route exact path="/" component={Main} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
            </Switch>
            {/* <Footer /> */}
          </ThemeProvider>
        </Router>
      </>
    );
  }
}

export default Routes;
