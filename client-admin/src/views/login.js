import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/actions/userItemCreator";
export default function Login() {
  const navigate = useNavigate()
  const [itemForm, setItemForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    // console.log(itemForm)
    const { name, value } = e.target;
    const obj = {
      ...itemForm,
      [name]: value,
    };
    setItemForm(obj);
  };

  const submitHandler = (e) => {
    console.log(itemForm, "INI FORM YG UDH DI SUBMIT GAES");
    e.preventDefault();
    loginUser(itemForm).then(() => navigate("/"))
    
  };
  return (
    <>
      <div class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login Page</h2>

                    <form onSubmit={submitHandler}>
                      <div class="form-outline mb-2">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                          placeholder="Input your email here.."
                          onChange={changeHandler}
                          value={itemForm.email}
                          name="email"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div class="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          placeholder="Input your password here.."
                          onChange={changeHandler}
                          value={itemForm.password}
                          name="password"
                        />
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block btn-lg text-body"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
