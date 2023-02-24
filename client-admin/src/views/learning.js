import Learning from "../components/learningRow";
import ItemModal from "../components/ItemModal"
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../store/actions/itemActionCreator";

export default function MenuPage() {

  const question = useSelector((state) => {
    // console.log(state, "INI STATEEEEEE");
    const questionState = state.item.item;
    const newState = questionState.filter(el => el.CategoryId === 1)
    console.log(newState, "includessssssssssssssssssss")
    return newState;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect jalan");
    dispatch(fetchItem());
  }, []);

  return (
    <body>
      <div className="container">
        <h1>Learning Game Mode List Question</h1>
      <ItemModal/>
      <Table bordered hover size="sm" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Qestion</th>
          <th>Answer</th>
          <th>Level</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {question.map((el, index) => (
            <Learning el={el} index={index} key={el.id}/>
          ))}
      </tbody>
    </Table>
      </div>
    </body>
  );
}
