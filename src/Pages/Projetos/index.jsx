import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { FloatButton } from '../../components/FloatButton';
import { AcessButton } from '../../components/AcessButton';

import Sorveteria from '../../assets/sorveteria.png';
import HelpDev from '../../assets/HelpDev.png';
import SeuFuturo from '../../assets/SeuFuturo.png';
import Perguntas from '../../assets/print-respostas.png';
import Blog from '../../assets/blog.png';
import FinAPI from '../../assets/Capturar-insomnia.png';


export const Projetos = () => {
	return (
		<figure>
			<Header />
			<section id='topo' className="section-light">

				<article className='w-full my-5'>
					<h2 className='text-3xl text-white font-semibold'>Projetos responsivos</h2>
					<p className="text-white text-xl">Projetos totalmente responsivos desenvolvidos com figureersas tecnologias fundamentais para o FrontEnd e tecnologias que estão em alta!</p>
				</article>

				<article className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
					<h3 className='text-2xl text-white font-semibold'>Sorveteria</h3>
					<p className="text-white text-lg">Projeto de SPA para uma Sorveteria aplicando o conceito de Mobile First.</p>
					<ul className='flex flex-col items-center'>
						<h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
						<li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
						<li type='disc' className='text-sm w-2/4 text-white'>React JSS</li>
						<li type='disc' className='text-sm w-2/4 text-white'>TailWind CSS</li>
						<li type='disc' className='text-sm w-4/4 text-white'>React-Router-Dom</li>
					</ul>

					<figure className='flex grow items-center justify-center w-full'>
						<img src={Sorveteria} className='w-3/4 xl:w-52' />
					</figure>

					<AcessButton url='https://lnkd.in/dVyH2A5n' />
				</article>

				<article className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
					<h3 className='text-2xl text-white font-semibold'>Projeto Help Dev</h3>
					<p className="text-white text-lg">Página dedicada a fornecer materiais de consulta para quem está estudando sobre desenvolvidos.</p>
					<ul className='flex flex-col items-center'>
						<h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
						<li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
						<li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
						<li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
					</ul>

					<figure className='flex grow items-center justify-center w-full'>
						<img src={HelpDev} className='w-3/4 xl:w-54' />
					</figure>

					<AcessButton url='https://mferreiradb.github.io/help-dev/' />
				</article>

				<article className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
					<h3 className='text-2xl text-white font-semibold'>Adivinhe Seu Futuro</h3>
					<p className="text-white text-lg">Página na qual você faz uma pergunta e uma resposta será dada de acordo.</p>
					<ul className='flex flex-col items-center'>
						<h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
						<li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
						<li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
						<li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
					</ul>

					<figure className='flex grow items-center justify-center w-full'>
						<img src={SeuFuturo} className='w-3/4 xl:w-54 xl:h-64' />
					</figure>

					<AcessButton url='https://mferreiradb.github.io/maratona-explorer1-rocketseat/' />
				</article>

				<article className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
					<h3 className='text-2xl text-white font-semibold'>Perguntas e Respostas</h3>
					<p className="text-white text-lg">Projeto fullstack com backend em Node.Js + Mysql e frontend utilizando Embedded Javascript + Bootstrap. Esta é uma plataforma na qual é possível realizar perguntas anônimas e responder anonimamente a perguntas já feitas.</p>
					<ul className='flex flex-col items-center'>
						<h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
						<li type='disc' className='text-sm w-2/4 text-white'>Javascript</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Embadded JS</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Bootstrap</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Node.Js</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Sequelize</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Mysql</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Express</li>
					</ul>

					<figure className='flex grow items-center justify-center w-full'>
						<img src={Perguntas} className='w-3/4 xl:w-52' />
					</figure>

					<AcessButton url='https://www.linkedin.com/posts/mferreiradb_nodejs-mysql-javascript-activity-6999571102158991360-4aMx?utm_source=share&utm_medium=member_desktop' />

					<p className="text-white text-md italic">Este projeto não está online devido envolver backend, porém ao clicar em Acessar, você será redirecionado(a) para a minha publicação feita no Linkedin.</p>
				</article>

				<article className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
					<h3 className='text-2xl text-white font-semibold'>Blog</h3>
					<p className="text-white text-lg">Projeto fullstack com backend em Node.Js + Mysql e frontend utilizando Embedded Javascript + Bootstrap. Este é um blog, no qual podemos criar um usuário e este usuário pode criar artigos, categorias, fazer filtragens e editar esses artigos e categorias.</p>
					<ul className='flex flex-col items-center'>
						<h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
						<li type='disc' className='text-sm w-2/4 text-white'>Javascript</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Embadded JS</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Bootstrap</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Node.Js</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Sequelize</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Mysql</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Express</li>
						<li type='disc' className='text-sm w-3/4 text-white'>Express Session</li>
					</ul>

					<figure className='flex grow items-center justify-center w-full'>
						<img src={Blog} className='w-3/4 xl:w-54 xl:h-64'  />
					</figure>

					<AcessButton url='https://www.linkedin.com/posts/mferreiradb_javascript-css-mysql-activity-7010024301546352640-EtU2?utm_source=share&utm_medium=member_desktop' />

					<p className="text-white text-md italic">Este projeto não está online devido envolver backend, porém ao clicar em Acessar, você será redirecionado(a) para a minha publicação feita no Linkedin.</p>
				</article>

				<article className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
					<h3 className='text-2xl text-white font-semibold'>FinAPI</h3>
					<p className="text-white text-lg">Projeto backend Rest com Node.Js. Esta é uma API REST de um gerenciador Financeiro com dados em memória.</p>
					<ul className='flex flex-col items-center justify-center'>
						<h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
						<li type='disc' className='text-sm w-2/4 text-white'>Javascript</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Node.Js</li>
						<li type='disc' className='text-sm w-2/4 text-white'>Express</li>
					</ul>

					<figure className='flex grow items-center justify-center w-full'>
						<img src={FinAPI} className='w-3/4 xl:w-54 xl:h-64' />
					</figure>

					<AcessButton url='https://www.linkedin.com/posts/mferreiradb_javascript-produtividade-backend-activity-7015476198700924928-VVZy?utm_source=share&utm_medium=member_desktop' />

					<p className="text-white text-md italic">Este projeto não está online devido envolver backend, porém ao clicar em Acessar, você será redirecionado(a) para a minha publicação feita no Linkedin.</p>
				</article>

			</section>

			<FloatButton />

			<Footer />
		</figure>
	);
};