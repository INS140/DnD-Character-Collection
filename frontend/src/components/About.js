import { Link } from "react-router-dom"
import Button from "./ui-kit/Button"

export default function About() {
  const contributors = [
    { github: 'annielam0623', name: 'Annie' },
    { github: 'INS140', name: 'Isaac' },
    { github: 'leslieportiz', name: 'Lorraine' },
    { github: 'MalWare', name: 'Mal' },
    { github: 'zanematero', name: 'Zane' }
  ]

  const portraits = [
		'archer',
		'barbarian',
		'dragon']

  return <>
    {/* <Link to="/">
      <Button className="btn primary text-light">Home</Button>
    </Link> */}
    <div>

<div class="container">
  <div class="row">
    <div class="col mt-5">    
      <h2>About the Game</h2>
      <p>Our vision is to develop a mighty tool tailored to the avid and new collectors of DND Characters, and to digitize many of the traditional DND components, such as character creation, stat and skills management, equipment inventory and notes. This tool has the potential to establish an online database with its fully implementation.</p>
    </div>
    <div class="col mt-5">
      <img src={"https://dnd-character-collection-backend.vercel.app/public/logo.png"} alt="logo" style={{width:"80%"}}/>
    </div>
    <div class="w-100"></div>
    <div class="col mt-5">
    <div className="portraits" style={{"grid-template-columns": "repeat(auto-fill, 30%", "grid-template-rows": "repeat(1, 1fr)"}}>
			{portraits.map((portrait, i) => {
				return <img
					key={`${portrait}${i}`}
					src={`https://dnd-character-collection-backend.vercel.app/public/portraits/${portrait}.png`}
					alt={portrait}
				/>
			})}
		</div>
    </div>
    <div class="col mt-5">
      <h2>Players</h2>
      <p>Discover a suite of free tools designed to simplify the management of your DND adventures. Easily handle your Stats, Skills, Spells, Magic Items, Armor, Weapons, and more elements directly from the API. Explore the wide range of these powerful tools available for you here, making your DND experience even more enjoyable.</p>
    </div>
    
  </div>
</div>
<div classname="row mt-5" style={{"padding-top": "3rem"}}>
<h2>About Us</h2>
      <p>We are a group of software developer UNLV students who have a passion for Dungeons & Dragons (DND) and believe that the experience of collecting DND characters can be significantly enhanced. In June 2023, we established DND Character Collection with the aim of realizing this vision. We are dedicated to improving the process of collecting and managing DND characters.
        To learn more about our vision and stay updated with our progress, we invite you to visit our blog. If you have any specific questions or require additional information, please feel free to ask. </p>
    
      <p>Thanks,</p>
      <p>The DND Character Collection Team</p>
      <p>Collaborators:</p>
      <p>
        {contributors.map((c, i, a) => {
          return <a
            key={`${c.name}${i}`}
            href={`https://github.com/${c.github}`}
            target="_blank"
          >
            {c.name}{i!==a.length-1 ? ', ' : ' '}
          </a>
        })}
      </p>
    </div> 
</div>


  
  </>
}

{/* <style>
  .gridPortrait .portraits{
    grid: repeat(none);
    }
</style> */}
