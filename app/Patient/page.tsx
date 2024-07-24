import Card from './Dashboard/card';
import Table from './Dashboard/page';


export default function page(){
	return(
	<div className="flex flex-row flex-wrap h-fit">
		
		<Card title="My Doctors" Display = {Table}/>
		<Card title="TO-DO" Display = {Table}/>
		<Card title="New Messages" Display = {Table}/>
		<Card title="What to Read" Display = {Table}/>
		
		<Card title="My Doctors" Display = {Table}/>
		<Card title="TO-DO" Display = {Table}/>
		<Card title="New Messages" Display = {Table}/>
		<Card title="What to Read" Display = {Table}/>
	
	</div>
	)
}