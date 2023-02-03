import router from "./router";
import store from "./store";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
