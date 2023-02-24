import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/actions/categoryItemCreator";
import ModalItem from "./ItemModal";
import { deleteItems } from "../store/actions/itemActionCreator";
export default function CategoryRow({ el, index }) {
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteItems(el.id))
  }
  return (
    <tr className="menu-item">
      <td>{index+1}</td>
      <td>{el.question}</td>
      <td>{el.answer}</td>
      <td>{el.lvl}</td>
      <td><ModalItem menu={el}/> <Button style={{margin: 5}} variant="danger" onClick={deleteHandler}>
            Delete
          </Button></td>
    </tr>
  );
}
