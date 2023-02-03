import Menu from "../components/learningRow";
import ItemModal from "../components/ItemModal"
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../store/actions/itemActionCreator";

export default function MenuPage() {

  // const item = useSelector((state) => {
  //   console.log(state, "ini state 2")
  //   // console.log(state.item.item.data, "INI STATEEEEEE")
  //   const itemState = state.item.item
  //   return itemState
  // })

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('use effect')
  //   dispatch(fetchItem())
  // }, [])

  // console.log("test")

  return (
    <body>
      <div className="container">
        <h1>Guessing Game Mode List Question</h1>
      <ItemModal/>
      <Table bordered hover size="sm" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Answer</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
          <Menu/>
      </tbody>
    </Table>
      </div>
    </body>
  );
}
