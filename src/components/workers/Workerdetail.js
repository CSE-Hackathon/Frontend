import React, { useEffect ,useState} from "react";
import './workerdetail.css'
import axios from "axios"
import vlogo from './vcart.svg'
import SideBar from "./../layout/SideBar"

const WorkerDetail = ({match})=>{
  const [worker,setWorker ] = useState({})
  const [show,setShow] = useState(false)

  

  const worker_id = match.params.id
  
  useEffect(async ()=>{
    try{

      const url =`https://codefury-hack.herokuapp.com/getALabourer?labourerId=${worker_id}`
      const res = await axios.get(url)
      console.log(res.data)
      setWorker(res.data)
      setShow(true)
    }catch(err){
      console.error(err)
    }
  },[])

  const invite =async (no) => {
    const name  = localStorage.getItem("name")
    const body = `your have been invited by ${name} has to follow up more https://generic-codefury.herokuapp.com/`
    const sms_url = `https://hackout-helpline.herokuapp.com/sendsms?body=${body}&number=${no}`
    const response  = await axios.get(sms_url)
    console.log(response.data)
  }

  return (
    <div className="outer">
     <SideBar/>
    <div className="mainArea">
        <div className="vlogo"><img src={vlogo}  alt="vlogo" /></div>
        <div className="orderDetailCard">{show ?  <div className="cd">
        <div><h1 className="tt">Name : {worker.name}</h1></div>
        <div><h1 className="tt">Age : {worker.age}</h1></div>
        <div><h1 className="tt">Gender : {worker.gender}</h1></div>
        <div><h1 className="tt">Phone Number: {worker.phone}</h1></div>
    <div onClick ={()=> invite(worker.phone)} className="dispatchBtn"><button>Invite</button></div> 
  </div>
        : <h1>Fetching</h1>}
         
        </div>
      
    </div>
    </div>
  );

}

export default WorkerDetail;