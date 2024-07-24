"use client"
import {useState} from 'react'
import clsx from 'clsx'
import {Cinzel} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const cinzel = Cinzel({
		subsets: ['latin']
	}) 
	
function ParentDiv(){
	let content = [
		'Sign Up',
		'Add Your Doctor',
		'Follow Up'
	]
	
	
	const [status, setStatus] = useState(0);
	
	function hovered(){
		setStatus(status + 1);
	}
	function unhovered(){
		setStatus(0);
	}

	return(
		<main className="flex flex-row h-screen">
		<div className="flex flex-col p-7 bg-blue-900 content-center justify-between w-4/12"> 
			<h1 className = {clsx(
				`${cinzel.className} border-solid border-2 rounded-full text-5xl  h-25 italic font-mono text-center`, 
				{
					"bg-gray-300 p-5 text-black w-auto": status === 0,
					"bg-white p-5 text-black w-auto" : status !== 0
				})} onMouseEnter={hovered}
					onMouseLeave={unhovered}> I-Follow </h1>

			<ul className = {`${cinzel.className}flex flex-col justify-center`}>
				{content.map((element) => <li className="text-center text-2xl m-5 text-white"> {element} </li>)}
			</ul> 
			<Image 
				src = "/ethi_health.jpg"
				alt = "image"
				width = "1900"
				height = "800"
				className = "block w-auto rounded-2xl shadow-2xl my-10"
			/>
			
			
		</div>
		
		<div className="w-9/12 flex flex-col items-center justify-center bg-gray-200">
			
			<div className = {`${cinzel.className} bg-gray-300 flex flex-col p-10 rounded-3xl w-1/2 h-4/6 border-solid border-2 border-black`}>
				<label className="p-1 mx-4 my-1"> User Name </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " type = "text" placeholder="example@example.com"></input>
				<label className="p-1 mx-4 my-1 space-y-40"> Password </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " type = "password" placeholder="***********"></input>
				<Link className = "my-4 self-center bg-blue-900 rounded-md m-4 w-3/12 text-white p-2 text-md text-center" href = "Patient"><button className="" type = "button">Log in</button></Link>
				<div className="my-1 flex flex-row w-9/12 justify-around self-center text-blue-600"><a href="">Forget password?</a> <a href="">Sign Up</a></div>
			</div>
		</div>
		</main>
)}

export default function page(){
	return <ParentDiv />
}