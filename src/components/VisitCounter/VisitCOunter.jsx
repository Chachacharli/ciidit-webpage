import React, {useEffect, useState} from "react";

//https://api.countapi.xyz/update/rlucioporto/webpage/?amount=1

const VisitCounter = () =>{
    const [visits, setVisits] = useState(0)

    useEffect(()=>{
        fetch('https://api.countapi.xyz/info/rlucioporto/webpage')
        .then(res => res.json())
        .then(res =>setVisits(res.value))
    
    },[])    
    return(
      <div style={{background: '#192a56'}} className="min-vh-100 d-flex align-items-center justify-content-center">
         <div className="text-light d-flex gap-4 flex-column">
            <div className="d-flex gap-2"><p className="fs-2">This page was viewed</p></div>
            <div className="d-flex align-items-center justify-content-center"> <p id='count' className="fs-1"> {visits} </p></div>
            <div className="d-flex align-items-center justify-content-center"> <p className="fs-2"> times</p></div>
         </div> 
      </div>
    )
  }

export default VisitCounter;