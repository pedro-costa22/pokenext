import styled from "styled-components";

const bgBlue = "https://codeboost.com.br/projetos/pokeapi/img/bg-blue.svg";


export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 100%;
    height: 100vh;

    border: 1px solid green;

`;


export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    position: absolute;

    height: 74%;
    width: 100%;
    top: 0;

    background-image: url(${bgBlue});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        h2 {
            font-family: "Montserrat", sans-serif;
            padding-top: 400px;
            text-align: center;
            font-weight: bold;
            font-size: 4rem;
            line-height: 3rem;
            letter-spacing: -0.01em;
            color: #FFFFFF;
            margin-bottom: 0.8rem;
        }

        p {
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 150%;
            text-align: center;
            color: #FFFFFF;
        }
    }

    .pokeball {
        position: relative;
        top: 108px;
        left: 13px;
        z-index: 9999;

        animation-duration: 1.2s;
        animation-name: changewidth;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes changewidth {
        from {
            top: 100px;
        }

        to {
            top: 108px;
        }
    }


`