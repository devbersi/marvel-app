import styled from 'styled-components'

export const DivBackground = styled.div`
   width: 100%;
   height: 100vh;

`;

export const Header = styled.div`
   width: 100%;
   height: 140px;

   background-color: black;

   border-bottom-style: solid;
   border-color: #f00;

   display: flex;
   flex-direction: row;
   justify-content:     space-around;
   align-items: center;

`;

export const Items = styled.li`
    margin-left: 45px;

    font-size: 18px;

    display: flex;
    align-items: center;
`;

export const List = styled.ul`
   list-style: none;

   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const Anchor = styled.a`
   text-decoration: none;

   color: #fff;

   :hover{
       color: #f00;
   }
`;

export const Exit = styled.a`
   margin-left: 10px;

   text-decoration: none;
   color: #fff;
   font-size: 12px;

   :hover {
       color: #f00;
   }
`;

export const Profile = styled.img`
   width: 70px;
   height: 70px;

   border-radius: 50px;
`;

export const DivLogo = styled.div`
   
`;

export const DivCategories = styled.div`
   margin-left: 400px;

   display: flex;
   align-items: center;
`;

export const Logo = styled.img`
   
`;

export const DivContent = styled.div `
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: row;

`;