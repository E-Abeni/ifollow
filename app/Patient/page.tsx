import Card from './Dashboard/card';
function MyDiv(){
	return <h1> No content to show! </h1>
}

export default function page(){
	return(
	<div className="flex flex-row flex-wrap h-fit">
		
		<Card title="My Doctors" Display = {MyDiv}/>
		<Card title="TO-DO" Display = {MyDiv}/>
		<Card title="New Messages" Display = {MyDiv}/>
		<Card title="What to Read" Display = {MyDiv}/>
		
		<Card title="My Doctors" Display = {MyDiv}/>
		<Card title="TO-DO" Display = {MyDiv}/>
		<Card title="New Messages" Display = {MyDiv}/>
		<Card title="What to Read" Display = {MyDiv}/>
	
	</div>
	)
}