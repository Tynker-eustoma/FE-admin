import Menu from "../components/guessingRow";
import ItemModal from "../components/ItemModal"
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../store/actions/itemActionCreator";
export default function MenuPage() {

  const item = useSelector((state) => {
    console.log(state, "ini state 2")
    const questionState = state.item.item;
    const newState = questionState.filter(el => el.CategoryId === 2)
    console.log(newState, "includessssssssssssssssssss")
    return newState;
  })

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('use effect')
    dispatch(fetchItem())
  }, [])

  console.log("test")

  return (
    <body>
      <div className="container">
        <h1>Guessing Game Mode List Question</h1>
      <ItemModal/>
      <Table bordered hover size="sm" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Image Question</th>
          <th>Question</th>
          <th>Answer</th>
          <th>option A</th>
          <th>option B</th>
          <th>option C</th>
          <th>option D</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {item.map((menu, index) => (
          <Menu menu={menu} index={index} key={menu.id} />
        ))}
      </tbody>
    </Table>
      </div>
    </body>
  );
}
