/* eslint-disable react/prop-types */
export const Card = (props) => {
	return (
		<article className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

			<figure className='flex w-full justify-center items-center pr-10 xl:pr-12'>
				<img className='w-12 p-1' src={props.img} alt='react-svg' />

				<figcaption className='text-center w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>{props.titulo}</figcaption>
			</figure>

			{props.children}
		</article>
	);
};