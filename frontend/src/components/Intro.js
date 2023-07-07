import { Link } from "react-router-dom"
import Button from "./ui-kit/Button"

export default function Intro() {
  const portraits = [
		'archer',
		'barbarian',
		'dragon',
		'druid',
		'elf',
		'knight',
		'orc',
		'ranger',
		'rogue'
	]

  return <>
    <div className="home-logo">
			<img
				className="logo"
				src="https://dnd-character-collection-backend.vercel.app/public/logo.png"
				alt="logo"
			/>
			<h1>Character Collections</h1>
			<hr />
		</div>
		<div className="home-text">
			<h4>Engage with the latest character evolution</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc sapien, elementum eu diam eu, interdum tempor ante. Praesent nec eros dictum lacus varius euismod. Curabitur vitae vehicula lacus. Morbi ut ligula quam. Morbi velit arcu, suscipit eget libero ut, eleifend tristique orci. Vivamus eu nisl sed metus scelerisque malesuada in id urna. Donec a vulputate mauris. Aliquam dignissim, nisl non malesuada gravida, libero eros sollicitudin mi, vel pellentesque felis nulla ac mi. Pellentesque gravida libero ex, et feugiat dui interdum vel. Ut accumsan enim mollis, congue dui eget, auctor nisl. Vestibulum pellentesque a turpis nec sollicitudin. Sed bibendum diam porttitor, ultricies tortor non, auctor leo. Proin lectus purus, feugiat sed orci et, iaculis posuere nisl.</p>
			<Link to="/about">
				<Button className="btn primary text-light">About</Button>
			</Link>
		</div>
		<div className="portraits">
			{portraits.map((portrait, i) => {
				return <img
					key={`${portrait}${i}`}
					src={`https://dnd-character-collection-backend.vercel.app/public/portraits/${portrait}.png`}
					alt={portrait}
				/>
			})}
		</div>
  </>
}