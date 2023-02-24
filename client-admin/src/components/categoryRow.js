import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/actions/categoryItemCreator";
import { deleteItems } from "../store/actions/itemActionCreator";
import ModalItem from "./ItemModal";

export default function CategoryRow({ el, index }) {
  console.log(el, "ini dari modal")
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteItems(el.id))
  }
  return (
    <tr className="menu-item" key={el.id}>
      <td>{index + 1}</td>
      <td><img style={{margin: '10px'}} src={el.imgUrl} alt=""/></td>
      <td>{el.question}</td>
      <td>{el.answer}</td>
      <td>{el.optionA}</td>
      <td>{el.optionB}</td>
      <td>{el.optionC}</td>
      <td>{el.optionD}</td>
      <td>{el.lvl}</td>
      <td><ModalItem menu={el}/> <Button style={{margin: 5}} variant="danger" onClick={deleteHandler}>
            Delete
          </Button></td>
    </tr>
  );
}
