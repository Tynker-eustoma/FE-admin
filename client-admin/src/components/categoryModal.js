import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { fetchItem } from "../store/actions/itemActionCreator";
import { addCategory, editCategory } from "../store/actions/categoryItemCreator";

export default function ModalCategory(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch()

  const [itemForm, setItemForm] = useState({
    name: '',
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const obj = {
      ...itemForm,
      [name]: value,
    };
    setItemForm(obj);
  };

  const submitHandler = (e) => {
    // console.log(itemForm, "INI FORM YG UDH DI SUBMIT GAES")
    e.preventDefault();
    if(props.el){
      dispatch(editCategory(itemForm, props.el.id))
    } else {
      dispatch(addCategory(itemForm))
    }
  }

  const editHandler = (e) => {
    // console.log(itemForm, "INI FORM YG UDH DI SUBMIT GAES")
    e.preventDefault();
    dispatch(editCategory(itemForm, props.el.id))
  }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      {props.el? "Edit Category" : "Add Category"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.el? "Edit Category" : "Add Category"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              onChange={changeHandler}
              defaultValue={props.el? props.el.name : itemForm.name}
              name="name"
                type="text"
                placeholder="Main Course"
                autoFocus
              />
            </Form.Group>
            <div className="text-center">
            <Button className="me-2" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
      Submit
    </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
