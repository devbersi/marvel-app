import React from 'react';
import background from '../../Assets/images/login.png';
import { Button } from '../Login/styles/styles';
import LogoHome from '../../Assets/images/logoHeader.png'
import CardSurfist from '../../components/HQs/CardSurfist/CardSurfist';
import CardWolverine from '../../components/HQs/CardWolverine/CardWolverine';
import CardThorHq from '../../components/HQs/CardThor/CardThor';
import Strange from '../../Assets/images/strange.png'
import Carousel from 'react-elastic-carousel'
import { DivBackground, Header, Items, List, Anchor, Exit, Profile, DivLogo, Logo, DivCategories, DivContent, } from './styles/styles'

const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 3},  
]

const HQs: React.FC = () => {

  return (
   <DivBackground style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', }}>
     <Header>
          <DivLogo>
            <Logo src={ LogoHome } alt="Logo"></Logo>
          </DivLogo>
          <DivCategories>
          <List>
          <Items>
            <Anchor href="/personagens">Personagens</Anchor>
          </Items>
          <Items>
            <Anchor href="/filmes">Filmes</Anchor>
          </Items>
          <Items>
            <Anchor href="/HQs">HQ's</Anchor>
          </Items>
          <Items>
          <Profile src={Strange} alt="Profile"></Profile>
          <Exit href="/">Sair</Exit>
          </Items>
        </List>
        </DivCategories>
     </Header>
     <DivContent>
       <Carousel>
         <CardThorHq />
         <CardSurfist />
         <CardWolverine />
      </Carousel>
     </DivContent>
   </DivBackground>
  );
};

export default HQs;