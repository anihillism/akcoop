import React, { useState } from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled';
import logo from '../../static/logo/header-logo.jpg';
import { breakpoints } from "../utils/breakpoints";


const Wrapper = styled.div`

    width: 100%;
    z-index: 1000;
    top: 0;
`

const StyledLink = styled(Link)`
    display: flex;
    font-weight: 700;
    align-items: center;
    margin-left: 1rem;
    margin-top: 1rem;
    width: 25%;
    position: absolute;
    z-index: 1000;
    @media ${breakpoints.md} {
        display: none;
    }
`;

const MobileNavMenu = () => {
    const [menuOpen, toggleMenuOpen] = useState(false)

    return (
        <Wrapper>
            <StyledLink to="/">
                <img src={logo} alt="AK Coops Logo" style={{ borderRadius: "50%", boxShadow: "10px 10px 10px #34806b" }} />
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
        </Wrapper>
    )
}

export default MobileNavMenu

const MenuBar = styled.header`
    @media ${breakpoints.md} {
        display: none;
    }
    height: auto;
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    background: transparent;
    border-bottom: white;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    z-index: 900;
`

const MenuIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 3rem;

`

const MenuIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    margin-right: 1rem;
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
    position: fixed;
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
