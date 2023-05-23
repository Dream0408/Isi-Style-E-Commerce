import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import { useNavigate } from "react-router";
import { registerUser } from "../slices/authSlice";
import "./register.scss";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/dashboard")
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form__regis">
      <div className="Icon__logo">
          <span>
            <i class="ri-shirt-fill"></i>
          </span>
        </div>
        <h3>REGISTER</h3>
        <input className="input__regis"
          type="text"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input className="input__regis"
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input className="input__regis"
          type="password"
          name="password"
          autoComplete="on"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="input__button">
          {auth.registerStatus === "pending" ? "Submitting" : "REGISTER"}
        </button>

        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}

      </Form>
    </div>
  );
};

export default Register;
