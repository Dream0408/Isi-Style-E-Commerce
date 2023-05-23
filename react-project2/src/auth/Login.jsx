import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import { useNavigate } from "react-router";
import { LoginUser } from "../slices/authSlice";
import { Link } from "react-router-dom";
import "./register.scss";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/product");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(LoginUser(user));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form__regis">
        <div className="Icon__logo">
          <span>
            <i class="ri-shirt-fill"></i>
          </span>
        </div>
        <h3>LOGIN</h3>
        <input
          className="input__regis"
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="input__regis"
          type="password"
          name="password"
          autoComplete="on"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="input__button">
          {auth.loginStatus === "pending" ? "Submitting" : "LOGIN"}
        </button>

        <div className="link__regis">
          <h4>you have account ? {" "}</h4>
          <Link to={"/register"} className="register__now">Register Now</Link>
        </div>
        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </Form>
    </div>
  );
};

export default Login;
