import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{justifyContent:"center", display:"flex", flexDirection:"row", gap: "80px"}}>
        <Link to={"/"}><h3 >Product Store</h3></Link>
        <Link to={"/create"}>
            <button>
                Create
            </button>
        </Link>
        {/* <button>toggleColor</button> */}
    </div>
  )
}

export default Navbar