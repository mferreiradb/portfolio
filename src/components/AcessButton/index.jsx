/* eslint-disable react/prop-types */
const AcessButton = ({url}) => {
	return (
		<a className="text-white hover:bg-dark-blue-project text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href={url} target='_blank' rel="noreferrer">Acessar</a>
	);
};
export default AcessButton;