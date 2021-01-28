import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  height: 30vh;
  margin: 0;

`


const Chicken = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 80px;
    transform: translate(-50%, -50%);
`;

const Body = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    background: chocolate;

    ::after {
      content: "";
      position: absolute;
      top: 20%;
      left: 50%;
      width: 20%;
      height: 40%;
      border-bottom-right-radius: 1000px;
      border-top: 1px solid darkslategray;
      border-bottom: 1px solid darkslategray;
      border-right: 1px solid darkslategray;
      animation: flap 1s infinite ease-out;
      transform-origin: 0 0;
`;

const Head = styled.div`
      position: absolute;
      top: -50px;
      left: 0;
      width: 50px;
      height: 50px;
      background: chocolate;
      border-top-right-radius: 23123px;

      ::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 30%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: black;
        transform: translate(-50%, -50%);
        animation: blink 5s infinite;
`;

const Beak = styled.div`
      position: absolute;
      top: -20px;
      left: -20px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: crimson;
`;

const Tail = styled.div`
      position: absolute;
      top: -20px;
      right: 0;
      width: 20px;
      height: 20px;
      background: chocolate;
      border-top-left-radius: 123132px;
`;

const LegOne = styled.div`
      left: 40%;
      position: absolute;
      bottom: -18px;
      width: 2px;
      height: 20px;
      background: crimson;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -5px;
        width: 5px;
        height: 2px;
        background: red;
      }
`;

const LegTwo = styled.div`
      left: 60%;
      position: absolute;
      bottom: -18px;
      width: 2px;
      height: 20px;
      background: crimson;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -5px;
        width: 5px;
        height: 2px;
        background: red;
      }
`;




const Hair = styled.div`
        position: absolute;
        top: -5px;
        left: -1px;
        width: 5px;
        height: 10px;
        background: crimson;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        transform: rotate(-10deg);
        ::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 5px;
          width: 5px;
          height: 8px;
          background: crimson;
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
        }
        ::after {
          content: "";
          position: absolute;
          top: 4px;
          left: 10px;
          width: 5px;
          height: 6px;
          background: crimson;
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
        }
`;

const Chook = () => (
  <Wrapper>
    <Chicken>
        <Head>
            <Hair />
        </Head>
        <Beak />
        <Body />
        <Tail />
        <LegOne />
        <LegTwo />
    </Chicken>
  </Wrapper >
);

export default Chook;