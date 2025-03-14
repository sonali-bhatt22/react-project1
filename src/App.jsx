import React from "react";
import Routing from "./utils/Routing";
import { Link, useLocation } from "react-router-dom";

function App() {
  const{search, pathname} = useLocation()
  console.log(search)
  console.log(pathname)
  return (
    
    <div className="h-screen w-screen flex">
       {(pathname!='/' || search.length > 0 ) && (
        <Link to='/' className="text-white bg-black absolute  px-2 py-2 left-[17%] top-[3%]">Home</Link>
        
       )}
       
       <Routing/>
    </div>
  );
}

export default App;
