import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Job_Seeker_Login_Componenet from "./Login_component";
import Job_Seeker_Registration from "./Job_Seeker_registration";

export default function Login_Form_Controler() {
    var [selection,setSelection]=useState('login');
    const history = useNavigate();
    function transfer()
    {
        setSelection("registration");
    }
    function transfer1()
    {
        setSelection("login");
    }
    const handleChildData = (data) => {
        setSelection(data);
      };

    return (<>
    <div className="h-auto justify-center">
        {selection=="login"?<Job_Seeker_Login_Componenet select = {setSelection}/>:<Job_Seeker_Registration sendData={handleChildData} />}
        <div style={{marginTop:"10px",marginBottom:"20px"}}>
               {selection=="login"?<p className="text-center text-muted mt-5 mb-0">If you are new user? Register Here For <a
                         className="fw-bold text-body" onClick={transfer}><u
                            style={{fontFamily: "Poppins", color: "#007bff",fontWeight: "bold",cursor:"pointer"}}>Job Seeker</u></a>
                  
                </p>:<p className="text-center text-muted mt-5 mb-0">If You are Already User? Login  <a
                         className="fw-bold text-body" onClick={transfer1}><u
                            style={{fontFamily: "Poppins", color: "#007bff",fontWeight: "bold",cursor:"pointer"}}>Job Seeker</u></a>
                  
                </p>} 
                </div>
                </div>
    </>
    )
}