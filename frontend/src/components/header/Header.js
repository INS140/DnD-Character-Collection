import React from "react"

export default function Header() {
    return (
        <div classNameName="header">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src = "https://wallpapers.com/images/featured-small/dragon-tbrh9smwrlaa1cr9.jpg"
                            alt="logo"
                            style={{
                                height: '50px',
                                width:'50px'
                            }}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-sm btn-primary mx-2"> Login </button>
                        <button className="btn btn-sm btn-success"> Signup </button>
                    </form>
                </div>
            </div>
        </nav>
  </div>
  )
}