/* eslint-disable react/no-unescaped-entities */
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
import prisma from '../../assets/prisma.png';
import vue from '../../assets/vue.png';
import nuxt from '../../assets/nuxt.png';
import docker from '../../assets/docker.png';
import swagger from '../../assets/swagger-logo.png';
import mongo from '../../assets/mongo.png';
import sequelize from '../../assets/sequelize.svg';

export const Conhecimentos = () => {
	return (
		<>
			<Header />

			<section id='topo' className='section-light'>
				<article className='w-full my-5'>
					<h2 className='text-3xl text-white font-semibold'>Stack atual</h2>
					<p className="text-white text-xl">Tecnologias utilizadas nos projetos que estou envolvido atualmente</p>
				</article>

				<Card img={vue} titulo="Vuejs">
					<p className="text-white text-lg">
						Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.
					</p>
				</Card>

				<Card img={nuxt} titulo="Nuxtjs">
					<p className="text-white text-lg">
					Nuxt.js é um framework para aplicações web de código aberto baseado em Vue.js, Node.js, Webpack and Babel.js. O framework foi inspirado pelo Next.js que é um framework com propósito similar porém baseado em React.
					</p>
				</Card>

				<Card img={Tailwind} titulo='Tailwind CSS'>
					<p className="text-white text-lg">Biblioteca CSS com foco no conceito <b>Mobile First</b> que facilita na estilizaçãoe e responsividade através de classes.</p>
				</Card>

				<Card img={Node} titulo='Node.JS'>

					<p className="text-white text-lg">Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>

					<ul className='flex flex-col items-center space-y-1'>
						<h4 className='text-lg text-white font-semibold'>Conhecimentos</h4>
						<li type='disc' className='text-sm w-7/8 text-white'>ExpressJS</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Criação APIs REST</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Acesso e manipulação de Banco de Dados</li>
					</ul>
				</Card>

				<article className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

					<figure className='flex w-full justify-center items-center pr-10 xl:pr-12'>
						<img className='w-24' src={MYSQL} alt='react-svg' />

						<figcaption className='text-center md:pr-11 w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>MYSQL</figcaption>
					</figure>

					<p className="text-white text-lg">O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.</p>
				</article>

				<Card img={prisma} titulo='Prisma IO'>
					<p className="text-white text-lg">O Prisma é um ORM de última geração que consiste nas seguintes ferramentas:</p>
					<p className="text-white text-lg">	O Prisma Client pode ser usado em qualquer aplicativo Node.
						js ou aplicativo de back-end TypeScript (incluindo aplicativos sem servidor e microsserviços). Pode ser uma API REST, uma API GraphQL, uma API gRPC ou qualquer outra coisa que precise de um banco de dados.
					</p>
				</Card>

				<Card img={GIT} titulo='GIT'>

					<p className="text-white text-lg">Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>
				</Card>

				<Card img={TS} titulo='TypeScript'>

					<p className="text-white text-lg">TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
				</Card>

				<Card img={JS} titulo='JavaScript'>

					<p className="text-white text-lg">JavaScript é uma linguagem de programação interpretada, estruturada de scripts em alto nível, com tipagem dinâmica fraca e multiparadigma.</p>
				</Card>
			</section>

			<section className="section-dark">

				<article className='w-full my-5'>
					<h2 className='text-3xl text-white font-semibold'>Demais Conhecimentos</h2>
					<p className="text-white text-xl">Técnologias que já utilizei e possuo familiaridade para desenvolver meus projetos</p>
				</article>

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
				
				<Card img={React} titulo='React Native'>
					<p className="text-white text-lg">React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.</p>
					<ul className='flex flex-col items-center space-y-1'>
						<h4 className='text-lg text-white font-semibold'>Habilidades</h4>
						<li type='disc' className='text-sm w-7/8 text-white'>Exibição de imagens</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Componentização</li>
						<li type='disc' className='text-sm w-7/8 text-white'>Estilização</li>
					</ul>
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

				<Card img={docker} titulo='Docker'>
					<p className="text-white text-lg">Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.</p>
				</Card>

				<Card img={mongo} titulo='MongoDB'>
					<p className="text-white text-lg">
					MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas. 
					</p>
				</Card>

				<Card img={swagger} titulo='Swagger'>
					<p className="text-white text-lg">
						Swagger é um conjunto de ferramentas para desenvolvedores de API da SmartBear Software e uma especificação anterior na qual a especificação OpenAPI é baseada.
					</p>
				</Card>

				<Card titulo='Sequelize' img={sequelize}>
					<p className="text-white text-lg">
						Sequelize é um ORM Node.js fácil de usar e baseada em promises para Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, Snowflake, Oracle DB e Db2 para IBM i. Possui suporte a transações sólidas, relações, carregamento rápido e lento, replicação de leitura e muito mais.
					</p>
				</Card>

				<Card img={HTML} titulo='HTML 5'>

					<p className="text-white text-lg">HTML5 é uma linguagem de marcação Web e é uma tecnologia chave da Internet. É a quinta versão da linguagem HTML, que passou a ser conhecida como HTML Semântico.</p>
				</Card>

				<Card img={CSS} titulo='CSS 3'>

					<p className="text-white text-lg">CSS3 é a terceira e mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web.</p>
				</Card>

			</section>

			<section className='section-light'>

				<article className='w-full my-5'>
					<h2 className='text-3xl text-white font-semibold'>Técnicas e Abordagens de Desenvolvimento de Software</h2>
				</article>

				<Card img={Plus} titulo='REST'>
					<p className="text-white text-lg">
						REST é um grupo de restrições de design dentro da arquitetura de software que geram sistemas distribuídos eficientes, confiáveis e escaláveis.
					</p>
				</Card>

				<Card img={Plus} titulo='MVC'>
					<p className="text-white text-lg">
						MVC é o acrônimo de Model-View-Controller, que é um padrão de projeto de software, ou padrão de arquitetura de software formulado na década de 1970, focado no reuso de código e a separação de conceitos em três camadas .
					</p>
				</Card>

				<Card img={Plus} titulo='POO'>
					<p className="text-white text-lg">
						Programação orientada a objetos é um paradigma de programação baseado no conceito de "objetos", que podem conter dados na forma de campos, também conhecidos como atributos, e códigos, na forma de procedimentos, também conhecidos como métodos.
					</p>
				</Card>

				<Card img={Plus} titulo='SOLID'>
					<p className="text-white text-lg">
						SOLID é um acrônimo para cinco postulados de design, destinados a facilitar a compreensão, o desenvolvimento e a manutenção de software.
					</p>
				</Card>

				<Card img={Plus} titulo='DDD	'>
					<p className="text-white text-lg">
					O DDD (Domain Driven Design) é uma modelagem de software cujo objetivo é facilitar a implementação de regras e processos complexos, onde visa a divisão de responsabilidades por camadas e é independente da tecnologia utilizada. Ou seja, o DDD é uma filosofia voltado para o domínio do negócio.
					</p>
				</Card>
			</section>

			<FloatButton />

			<Footer />
		</>
	);
};
