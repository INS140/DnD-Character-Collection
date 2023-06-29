import React from "react"

export default function About() {
  return (
   <div className="bdarkg- text-secondary">
                <hr></hr>
                <div className="card" style={{width: "100vw", height:"50vh", margin:"auto"}}>
                    <img src="https://as2.ftcdn.net/v2/jpg/01/60/79/13/1000_F_160791342_KO0lWq9xVzMiQ7VpThMQod5s5YR6W0cg.jpg" alt="Translucent green dice" style={{width:"70%" ,height:"40vh", margin:"auto"}}/>
                        <div className="card-body">
                            <hr />
                            <h5 className="card-title">About</h5>
                            <p className="card-text">Our vision is to develop a mighty tool tailored to the avid and new collectors of DND Characters, and to digitize many of the traditional DND components, such as character creation, stat and skills management, equipment inventory and notes. This tool has the potential to establish an online database with its fully implementation.</p>
                        </div>
                </div>
<button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#Signup">
  Signup
</button>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Login">
  Login
</button>
<div className="modal fade" id="Signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Signup</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Signup Form
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="Login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Login Form
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
        )
  }