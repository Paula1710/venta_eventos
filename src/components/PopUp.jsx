import React, {useState} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/popUp.css';



const PopUp = ({ isOpen,onComprar, toggleModal, evento}) => {

const [entradas, setEntradas] = useState(0);


const handleInputChange = (e) => {
  const nuevoValor = parseInt(e.target.value, 10);
  if (!isNaN(nuevoValor) && nuevoValor >= 0) {
    setEntradas(nuevoValor);
  }
}

const handleComprar = () => {
  onComprar(entradas);
  
}
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader className="popUp-titulo" clastoggle={toggleModal}> Compra de entradas para el evento: {evento && evento.nombre}</ModalHeader>
        <ModalBody className="popUp-body">  
          Indique cuantas entradas quiere comprar:
          <Input type="number" id="entradas" value={entradas} onChange={handleInputChange} />
        </ModalBody>
        <ModalFooter>
          <Button className="popUp-button" onClick={() => {handleComprar();}}>
            Comprar
          </Button>
          <Button className="popUp-button" onClick={() => { toggleModal();}}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopUp;

