import SideBar from './sidebar';

export default function RootDashboard({children} : {children: React.ReactNode}){
	
	return(
		<div className="flex flex-row h-screen">
			<SideBar />
			<div className="h-full w-full" >{children}</div>
		</div>
)}