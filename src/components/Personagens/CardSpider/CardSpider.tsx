import { Div, DivInside, H3, P, Button } from "./styles/styles";
import background from '../../../Assets/images/spider.jpg'
import React, { useState } from 'react';
import "./styles/Modal.scss";
import { BsStar } from 'react-icons/Bs'
import { FiXCircle } from 'react-icons/Fi'




const CardSpider = () => {
    
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

      
    
    return (
       <> 
       <Div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover' }}>
            <DivInside>
            <H3>Homem-Aranha</H3>
            <P>Após ser mordido por uma aranha radioativa,
            Peter Parker se torna o amigo da vizinhança,
            o Homem-Aranha
        </P>
        <Button onClick={toggleModal}>Ver detalhes</Button>
        </DivInside>
        </Div>
        
        { modal && (
             <div className="modal">
             <div onClick={toggleModal} className="overlay"></div>
             <div className="modal-content">
               <div className="about">
               <h2>Homem Aranha</h2>
               <h3>Aparições:</h3>
               <p >
               <br />
                 Vingadores, <br />
                 Vingadores - Era de Ultron, <br />
                 Thor - Ragnarok, <br />
                 Vingadores - Guerra Infinita, <br />
                 Vingadores - Ultimato. <br />

                 <h3 className="rating">Avaliação dos Fãs:</h3> <br />
                 <button type="submit"><BsStar /><BsStar /><BsStar /><BsStar /><BsStar /></button>
               </p>
               </div>
               <div className="img-modal">
                   <img src={background} alt="" />
               </div>
               <button className="close-modal" onClick={toggleModal}>
                <FiXCircle className="BiExit" />
               </button>
             </div>
           </div>
        )}
        
    </>
    );
}

export default CardSpider