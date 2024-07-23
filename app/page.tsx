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
		<main className="flex flex-row h-full">
		<div className="w-1/2 flex flex-col p-7 bg-blue-900 content-center justify-center"> 
			<h1 className = {clsx(
				"border-solid border-2 rounded-full text-5xl  h-25 self-center justify-self-start italic font-mono text-center", 
				{
					"bg-black p-11 text-white w-auto": status !== 0,
					"bg-white p-11 text-black w-auto" : status === 0
				})} onMouseEnter={hovered}
					onMouseLeave={unhovered}> I-Follow </h1>

			<ul className = "flex flex-grow flex-col justify-center h-1/4">
				{content.map((element) => <li className={`${cinzel.className} font-mono text-center text-2xl m-5 text-white`}> {element} </li>)}
			</ul> 
			<div className = "h-1/4"></div>
			
		</div>
		
		<div className="w-1/2 gap-2 flex flex-col p-2 items-center justify-between bg-gray-200">
			<Image 
				src = "/ethi_health.jpg"
				alt = "image"
				width = "1700"
				height = "700"
				className = "block w-9/12 rounded-2xl shadow-2xl"
			/>
			<div className = "bg-gray-300 flex flex-col p-10 rounded-3xl w-9/12 h-auto border-solid border-2 border-black">
				<input className="p-1 border-solid border-black border-2 rounded-md m-4 " type = "text" placeholder="User Name"></input>
				<input className="p-1 border-solid border-black border-2 rounded-md m-4 " type = "password" placeholder="Password"></input>
				<Link className = "self-center bg-blue-900 rounded-md m-4 w-3/12 text-white p-2 text-md text-center" href = "Patient"><button className="" type = "button">Login</button></Link>
				<div className="flex flex-row w-9/12 justify-around self-center"><a href="">Forget password?</a> <a href="">Sign Up</a></div>
			</div>
		</div>
		</main>
)}

export default function page(){
	return <ParentDiv />
}