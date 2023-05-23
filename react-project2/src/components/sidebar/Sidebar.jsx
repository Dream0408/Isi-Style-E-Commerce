import React from "react";
import { NavLink, Link } from "react-router-dom";
import navLinks from "../../assets/navLinks";
import "./sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../slices/authSlice";
import { toast } from "react-toastify";

const Sidebar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidebar__top">
          <h3>
            <span>
              <i class="ri-shirt-fill"></i>
            </span>{" "}
            ISI STYLE
          </h3>
        </div>
      </Link>
      <hr />
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* <Link to="/setting" style={{ textDecoration: "none" }}>
          <div className="sidebar__bottom-setting">
            <span>
              <i class="ri-settings-5-fill"></i>Setting
            </span>
          </div>
        </Link> */}
      
        <div className="sidebar__bottom">
          <div className="sidebar__bottom-logout">
            <Link to="/login">
            <span onClick={()=> {
              dispatch(logoutUser(null));
              toast.warning("Logged out !", {position: "bottom-left"})
            }}>
              <i class="ri-logout-box-r-line"></i>Logout
            </span> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
