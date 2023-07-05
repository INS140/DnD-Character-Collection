// Header with app name
// About Us with app summary
// Buttons for login/sign up
import React, {useState} from "react"
import About from "./about/About"
import Header from "./header/Header"
import './Homecss.css'; 
<<<<<<< Updated upstream

export default function Home() {
	return (
		<div className = "bg-text-secondary"
			// style = {
			// 	{
			// 		backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/60/79/13/1000_F_160791342_KO0lWq9xVzMiQ7VpThMQod5s5YR6W0cg.jpg')`,
			// 		backgroundSize: 'cover',
			// 		height: '100vh'
			// 	}
			 >
			<Header /> 
			<div className = "container">               
				<div className="card-body">
					<h1>DND Character Collections</h1>
				</div>
			</div >
		</div>


//     <div>
//       		<About />

//       <h1 className="logo">DND</h1>
//       <h1>Character Collection</h1>
// {/* insert image here */}
//     <div className="d-flex justify-content-center align-items-center mt-5">
//       <div className="card">
//         <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//         <li className="nav-item text-center">
//           <a className="nav-link active btl" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
//         </li>
//         <li className="nav-item text-center">
//           <a className="nav-link btr" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">Signup</a>
//         </li>
//         <li className="nav-item text-center">
//           <a className="nav-link btr" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-about" aria-selected="false">About</a>
//         </li>
//         </ul>

//         <div className="tab-content" id="pills-tabContent">
//           <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
//             <div className="form px-4 pt-5">
//               <input type="text" name="" className="form-control" placeholder="Email or Phone"/>
//               <input type="text" name="" className="form-control" placeholder="Password"/>
//               <button className="btn btn-dark btn-block">Login</button>
//             </div>
//           </div>

//           <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
//             <div className="form px-4">
//               <input type="text" name="" className="form-control" placeholder="Name"/>
//               <input type="text" name="" className="form-control" placeholder="Email"/>
//               <input type="text" name="" className="form-control" placeholder="Phone"/>
//               <input type="text" name="" className="form-control" placeholder="Password"/>
//               <button className="btn btn-dark btn-block">Signup</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
=======
export default function Home() {
	return (
		// <div className = "bg-text-secondary"
		// 	style = {
		// 		{
		// 			backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/60/79/13/1000_F_160791342_KO0lWq9xVzMiQ7VpThMQod5s5YR6W0cg.jpg')`,
		// 			backgroundSize: 'cover',
		// 			height: '100vh'
		// 		}
		// 	} >
		// 	<Header /> 
		// 	<div className = "container">               
		// 		<div className="card-body">
		// 			<h1>DND Character Collections</h1>
		// 		</div>
		// 	</div>
		// </div>

		// <About />
    <div>
      <h1>[insert logo here]</h1>
      <h1>Character Collection</h1>
{/* insert image here */}
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item text-center">
          <a className="nav-link active btl" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li className="nav-item text-center">
          <a className="nav-link btr" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">Signup</a>
        </li>
        <li className="nav-item text-center">
          <a className="nav-link btr" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-about" aria-selected="false">About</a>
        </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
            <div className="form px-4 pt-5">
              <input type="text" name="" className="form-control" placeholder="Email or Phone"/>
              <input type="text" name="" className="form-control" placeholder="Password"/>
              <button className="btn btn-dark btn-block">Login</button>
            </div>
          </div>

          <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
            <div className="form px-4">
              <input type="text" name="" className="form-control" placeholder="Name"/>
              <input type="text" name="" className="form-control" placeholder="Email"/>
              <input type="text" name="" className="form-control" placeholder="Phone"/>
              <input type="text" name="" className="form-control" placeholder="Password"/>
              <button className="btn btn-dark btn-block">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
>>>>>>> Stashed changes
 	)
 }