import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import Button from './ui-kit/Button'
import { CurrentUser } from "./context/currentUser"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const { currentUser, setCurrentUser } = useContext(CurrentUser)

  const navigate = useNavigate()

  const getClassName = ({ isActive }) => {
    return `nav-link text-light px-3 ${isActive ? 'primary active' : ''}`
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('token')
    
    navigate('/')
  }

  return <div className="secondary">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* Will need to be updated to actual backend url */}
          <img src="http://localhost:5000/logo.png"
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
          <div className="d-flex justify-content-around gap-3">
          { !currentUser
                ? <>
                    <Link className="text-decoration-none" to="/login">
                        <Button className="btn btn-md primary px-5 text-light">Login</Button>
                    </Link>
                    <Link className="text-decoration-none" to='/signup'>
                        <Button className="btn btn-md tertiary px-5 text-light">Signup</Button>
                    </Link>
                </>
                : <Button className="btn btn-md primary px-5 text-light" onClick={handleLogout}>Logout</Button>
          }
          </div>
        </div>
      </div>
    </nav>
  </div>

}