import { NavLink, Link } from "react-router-dom" 

export default function Navbar() {
    const getClassName = ({ isActive }) => {
        return `nav-link text-light px-3 ${isActive ? 'primary active' : ''}`
    }

    return (
        <div className="secondary">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src = "https://www.nicepng.com/png/detail/14-147008_d-d-5th-edition-logo-latest-dd-logo.png"
                            alt="logo"
                            className="logo"
                        />
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" data-bs-theme="dark" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-borders">
                            <li className="nav-item text-center">
                                <NavLink className={getClassName} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className={getClassName} to="/characters">Characters</NavLink>
                            </li>
                        </ul>
                    <div className="d-flex justify-content-sm-around gap-3">
                      <Link className="text-light text-decoration-none" to="/login">
                        <button className="btn btn-md primary px-5">Login</button>
                      </Link>
                      <Link className="text-decoration-none" to='/signup'>
                        <button className="btn btn-md tertiary px-5 text-light">Signup</button>
                      </Link>
                    </div>
                </div>
            </div>
        </nav>
  </div>
  )
}