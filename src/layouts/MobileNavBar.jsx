import React, { useState } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';
import { breakpoints } from "../utils/breakpoints"

const StyledLink = styled(Link)`
    display: flex;
    font-weight: 700;
    align-items: center;
    margin: auto;
    @media ${breakpoints.md} {
        display: none;
    }
`;

const MobileNavMenu = () => {
    const [menuOpen, toggleMenuOpen] = useState(false)

    return (
        <Headroom calcHeightOnResize disableInlineStyles>
            <StyledLink to="/">
                <img src={logo} alt="AK Coops Logo" />
            </StyledLink>
            <MenuBar>
                <MenuIconContainer menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
                    <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
                        <div />
                        <div />
                        <div />
                    </MenuIcon>
                </MenuIconContainer>
                <MenuLinks menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
                    <Link to="/">Home</Link>
                    <Link to="/coop">Coops</Link>
                    <Link to="/about">About</Link>
                </MenuLinks>
            </MenuBar>
        </Headroom>
    )
}

export default MobileNavMenu

const MenuBar = styled.header`
    @media ${breakpoints.md} {
        display: none;
    }
    height: auto;
    position: flex;
    justify-content: flex-end;
    width: 100%;
    background: transparent;
    border-bottom: "white";
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`

const MenuIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

const MenuIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    outline: thin-dotted;
    z-index: 11;
    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ menuOpen }) => (menuOpen ? "white" : "white")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: opacity 300ms, transform 300ms;
        :first-child {
        transform: ${({ menuOpen }) =>
            menuOpen ? "rotate(45deg)" : "rotate(0)"};
        }
        :nth-child(2) {
        opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
        transform: ${({ menuOpen }) =>
            menuOpen ? "translateX(-20px)" : "translateX(0)"};
        }
        :nth-child(3) {
        transform: ${({ menuOpen }) =>
            menuOpen ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`

const MenuLinks = styled.nav`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 500;
    font-size: 4rem;
    display: flex;
    background: linear-gradient(45deg, #44a68c, #34806b);
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 300ms;
    transform: ${({ menuOpen }) =>
            menuOpen ? "translateX(0)" : "translateX(100%)"};
    ul {
        width: 100%;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        li {
            list-style: none;
        }
    }
    a {
        color: white;
        margin-bottom: 1.5rem;
        transition: all ${props => props.theme.transitions.default.duration};
        &:hover {
            color: ${props => props.theme.colors.white.grey};
    }
`