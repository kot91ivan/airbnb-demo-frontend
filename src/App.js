import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Main />
        <Footer />
      </Wrap>
    );
  }
}

export default App;
