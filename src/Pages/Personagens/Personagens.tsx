import React from 'react';
import background from '../../Assets/images/login.png';
import { Button } from '../Login/styles/styles';
import LogoHome from '../../Assets/images/logoHeader.png'
import Strange from '../../Assets/images/strange.png'
import Carousel from 'react-elastic-carousel'
import CardSpider from '../../components/Personagens/CardSpider/CardSpider'
import CardThanos from '../../components/Personagens/CardThanos/CardThanos'
import CardWanda from '../../components/Personagens/CardWanda/CardWanda'
import CardHulk from '../../components/Personagens/CardHulk/CardHulk'
import { DivBackground, Header, Items, List, Anchor, Exit, Profile, DivLogo, Logo, DivCategories, DivContent, } from './styles/styles'

const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 3},  
]

const Personagens: React.FC = () => {

  return (
   <DivBackground style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', }}>
     <Header>
          <DivLogo>
            <Logo src={ LogoHome } alt="Logo"></Logo>
          </DivLogo>
          <DivCategories>
          <List>
          <Items>
            <Anchor>Personagens</Anchor>
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
      <CardSpider />
      <CardWanda />
      <CardThanos />
      <CardHulk />
      </Carousel>
     </DivContent>
   </DivBackground>
  );
};

export default Personagens;