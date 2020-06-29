import React from 'react';
import { BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #f8f8f8;
  padding: 8px;
  min-height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
`;

const StyledMainContainer = styled.div`
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
    display: flex;
    flex: 1;
`;

export default function App() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
          <Container>
              <NavBar />
              <StyledMainContainer>
                  <Switch>
                      <Route path="/about">
                          <About />
                      </Route>
                      <Route path="/contact">
                          <Contact />
                      </Route>
                      {/* Default path is home  */}
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </StyledMainContainer>
              <Footer />
          </Container>
        </Router>
    );
}

function Home() {
    return <p>Hey! This page is currently under construction. Check back for updates later!</p>;
}

function About() {
    return <h1>About</h1>;
}

function Contact() {
    return <h1>Contact</h1>;
}
