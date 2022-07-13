import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import "./index.css"

function Loader() {
  return (
    <div className="preloader">
         <CircleLoader
          size={50}
          color={"#64ffda"}
    
          speedMultiplier={1.5}
        />
    </div>
  )
}

export default Loader