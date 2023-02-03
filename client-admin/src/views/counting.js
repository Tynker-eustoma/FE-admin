import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCategory from "../components/categoryModal";

import { fetchCategory } from "../store/actions/categoryItemCreator";
import CategoryRow from "../components/categoryRow"

export default function Category() {
  const category = useSelector((state) => {
    console.log(state, "INI STATEEEEEE");
    const categoryState = state.category.category;
    return categoryState;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect jalan");
    dispatch(fetchCategory());
  }, []);

  return (
    <div className="container">
      <h1>Counting Game Mode List Question</h1>
      <ModalCategory/>
      <Table bordered hover size="sm" style={{marginTop: "20px"}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Image Question</th>
            <th>Answer</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {category.map((el, index) => (
            <CategoryRow el={el} index={index} key={category.id}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
