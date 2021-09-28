import { Div, DivInside, H3, P, Button } from "./styles/styles";
import background from '../../../Assets/images/surfista.jpg'
import React, { useState } from 'react';
import "./styles/Modal.scss";
import { BsStar } from 'react-icons/Bs'
import { FiXCircle } from 'react-icons/Fi'




const CardSurfist = () => {
    
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
                <H3>Surfista Prateado: Parábola</H3>
                <P>O unico oponente do Devorador de Mundos 
                  é o Herói que ele aprisionou na Terra: o 
                  Surfista Prateado, Galactus jurou não 
                  consumir o planeta, mas e se, em vez disso, 
                  ele transformar a civilização em seus 
                  adoradores ?
                </P>
                <Button onClick={toggleModal}>Ver detalhes</Button>
            </DivInside>
        </Div>
        
        { modal && (
             <div className="modal">
             <div onClick={toggleModal} className="overlay"></div>
             <div className="modal-content">
               <div className="about">
               <h2>Surfista Prateado: Parábola</h2>
               <p >
                  O unico oponente do Devorador de Mundos 
                  é o Herói que ele aprisionou na Terra: o 
                  Surfista Prateado, Galactus jurou não 
                  consumir o planeta, mas e se, em vez disso, 
                  ele transformar a civilização em seus 
                  adoradores ?
                </p>  
                 <div className="where-buy">
                    <p>Disponivel para compra:</p>
                    <img src="../../../Assets/images/amazon.jpg" alt="Amazon" />
                    <img src="../../../Assets/images/americanas.png" alt="Americanas" />
                  </div>
                    <h3 className="rating">Avaliação dos Fãs:</h3> <br />
                    <button type="submit"><BsStar /><BsStar /><BsStar /><BsStar /></button>
               
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

export default CardSurfist