import { Link } from 'react-router-dom';

export const Header = () => {

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<header className="fixed z-1 w-screen py-4 text-center border-b-2 bg-dark-blue-project border-blue-900">
			<nav className="space-x-6">
				<Link onClick={scrollToTop} to='/' className="font-semibold text-slate-100 lg:hover:text-blue-500 xl:hover:text-blue-500 2xl:hover:text-blue-500">Sobre</Link>

				{/* <Link onClick={scrollToTop} to='/projetos' className="font-semibold text-slate-100 lg:hover:text-blue-500 xl:hover:text-blue-500 2xl:hover:text-blue-500">Projetos</Link> */}

				<Link onClick={scrollToTop} to='/conhecimentos' className="font-semibold text-slate-100 lg:hover:text-blue-500 xl:hover:text-blue-500 2xl:hover:text-blue-500">Conhecimentos</Link>

				<a href='#contato' className="font-semibold text-slate-100 lg:hover:text-blue-500 xl:hover:text-blue-500 2xl:hover:text-blue-500">Contato</a>
			</nav>
		</header>
	);
};