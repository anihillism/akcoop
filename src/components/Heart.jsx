import React from 'react';
import styled from '@emotion/styled';

const Heartshape = styled.div`
    position: relative;
    margin: auto;
    width: 100px;
    height: 90px;
    margin-top: 10px;
    ::before, ::after {
        content: "";
        position: absolute;
        top: 0;
        width: 50px;
        height: 80px;
        border-radius: 50px 50px 0 0;
        background: #921C4A;
    }
    ::before {
        left: 50px;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    ::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`;

const Heart =() =>(
    <Heartshape />
);

export default Heart;