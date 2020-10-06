import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import FullWidth from "../components/FullWidth";

import logoAngular from "../images/angular.svg";
import logoMicrosoft from "../images/microsoft.svg";
import logoPHP from "../images/php.svg";
import logoCss from "../images/css.svg";
import logoFlutter from "../images/flutter.svg";
import logoNodejs from "../images/nodejs.svg";
import logoReact from "../images/react.svg";
import logoVue from "../images/vue.svg";
import logoSymfony from "../images/symfony.svg";
import logoSass from "../images/sass.svg";

const Height = styled.div`
  position: relative;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;


const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const icons = [
  logoAngular,
  logoMicrosoft,
  logoReact,
  logoPHP,
  logoCss,
  logoFlutter,
  logoNodejs,
  logoVue,
  logoSymfony,
  logoSass,
];

const Companies = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  
  return (
    <FullWidth>
      <Height height={300}>
        <Marquee
          key={key}
          velocity={30}
          scatterRandomly
          minScale={1}
          resetAfterTries={200}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(10, Number).map((id) => (
            <Motion
              key={`marquee-example-company-${id}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
              velocity={90}
              radius={30}
            >
              <Logo src={icons[id]} alt="" />
            </Motion>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

export default React.memo(withSize()(Companies));
