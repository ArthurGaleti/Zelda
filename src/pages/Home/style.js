import styled from "styled-components";

export const Banner = styled.img`
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height:20%;
`;

export const TrailerC = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
`;

export const Conteudo = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Trailer = styled.video`
    width: 60%;
    margin-right: 10px;
`;

export const Sinopse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
`;

export const Descricao = styled.p`
    color: #fff;
    font-size: 19px;
    font-family: 'Tektur', cursive;
    width: 140%;
`;

export const CardPe = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
`;
export const CardCo = styled.div`
    width: 90%;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    row-gap: 20px;
    column-gap: 40px;
`;
export const Card   = styled.div`
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-family: 'Tektur', cursive;;
`;
export const CardP  = styled.p`
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    font-size: 30px;
    padding: 0 0 20px 10px;
` ;