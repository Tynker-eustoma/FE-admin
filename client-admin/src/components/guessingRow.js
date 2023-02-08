
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
            <td><img style={{margin: '10px'}} src={menu.imgUrl} alt=""/></td>
            <td>{menu.question}</td>
            <td><img style={{margin: '10px'}} src={menu.answer} alt=""/></td>
            <td><img style={{margin: '10px'}} src={menu.optionA} alt=""/></td>
            <td><img style={{margin: '10px'}} src={menu.optionB} alt=""/></td>
            <td><img style={{margin: '10px'}} src={menu.optionC} alt=""/></td>
            <td><img style={{margin: '10px'}} src={menu.optionD} alt=""/></td>
            <td>{menu.lvl}</td>
            <td><ModalItem menu={menu}/> <Button style={{margin: 5}} variant="danger" onClick={deleteHandler}>
            Delete
          </Button></td>
          </tr>
  );
}

export default SmallExample;
