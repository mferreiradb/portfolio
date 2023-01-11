import { FloatButton } from '../../components/FloatButton';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import React from '../../assets/react.svg';
import Tailwind from '../../assets/tailwind.png';
import MUI from '../../assets/MUI.png';
import JS from '../../assets/JS.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import MYSQL from '../../assets/mysql.png';
import GIT from '../../assets/git.png';
import Node from '../../assets/node.png';
import Bootstrap from '../../assets/bootstrap.png';
import TS from '../../assets/typescript.png';
import Plus from '../../assets/plus.png';

export const Conhecimentos = () => {
	return (
		<>
			<Header />

			<section id='topo' className="section-light">

				<article className='w-full my-5'>
					<h2 className='text-3xl text-white font-semibold'>Conhecimentos Mais Sólidos</h2>
					<p className="text-white text-xl">Técnologias que utilizo atualmente para desenvolver meus projetos</p>
				</article>

				<Card img={Node} titulo='Node.JS'>

					<p className="text-white text-lg">Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>

					<ul className='flex flex-col items-center space-y-1'>
						<h4 className='text-lg text-white font-semibold'>Conhecimentos</h4>
						<li type='disc' className='text-sm w-7/8 text-white'>ExpressJS</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Criação APIs REST</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Acesso e manipulação de Banco de Dados</li>
					</ul>
				</Card>

				<Card img={React} titulo='React JS'>
					<p className="text-white text-lg">O React é uma biblioteca JavaScript com foco em criar interfaces de usuário em páginas web.</p>
					<ul className='flex flex-col items-center space-y-1'>
						<h4 className='text-lg text-white font-semibold'>Habilidades</h4>
						<li type='disc' className='text-sm w-7/8 text-white'>Componentização</li>
						<li type='disc' className='text-sm w-7/8 text-white'>useState</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Rotas</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Props</li>
					</ul>
				</Card>
				{/* 
				<Card img={React} titulo='React Native'>
					<p className="text-white text-lg">React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.</p>
					<ul className='flex flex-col items-center space-y-1'>
						<h4 className='text-lg text-white font-semibold'>Habilidades</h4>
						<li type='disc' className='text-sm w-7/8 text-white'>Exibição de imagens</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Componentização</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Estilização</li>
					</ul>
				</Card> */}

				<Card img={Tailwind} titulo='Tailwind CSS'>
					<p className="text-white text-lg">Biblioteca CSS com foco no conceito <b>Mobile First</b> que facilita na estilizaçãoe e responsividade através de classes.</p>
				</Card>

				<Card img={MUI} titulo='Material UI'>
					<p className="text-white text-lg">
						Biblioteca que nos permite importar e usar diferentes componentes para criar uma interface de usuário em nossos aplicativos React. </p>
				</Card>
				<article className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

					<figure className='flex w-full justify-center items-center pr-10 xl:pr-12'>
						<img className='w-24' src={Bootstrap} alt='react-svg' />

						<figcaption className='text-center md:pr-11 w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>Bootstrap</figcaption>
					</figure>

					<p className="text-white text-lg">Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript.</p>
				</article>

				<Card img={GIT} titulo='GIT'>

					<p className="text-white text-lg">Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>
				</Card>

				<Card img={HTML} titulo='HTML 5'>

					<p className="text-white text-lg">HTML5 é uma linguagem de marcação Web e é uma tecnologia chave da Internet. É a quinta versão da linguagem HTML, que passou a ser conhecida como HTML Semântico.</p>
				</Card>

				<Card img={CSS} titulo='CSS 3'>

					<p className="text-white text-lg">CSS3 é a terceira e mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web.</p>
				</Card>

				<Card img={TS} titulo='TypeScript'>

					<p className="text-white text-lg">TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
				</Card>

				<Card img={JS} titulo='JavaScript'>

					<p className="text-white text-lg">JavaScript é uma linguagem de programação interpretada, estruturada de scripts em alto nível, com tipagem dinâmica fraca e multiparadigma.</p>
				</Card>

				<article className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

					<figure className='flex w-full justify-center items-center pr-10 xl:pr-12'>
						<img className='w-24' src={MYSQL} alt='react-svg' />

						<figcaption className='text-center md:pr-11 w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>MYSQL</figcaption>
					</figure>

					<p className="text-white text-lg">O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.</p>
				</article>
				
				<Card img={Plus} titulo='Adicionais'>

					<p className="text-white text-lg">Arquiteturas e tecnologias</p>

					<ul className='flex flex-col items-center space-y-1'>
						<li type='disc' className='text-sm w-7/8 text-white'>MVC</li>
						<li type='disc' className='text-sm w-7/8 text-white'>POO</li>
						<li type='disc' className='text-sm w-7/8 text-white'>REST</li>
						<li type='disc' className='text-sm w-7/8 text-white'>SOLID</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Sequelize</li>
					</ul>
				</Card>

			</section>

			<FloatButton />

			<Footer />
		</>
	);
};
