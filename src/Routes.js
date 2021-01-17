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
import Detail from "./Pages/Detail/Detail";
import DetailQna from "./Pages/Detail/DetailQna";
import DetailQnaNew from "./Pages/Detail/DetailQnaNew";
import DetailReview from "./Pages/Detail/DetailReview";
import DetailPurchases from "./Pages/Detail/DetailPurchases";
import CategoryNav from "./Components/Navigation/CategoryNav";
import FeedComment from "./Pages/Activity/Feed/FeedComment";
import FeedPage from "./Pages/Activity/Feed/FeedPage";
import Feed from "./Pages/Activity/Feed/Feed";
import ModalFilter from "./Pages/Activity/ModalFilter";
import Activity from "./Pages/Activity/Activity";

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
            <Navigation />
            <Switch>
              <Route exact path="/ModalFilter" component={ModalFilter} />
              <Route exact path="/Activity" component={Activity} />
              <Route exact path="/FeedComment" component={FeedComment} />
              <Route exact path="/FeedPage" component={FeedPage} />
              <Route exact path="/Feed" component={Feed} />
              <Route exact path="/StandardSignUp" component={StandardSignUp} />
              <Route exact path="/CategoryNav" component={CategoryNav} />
              <Route exact path="/" component={Main} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route exact path="/purchases" component={DetailPurchases} />
              <Route exact path="/detailReview" component={DetailReview} />
              <Route exact path="/qna" component={DetailQna} />
              <Route exact path="/qna/new" component={DetailQnaNew} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </Router>
      </>
    );
  }
}

export default Routes;
