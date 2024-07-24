//import {sql, db} from '@vercel/postgres';
"use client"

export function fetchDoctors(){
	const doctors = [
		{
			img: "/prof.jpg",
			name: "Abebe",
			speciality: "Neurologist",
			bio: "Work hard"
		},
		{
			img: "/prof.jpg",
			name: "Abebe",
			speciality: "Neurologist",
			bio: "Work hard"
		},
		{
			img: "/prof.jpg",
			name: "Abebe",
			speciality: "Neurologist",
			bio: "Work hard"
		}
	];
	
	
	return doctors
}