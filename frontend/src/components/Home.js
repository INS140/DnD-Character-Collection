// Header with app name
// About Us with app summary
// Buttons for login/sign up
import React, {useState} from "react"
import About from "./about/About"
import Header from "./header/Header"

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
		<About />
 	)
 }