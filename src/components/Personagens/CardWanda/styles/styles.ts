import styled from 'styled-components'

export const Div = styled.div`
    width: 22vw;
    height: 65vh;

    border-radius: 25px;
    margin-top: 45px;

    display: flex;
    flex-direction: column-reverse;

    @media(max-width: 768px){
      width: 100%;
      height: 100vh;

      padding-bottom: 25px;
      
   }
`;

export const DivInside = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    padding-bottom: 12px;

    background-image: linear-gradient(to bottom, red, #ff8080);
    opacity: 0.7;

    border-radius: 25px;
    height: 215px;
    

`;

export const H3 = styled.h3`
    padding-top: 15px;
    margin-bottom: 25px;
`;

export const Button = styled.button`
`;

export const P = styled.p`
    font-size: 14px;

    margin-left: 25px;
    margin-right: 25px;
`;