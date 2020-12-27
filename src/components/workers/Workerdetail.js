import React, { useEffect ,useState} from "react";
import './workerdetail.css'
import axios from "axios"
import vlogo from './vcart.svg'
import SideBar from "./../layout/SideBar"

const WorkerDetail = ({match})=>{
  const [worker,setWorker ] = useState({})
  const [show,setShow] = useState(false)
  const [msg, setmsg] = useState("")
  

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
 
  const invite =  (no) => {
    const name  = localStorage.getItem("name")
    const contractor_number = localStorage.getItem("Cnumber")
    const body = `you have been invited by ${name} has to follow up more contact this number :${contractor_number} `
    const sms_url = `http://ec878034b63a.ngrok.io/sendsms?body=${body}&number=${no}`
    const response  =  axios.get(sms_url)
    console.log(response.data)

    const call_url = `http://ec878034b63a.ngrok.io/makeACall?body=Hellow,${msg}&number=${no}&name=${name}`
  
    const response2 =  axios.get(call_url)
    console.log(response2.data)

    document.getElementById('ibtn').innerHTML = 'Invited'

    



  }

  const handleChange = (e) =>{
      setmsg(e.target.value);
      
  }

  return (
    <div className="outer">
     <SideBar/>
    <div className="mainArea">
        <div className="vlogo"><img src={vlogo}  alt="vlogo" /></div>
        <div className="orderDetailCard">{show ?  
        <div className="cd">
        <div><h1 className="tt">Name : {worker.name}</h1></div>
        <div><h1 className="tt">Age : {worker.age}</h1></div>
        <div><h1 className="tt">Gender : {worker.gender}</h1></div>
        <div><h1 className="tt">Phone Number: {worker.phone}</h1></div>
         <div className="msgbox">
    <input className="msg" onChange={e => handleChange(e)} placeholder="Enter the Message to be conveyed ... " type="text"  />

         </div>
    <div onClick ={()=> invite(worker.phone)} className="dispatchBtn"><button id="ibtn">Invite</button></div> 
   
  </div>
      
        : <h1>Fetching</h1>}
         
        </div>
      
    </div>
    </div>
  );

}

export default WorkerDetail;