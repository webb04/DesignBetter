import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

const Title = styled.h1`
  text-align: center;
  padding-top: 2em;
  margin-top: 0px;
  font-size: 2em;
  font-family: "Eina 03";

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 20px;
    padding: 50px 0;
    margin-bottom: 0;
  }
`;

const Break = styled.span`
  @media (max-width: 768px) {
    display: block;
  }
`;

class App extends Component {
  render() {
    return (
      <section>
        <Title>Design better. <Break>Faster. Together.</Break></Title>
        <Container increment={0.15}/>
     </section>
    );
  }
}

export default App;
