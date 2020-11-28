import React, {useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import SideBar from "./../layout/SideBar"
import axios from "axios"

import './vorder.css'
import vlogo from './vcart.svg'


const WorkerList = ()=>{
  const [labourers,setLabourers]  = useState([])
  const [url,setUrl] = useState("https://codefury-hack.herokuapp.com/getAllLabourers")
  const [show,setShow] = useState(false)
  



  useEffect(async ()=>{
    try{

      const res  = await axios.get(url)
      console.log(res.data)
      setLabourers(res.data)
      setShow(true)
    }catch(err){
      console.error(err)
    }
    },[url] )

    const onclick = (i) => {
      if(i==1){
        setUrl("https://codefury-hack.herokuapp.com/getAllLabourers")
      }
      else if(i==2){
        setUrl("https://codefury-hack.herokuapp.com/getPlumbers")
      }
      else if(i==3){
        setUrl("https://codefury-hack.herokuapp.com/getCarpenters")
      }else if(i==4){
        setUrl("https://codefury-hack.herokuapp.com/getDailyWage")
      }else{
        setUrl("https://codefury-hack.herokuapp.com/getHomeWorkers") 
      }
    }

    const onclickCity = (city) => {
     setUrl(`https://codefury-hack.herokuapp.com/getWorkersInCity?city=${city}`)
    }


 

   
  return (
    <div className="outer">
      <SideBar/>
    <div className="mainArea">
        <div className="vlogo"><img src={vlogo}  alt="vlogo" /></div>

<div className="bb-box">
  <div className="dropdown">
    <button class="btn2 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Category
    </button>
  <div style={{background:'white', cursor:'pointer'}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a onClick = {() => onclick(1)} className="dropdown-item" href>All Labourers</a>
    <a onClick = {() => onclick(2)} className="dropdown-item" href>Plumbers</a>
    <a onClick = {() => onclick(3)}className="dropdown-item" href>Carpenters</a>
    <a onClick = {() => onclick(4)} className="dropdown-item" href>DailyWage Workers</a>
    <a onClick = {() => onclick(5)} className="dropdown-item" href>Home Workers</a>
  </div>

</div>

 <div className="dropdown">
    <button class="btn2 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Region
    </button>
  <div style={{background:'white', cursor:'pointer'}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a onClick = {() => onclickCity("Bangalore")} className="dropdown-item" href>Bangalore</a>
    <a onClick = {() => onclickCity("Chennai")} className="dropdown-item" href>Chennai</a>
    <a onClick = {() => onclickCity("Mumbai")} className="dropdown-item" href>Mumbai</a>
    <a onClick = {() => onclickCity("Delhi")} className="dropdown-item" href>Delhi</a>

  </div>
</div>  
</div>

<div className="orderCardBox">{ show && labourers.length > 0 ? labourers.map(item =>
    <div className="in" key ={item.workerId}>
    <div>Name : {item.name}</div>
    <div>Work : {item.work}</div>
    <div>Pay/Per Day : {item.perDaySalary}</div>
    <div>Place : {item.place}</div>
    <Link className="viewBtn" to={`/${item.workerId}`}>View</Link></div> ) : <h1>No Labourers Available....</h1>}</div>
    </div>
    </div>
  );

}


export default WorkerList


