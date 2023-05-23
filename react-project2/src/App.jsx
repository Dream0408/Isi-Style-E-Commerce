import Layout from "./layout/Layout";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoginLayout from "./layout/LoginLayout";

const App = () => {
  return (
    <div>
      <Layout/>
      <div>
        <ToastContainer />
      </div>
    </div>
  );

};

export default App;
