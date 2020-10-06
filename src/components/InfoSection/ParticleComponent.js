import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const Column = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default () => (
  <Column>
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  </Column>
);
