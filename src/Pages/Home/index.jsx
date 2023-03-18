import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatButton } from '../../components/FloatButton';

import MinhaFoto from '../../assets/minha-foto.png';

export const Home = () => {
	const dev = '<JuniorDeveloper />';

	return (
		<>
			<Header />
			<section id='topo' className="section-dark fundo-home lg:space-x-16 xl:lg:space-x-16 2xl:space-x-16 3xl:space-x-16">

				<article className="flex flex-col justify-center space-y-6 text-center my-28">
					<p className="text-slate-300 text-2xl lg:text-4xl">Olá! Tudo bem? Eu me chamo</p>
					<h1 className="text-white text-3xl font-bold lg:text-5xl">Mauricio Ferreira</h1>
					<code className="text-slate-400 text-2xl lg:text-4xl">{dev}</code>
				</article>


				<code className='text-white text-xl flex flex-col justify-center leading-normal lg:text-3xl xl:text-4xl'>
					Console.WriteLine(&quot;Hello world!&#34;);<br />
					console.log(&quot;Hello world!&#34;);<br />
					print(&quot;Hello world!&#34;)
				</code>

			</section>

			<section className="section-light-home">

				<figure>
					<img src={MinhaFoto} alt='minha-foto' />
				</figure>

				<article className='text-center flex flex-col items-center space-y-6 xl:w-1/2'>

					<h2 className='text-3xl text-white font-semibold'>Quem sou eu?</h2>

					<p className='text-white text-lg leading-relaxed'>Meu nome é Mauricio, sou natural de Parnaíba-PI. Sou desenvolvedor, tendo foco em Backend, porém também atuo com Frontend. Possuo experiência com Bancos de Dados SQL (MYSQL e Firebird), Javascript, Typescript, React Js e Vue Js 2 para desenvolvimento Frontend com diversas ferramentas adicionais e NodeJs para desenvolvimento Backend com diversas ferramentas adicionais. Finalizei meus estudos básicos na <a className='underline' target='_blank' href="http://devmedia.com/" rel="noreferrer">DevMedia</a>, e estou estudando conhecimentos mais avançados na <a className='underline' target='_blank' href="https://www.rocketseat.com.br/" rel="noreferrer">RocketSeat</a>, duas das maiores escolas de programação do mercado.</p>
				</article>
			</section>
			<FloatButton />
			<Footer />
		</>
	);
};
