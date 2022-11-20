import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const fadeInRight = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateX(50px);
}
100% {
  opacity: 1;
  webkit-transform: translateX(0);
}
`;

const LeftFade = styled.img`
  animation: ${fadeInLeft} 2s both;
`;

const RightFade = styled.div`
  animation: ${fadeInRight} 2s both;
`;
const HeroBaner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-container flex-container">
        <div className="hero-left flex-container">
          <LeftFade src={require("../assets/images/sitting-jc.png")} alt="" />
        </div>
        <RightFade className="hero-right flex-container">
          <h1>
            J<span>ust</span>
          </h1>
          <div className="hashtag-anchor">
            <h1>
              C<span>hill</span>
              <span className="and-symbol">&</span>
            </h1>
          </div>
          <h1>
            C<span>ode</span>
          </h1>
        </RightFade>
      </div>
    </section>
  );
};

export default HeroBaner;
