import { useEffect } from "react";

function AllEvents() {
 useEffect(() => {
   
   const options2={
        method: "PATCH",
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        
    },
      body: JSON.stringify({"status":"success"}),
    }
    fetch('https://kickit-backendnew.onrender.com/KickIt/updateMatches', options2)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
      

 
},[])


return (
    <h1>Your have succesfully joined this </h1>
 )
}

export default AllEvents;
