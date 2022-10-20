import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Conhecimentos } from '../Pages/Conhecimentos';
import { Home } from '../Pages/Home';
import { Projetos } from '../Pages/Projetos';

export const Rotas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/projetos' element={<Projetos />} />
				<Route path='/conhecimentos' element={<Conhecimentos />} />
			</Routes>
		</BrowserRouter>
	);
};