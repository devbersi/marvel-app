import { Div, DivInside, H3, P, Button } from "./styles/styles";
import React, { useState } from "react";
import "./styles/Modal.scss";
import { BsStar } from "react-icons/Bs";
import { FiXCircle } from "react-icons/Fi";
import background from "../../../Assets/images/captainMarvel.jpg";

const CardMarvelCaptain = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Div
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
        }}
      >
        <DivInside>
          <H3>Capitã Marvel</H3>
          <P>
            Na história Original dos quadrinhos, o Hulk é um selvagem e poderoso
            alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido
            por raios gama enquanto salvava um adolescente durante o teste
            militar.
          </P>
          <Button onClick={toggleModal}>Ver detalhes</Button>
        </DivInside>
      </Div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="about">
              <h2>Capitã Marvel</h2>
              <h3>Aparições:</h3>
              <p>
                <br />
                Vingadores, <br />
                Vingadores - Era de Ultron, <br />
                Thor - Ragnarok, <br />
                Vingadores - Guerra Infinita, <br />
                Vingadores - Ultimato. <br />
                <h3 className="rating">Avaliação dos Fãs:</h3> <br />
                <button type="submit">
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </button>
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
};

export default CardMarvelCaptain;
