import React from "react";



function Page () {
    
   
    const searchFood=(evt)=> {
        if (evt.key === "Enter"){
            
        }
    }
    return (
        <div>
            <h1> To Do List  </h1>
        <div className="search">
                <input type="search" className="search" placeholder="Search todo list" onChange={e=>setSearch(e.target.value)} onKeyPress={searchFood} /> 
         </div> 
        </div>
    )
}


export default Page

// onChange={e=>setSearch(e.target.value)} onKeyPress={"//api serach"} 