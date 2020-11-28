import React,{Fragment} from "react";
import {Link} from "react-router-dom"
import "./sideBar.css"


const SideBar = ({history}) => {

    const handleLogout = () => {
        localStorage.clear();
        window.location.replace("/");
      };  

  return (
    <Fragment>
    <div className="leftBar">
      <div className="name"><h3>Generic</h3></div>
      <div className="dashboardBtn">
        <Link className="h" to='/dashboard'>
            Dashboard
          </Link>
      </div>
      <div className="ordersBtn">
      <Link className="h" to='/workers'>
            Workers
          </Link>
      </div>
      <div className="Signout">
      <button className="hbtn" onClick={handleLogout}>logout</button>
      </div>
      </div>
    </Fragment>
  );
}

export default SideBar;