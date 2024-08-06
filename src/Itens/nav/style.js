import styled from "styled-components";


export const Header = styled.header`
    height: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;    
    background-color: rgb(29, 134, 32);
`;

export const LogoImg = styled.img`
    background-color: rgba(0, 0, 0, 0);
    float: left;
    width: 110px;
    height: auto;
    margin-top: 10px;
`;

export const Nave = styled.nav`
    width: 50%;
    background-color: rgba(0, 0, 0, 0);
`;

export const Lista = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0);
`;

export const Item = styled.li`
    list-style: none;
    color: #fff;
    cursor: pointer;
    font-size: 19px;
    font-family: 'Tektur', cursive;
    background-color: rgba(0, 0, 0, 0);
`;