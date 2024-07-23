import './globals.css'

export const metadata = {
	title: "I-Follow"
}

export default function RootLayout(
	{children} : {
	children: React.ReactNode
	}) 
{
	let menus = ['Home', 'Login', 'About-Us'];
	
	return(
		<html>
			<body className="h-screen flex flex-col"> 
				<div className="h-10 boarder-solid boarder-2 bg-black">
					<ul className="flex flex-row">
						{menus.map((menu) => <li className="text-white p-2 mx-4"> {menu} </li>)}
					</ul>
				</div>
				{children} 
			</body>
		</html>
		) 
}