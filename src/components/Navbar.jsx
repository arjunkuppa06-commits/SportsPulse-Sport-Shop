import { Link } from "react-router-dom";

function Navbar(){
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
<h4 className="fw-bold text-success">SportPulse</h4>
<div className="ms-auto">
    <Link className="nav-link d-inline mx-2" to="/">Home</Link>
    <Link className="nav-link d-inline mx-2" to="/about">About</Link>
    <Link className="nav-link d-inline mx-2" to="/men">Men's Section</Link>
    <Link className="nav-link d-inline mx-2" to="/women">Women's Section</Link>
    <Link className="nav-link d-inline mx-2" to="/register">Register</Link>
</div>
    </nav>
)
}

export default Navbar