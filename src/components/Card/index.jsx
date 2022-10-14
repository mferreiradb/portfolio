/* eslint-disable react/prop-types */
const Card = (props) => {
	return (
		<div className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

			<div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
				<img className='w-12 p-1' src={props.img} alt='react-svg' />

				<h3 className='text-center w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>{props.titulo}</h3>
			</div>
			{props.children}
		</div>
	);
};

export default Card;