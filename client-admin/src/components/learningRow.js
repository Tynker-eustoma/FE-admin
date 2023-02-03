import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/actions/categoryItemCreator";
import ModalCategory from "./categoryModal";

export default function CategoryRow({ el, index }) {
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteCategory(el.id))
  }
  return (
    <tr className="menu-item">
      <td>1</td>
      <td>this is a cow</td>
      <td>1</td>
    </tr>
  );
}
