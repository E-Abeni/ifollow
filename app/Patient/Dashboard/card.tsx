import Table from './page';

export default function Card({title} : {
	title: String,
}){
	return (
		<div className="flex flex-col h-fit m-4 mx-10 w-4/12 h-5/12/4 border-solid border-2 rounded-2xl border-black p-2 bg-gray-200">
			<h1 className="bg-gray-200"> {title} </h1>
			<div className="bg-white p-2 rounded-3xl h-96 w-full"> <Table /> </div>
		</div>
	);
}