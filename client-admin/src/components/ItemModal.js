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
    imgUrl: "",
    answer: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    lvl: "",
    question: "",
    CategoryId: ""
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
      // dispatch(editItem(itemForm, props.menu.id))
    } else {
      dispatch(AddItem(itemForm))
    }
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       {props.menu? "Edit Question" : "Add New Question"}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.menu? "Edit Question" : "Add New Question"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image Url</Form.Label>
              <Form.Control
                onChange={changeHandler}
                name="imgUrl"
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer</Form.Label>
              <Form.Control as="textarea" rows={3}
              onChange={changeHandler}
              defaultValue={props.menu? props.menu.description : itemForm.description}
              name="answer"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>optionA</Form.Label>
              <Form.Control
                type="textr"
                onChange={changeHandler}
                name="optionA"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>option B</Form.Label>
              <Form.Control
              onChange={changeHandler}
              name="optionB"
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>option C</Form.Label>
              <Form.Control
              onChange={changeHandler}
              name="optionC"
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Option D</Form.Label>
              <Form.Control
              onChange={changeHandler}
              name="optionD"
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Level</Form.Label>
              <Form.Control
              onChange={changeHandler}
              name="lvl"
                type="number"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question</Form.Label>
              <Form.Control
              onChange={changeHandler}
              name="question"
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select onChange={changeHandler}
              name="CategoryId" aria-label="Default select example">
                <option>Open this select Game mode</option>
                <option value="1">Counting</option>
                <option value="2">Guessing</option>
                <option value="3">Learning</option>
              </Form.Select>
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
