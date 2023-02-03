import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { AddItem, editItem } from "../store/actions/itemActionCreator";

export default function ModalItem(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch()
  // console.log(props)

  console.log(props, "propssssssssssssssssss")
  const [itemForm, setItemForm] = useState({
    name: props.menu? props.menu.name : "",
    description: props.menu? props.menu.description : "",
    price:props.menu? props.menu.price : "",
    imgUrl: props.menu? props.menu.imgUrl : "",
    categoryId: props.menu? props.menu.Category.id : "",
    ingredient1: props.menu? props.menu.Ingredients[0].name : "",
    ingredient2: props.menu? props.menu.Ingredients[1].name : "",
    ingredient3: props.menu? props.menu.Ingredients[2].name : ""
  })

  const changeHandler = (e) => {
    // console.log(itemForm)
    const { name, value } = e.target;
    const obj = {
      ...itemForm,
      [name]: value,
    };
    setItemForm(obj);
  };

  const submitHandler = (e) => {
    console.log(itemForm, "INI FORM YG UDH DI SUBMIT GAES")
    e.preventDefault();
    if(props.menu){
      dispatch(editItem(itemForm, props.menu.id))
    } else {
      dispatch(AddItem(itemForm))
    }
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       {props.menu? "Edit Menu" : "Add New Menu"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.menu? "Edit Menu" : "Add New Menu"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={changeHandler}
                defaultValue={props.menu? props.menu.name : itemForm.name}
                name="name"
                type="text"
                placeholder="Pasta Carbonara"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
              onChange={changeHandler}
              defaultValue={props.menu? props.menu.description : itemForm.description}
              name="description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Number"
                onChange={changeHandler}
                defaultValue={props.menu? props.menu.price : itemForm.price}
                name="price"
                placeholder="Pasta Carbonara"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
              onChange={changeHandler}
              defaultValue={props.menu? props.menu.imgUrl: itemForm.imgUrl}
              name="imgUrl"
                type="text"
                placeholder="Pasta Carbonara"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select onChange={changeHandler}
              name="categoryId" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Breakfast</option>
                <option value="2">Main Course</option>
                <option value="3">Drinks</option>
                <option value="4">Dessert</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient 1</Form.Label>
              <Form.Control
              onChange={changeHandler}
              defaultValue={props.menu? props.menu.Ingredients[0].name : itemForm.ingredient1}
              name="ingredient1"
                type="text"
                placeholder="Tomato"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient 2</Form.Label>
              <Form.Control
              onChange={changeHandler}
              defaultValue={props.menu? props.menu.Ingredients[1].name : itemForm.ingredient2}
              name="ingredient2"
                type="text"
                placeholder="Tomato"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient 3</Form.Label>
              <Form.Control
              onChange={changeHandler}
              defaultValue={props.menu? props.menu.Ingredients[2].name : itemForm.ingredient3}
              name="ingredient3"
                type="text"
                placeholder="Tomato"
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
