import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/categoryItemCreator";
import CategoryRow from "../components/categoryRow"
import { fetchItem } from "../store/actions/itemActionCreator";
import ModalItem from "../components/ItemModal";

export default function Category() {
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
    <div className="container">
      <h1>Counting Game Mode List Question</h1>
      <ModalItem/>
      <Table bordered hover size="sm" style={{marginTop: "20px"}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Image Question</th>
            <th>question</th>
            <th>Answer</th>
            <th>Option A</th>
            <th>Option B</th>
            <th>Option C</th>
            <th>Option D</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {question.map((el, index) => (
            <CategoryRow el={el} index={index} key={el.id}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
