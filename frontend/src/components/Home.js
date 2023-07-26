export default function Home() {
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

  return <div className="home tertiary text-center px-5 py-3">
    <div className="home-logo">
			<img
				className="logo"
				src="https://dnd-character-collection-backend.vercel.app/public/logo.png"
				alt="logo"
			/>
			<h1>Character Collection</h1>
			<hr />
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
		<div className="home-text">
			<h4>About</h4>
			<p>Store all your D&D Characters all in one place</p>
		</div>
  </div>
}