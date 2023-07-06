import logo from "./images/white_dragon.png"
import char1 from "./images/barbarian_portrait.png"
import char2 from "./images/dragon_portrait.png"
import char3 from "./images/archer_portrait.png"
import char4 from "./images/druid_portrait.png"
import char5 from "./images/elf_portrait.png"
import char6 from "./images/knight_portrait.png"
import char7 from "./images/orc_portrait.png"
import char8 from "./images/ranger_portrait.png"
import char9 from "./images/rogue_portrait.png"
import { Link } from "react-router-dom"

export default function Home() {
	return <div className="tertiary text-center py-3">
	<div className = "container">               
		<div className="card-body">
			<h1><img src={logo} alt="logo" style={{width: "100px"}}/>
{"  "}Character Collections</h1>
		</div>
	</div>
	<div className="container">
		<div className="row">

			<div className="col">
				{/* <About /> */}
				<br></br><br></br><br></br><br></br><br></br>
				<h4>Engage with the latest character evolution</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc sapien, elementum eu diam eu, interdum tempor ante. Praesent nec eros dictum lacus varius euismod. Curabitur vitae vehicula lacus. Morbi ut ligula quam. Morbi velit arcu, suscipit eget libero ut, eleifend tristique orci. Vivamus eu nisl sed metus scelerisque malesuada in id urna. Donec a vulputate mauris. Aliquam dignissim, nisl non malesuada gravida, libero eros sollicitudin mi, vel pellentesque felis nulla ac mi. Pellentesque gravida libero ex, et feugiat dui interdum vel. Ut accumsan enim mollis, congue dui eget, auctor nisl. Vestibulum pellentesque a turpis nec sollicitudin. Sed bibendum diam porttitor, ultricies tortor non, auctor leo. Proin lectus purus, feugiat sed orci et, iaculis posuere nisl.</p>

				<button type="button" class="btn btn-outline-light"><Link  to="/about">About</Link>
</button>
			</div>
			<div className="col">
				<div className="container">
					<div className="row">
						<div className="col"><img src={char1} alt="character" style={{width:"100%"}}/></div>
						<div className="col"><img src={char2} alt="character" style={{width:"100%"}}/></div>
						<div className="col"><img src={char3} alt="character" style={{width:"100%"}}/></div>
					</div>
					<div className="row">
						<div className="col"><img src={char4} alt="character" style={{width:"100%"}}/></div>
						<div className="col"><img src={char5} alt="character" style={{width:"100%"}}/></div>
						<div className="col"><img src={char6} alt="character" style={{width:"100%"}}/></div>
					</div>
					<div className="row">
						<div className="col"><img src={char7} alt="character" style={{width:"100%"}}/></div>
						<div className="col"><img src={char8} alt="character" style={{width:"100%"}}/></div>
						<div className="col"><img src={char9} alt="character" style={{width:"100%"}}/></div>							</div>
					</div>
			</div>
		</div>
	</div>
	
</div>
 }