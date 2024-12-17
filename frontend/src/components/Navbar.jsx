import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Product Store</Link>
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