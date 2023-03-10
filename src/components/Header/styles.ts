import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 128px;

    z-index: 2000;

`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    width: 80%;

`

export const GitIcon = styled.span`
    display: flex;
    .iconGit {
        font-size: 48px;
        color: #fff;
        cursor: pointer;
    }

`