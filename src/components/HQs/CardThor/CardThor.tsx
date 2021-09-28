import { Div, DivInside, H3, P, Button } from "./styles/styles";
import background from '../../../Assets/images/thor-hq.jpg'
import React, { useState } from 'react';
import "./styles/Modal.scss";
import { BsStar } from 'react-icons/Bs'
import { FiXCircle } from 'react-icons/Fi'




const CardThorHq = () => {
    
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
                <H3>Thor: Vikings</H3>
                <P>Garth Ennis e sua violência atacam novamente na HQ
                  que leva a violência das histórias de Thor ao limite!
                  Na Minissérie de 2003 vemos vikings de um passado
                  distante voltando a vida.
                </P>
                <Button onClick={toggleModal}>Ver detalhes</Button>
            </DivInside>
        </Div>
        
        { modal && (
             <div className="modal">
             <div onClick={toggleModal} className="overlay"></div>
             <div className="modal-content">
               <div className="about">
               <h2>Thor</h2>
               <p >
                  Garth Ennis e sua violência atacam novamente na HQ
                  que leva a violência das histórias de Thor ao limite!
                  Na Minissérie de 2003 vemos vikings de um passado
                  distante voltando a vida.

                  <div className="where-buy">
                    <p>Disponivel para compra:</p>
                    <img src="../../../Assets/images/amazon.jpg" alt="Amazon" />
                    <img src="../../../Assets/images/americanas.png" alt="Americanas" />
                  </div>

                  <h3 className="rating">Crítica</h3> <br />
                  <button type="submit"><BsStar /><BsStar /><BsStar /><BsStar /></button>
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

export default CardThorHq