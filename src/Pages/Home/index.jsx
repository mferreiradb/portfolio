import './style.css'
import Header from "../../components/Header"
import MinhaFoto from '../../assets/minha-foto.png'
import Footer from '../../components/Footer'

export default function Home() {
    const dev = "<JuniorDeveloper />"

    return (
        <div>
            <Header />
            <section className="bg-dark-blue-project flex flex-col fundo-home px-5 space-y-5 lg:flex-row lg:justify-around xl:flex-row xl:justify-around 2xl:flex-row 2xl:justify-around">
                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <p className="text-slate-300 text-2xl lg:text-4xl">Olá! Tudo bem? Eu me chamo</p>
                    <h1 className="text-white text-3xl font-bold lg:text-5xl">Mauricio Ferreira</h1>
                    <code className="text-slate-400 text-2xl lg:text-4xl">{dev}</code>
                </div>
                
                <div className="flex flex-col justify-center">
                    <code className='text-white text-xl leading-normal lg:text-3xl xl:text-4xl'>
                        System.out.println("Hello world!");<br />
                        console.log("Hello world!");<br />
                        print("Hello world!")
                    </code>
                </div>
            </section>

            <section className="bg-light-blue-project flex flex-col items-center p-5">

                <div className='text-center flex flex-col items-center space-y-6'>
                    <h2 className='text-3xl text-white font-semibold'>Quem sou eu?</h2>
                    <div className='text-center flex flex-col items-center space-y-6 xl:flex-row xl:px-5 xl:space-x-96'>
                        <img src={MinhaFoto} alt='minha-foto' />
                        <p className='text-white text-lg leading-relaxed'>Meu nome é Mauricio, sou natural de Parnaíba-PI. Tenho formação técnica em Administração, Atendimento ao Cliente e Gestão de Pessoas. Estou me desenvolvendo na área de Tecnologia e busco trabalhar com programação. Possuo experiência com Banco de Dados SQL (MYSQL e Firebird), linguagem Javascript, React Js, React Native, Photoshop, Figma e Pacote Office, além de já ter estudado Python e Java. Estou estudando desenvolvimento FullStack na DevMedia, uma das maiores escolas de programação do mercado.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}