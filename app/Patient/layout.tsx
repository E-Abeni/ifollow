import SideBar from './sidebar';

export default function RootDashboard({children} : {children: React.ReactNode}){
	
	return(
		<div className="flex flex-row h-fit">
			<SideBar />
			<div className="h-fit w-full" >{children}</div>
		</div>
)}