import React,{useEffect,useState} from "react";
import './dashboard.css';
import dashLogo from './dashboard.svg';
import SideBar from "../layout/SideBar";

const Dashboardvendor = () => {


  const [result,setResult]  = useState([])
  const [show,setShow] = useState(false)
  const [name,setName] = useState("")
 
  useEffect( ()=>{
    const vendorName = localStorage.getItem("name");
    setName(vendorName)
    fetch('http://hackout.herokuapp.com/getAllOrders?vendorId=2334333',{
    }).then(
      res => res.json()
    ).then(data => {
    console.log(data) 
    setResult(data)
    setShow(true) })
    .catch(
      err=> console.error(err)
    )
    },[] )



  return (
    <div className="outer">
   <SideBar/>
    <div className="mainArea">
      <div className="welcomeHeadText">
        <h3>Welcome {name} !!</h3>
      </div>
      <div className="dashlogo"><img src={dashLogo} alt="dashLogo" /></div>
      <div className="cards">
        <div className="orderCard">
          <h3>Workers Near By </h3>
          <h3>20</h3>
        </div>
        <div className="orderCard">
          <h3>Available</h3>
          <h3>8</h3>
        </div>
        <div className="orderProcessed">
          <h3>Invited</h3>
          <h3>2</h3>
        
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboardvendor;
