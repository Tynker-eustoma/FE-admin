
import "../assets/table.css"
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

import { deleteItems } from "../store/actions/itemActionCreator";
import ModalItem from "./ItemModal";

function SmallExample({menu, index}) {
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteItems(menu.id))
  }
  return (
          <tr className="menu-item" key={menu.id}>
            <td>{index+1}</td>
            <td>{menu.name}</td>
            <td>{menu.price}</td>
            <td>1</td>
          </tr>
  );
}

export default SmallExample;
