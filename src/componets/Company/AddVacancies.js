import React, { useEffect, useState } from "react";
import axios from "axios";
import Vacancies from "./Vacancies";
import NotFound from "./NotFound";
export default function AddVacancies()
{
    var [status,setStatus]=useState();
    useEffect(()=>{
        axios.post("https://backend-testing-1rgv.onrender.com/company_dashboard_data",{
            email:window.localStorage.getItem("email")
          }).then((obj)=>{
            console.log(obj);
            if(obj.data.data==true)
            {
                setStatus(true);
          
            }
            else{
                setStatus(false);
            }
          })
         
    },[])
    
    return(<>
    {status==true?<Vacancies/>:<div style={{marginTop:"60px"}}><NotFound data="Please Enter Dashboard details first and then you are eligible to add Vacancies" /></div>}
    
    </>)
}