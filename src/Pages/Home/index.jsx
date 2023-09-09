import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatButton } from '../../components/FloatButton';

import MinhaFoto from '../../assets/minha-foto.png';

export const Home = () => {
	const dev = '<FullStackDeveloper />';

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

					<p className='text-white text-lg leading-relaxed'>Meu nome é Mauricio, sou natural de Parnaíba-PI, e sou Desenvolvedor FullStack. Possuo experiência com Bancos de Dados Relacionais e Não Relacionais, Javascript, Typescript, React Js, React Native e VueJs para desenvolvimento Frontend com diversas ferramentas adicionais. Também possuo experiência com NodeJs para desenvolvimento Backend com diversas ferramentas adicionais. Boa parte do meu estudo foi através das plataformas <a className='underline' target='_blank' href="http://devmedia.com/" rel="noreferrer">DevMedia</a>, <a className='underline' target='_blank' href="https://www.rocketseat.com.br/" rel="noreferrer">RocketSeat</a> e <a className='underline' target='_blank' href="https://www.vuemastery.com/" rel="noreferrer">Vue Mastery</a>, e atualmente estou fazendo o Curso Técnico em Desenvolvimento FullStack pelo <a className='underline' target='_blank' href="https://www.sp.senai.br/" rel="noreferrer">SENAI</a>.</p>
				</article>
			</section>
			<FloatButton />
			<Footer />
		</>
	);
};
