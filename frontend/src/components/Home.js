import { Outlet } from 'react-router-dom'

export default function Home() {
	return <div className="tertiary text-center px-5 py-3">             
		<Outlet />
	</div>
}