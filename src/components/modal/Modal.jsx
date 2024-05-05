import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button className="main-page-button" onClick={toggleModal}>
        Display Modal
      </button>
      {modal && (
        <div className="modal " onClick={toggleModal}>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>Modal</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              quae in iste itaque dignissimos repudiandae enim facere
              exercitationem repellat officiis fugiat molestias ipsa nihil
              veritatis voluptatibus dolorum sequi, explicabo et iusto fuga
              facilis recusandae! Fuga inventore explicabo ducimus aut atque
              itaque ipsa nemo qui dolorum reprehenderit! Temporibus repellendus
              asperiores, quisquam hic ab molestiae debitis cumque? Repellendus
              velit quaerat nam tenetur consectetur iusto illum animi vitae
              natus numquam saepe ratione iure nemo exercitationem facilis totam
              rerum sapiente eum dolores beatae quas, delectus nulla
              necessitatibus soluta. Commodi vel, omnis quidem in cumque impedit
              dolorem id quae voluptate doloribus iure! Dolorum, odio eos.
            </p>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
