import './style.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Gelateria from '../../assets/sorveteria.png'
import Pokemon from '../../assets/pokemon.png'
import HelpDev from '../../assets/HelpDev.png'

export default function Projetos() {
    return (
        <div>
            <Header />
            <section className="bg-light-blue-project flex flex-col px-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Projetos responsivos</h2>
                    <p className="text-white text-xl">Projetos desenvolvidos em um momento no qual eu já possuía mais conhecimento em desenvolvimento Front-End</p>

                    <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5'>
                        <h3 className='text-2xl text-white font-semibold'>Sorveteria</h3>
                        <p className="text-white text-lg">Projeto de SPA para uma Sorveteria</p>
                        <ul className='flex flex-col items-center'>
                            <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>

                            <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                            <li type='disc' className='text-sm w-2/4 text-white'>React JSS</li>
                            <li type='disc' className='text-sm w-2/4 text-white'>TailWind CSS</li>
                            <li type='disc' className='text-sm w-4/4 text-white'>React-Router-Dom</li>
                        </ul>
                        <img src={Gelateria} className='w-3/4 xl:w-52' />
                        <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://lnkd.in/dVyH2A5n' target='_blank'>Acessar</a>
                    </div>

                    <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5'>
                        <h3 className='text-2xl text-white font-semibold'>Projeto Help Dev</h3>
                        <p className="text-white text-lg">Página dedicada a fornecer materiais de consulta para quem está estudando sobre desenvolvidos</p>
                        <ul className='flex flex-col items-center'>
                            <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>

                            <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                            <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                            <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                        </ul>
                        <img src={HelpDev} className='w-3/4 xl:w-52' />
                        <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://mferreiradb.github.io/help-dev/' target='_blank'>Acessar</a>
                    </div>
                </div>

            </section>

            <section className="bg-dark-blue-project flex flex-col p-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Projetos não responsivos</h2>
                    <p className="text-white text-xl">Projetos desenvolvidos nos meus primeiros momentos de aprendizado sobre desenvolvimento Front-End</p>


                    <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5'>
                        <h3 className='text-2xl text-white font-semibold'>Pokémon</h3>
                        <p className="text-white text-lg">Projeto de página com o tema Pokémon</p>
                        <ul className='flex flex-col items-center'>
                            <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>

                            <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                            <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                        </ul>
                        <img src={Pokemon} className='w-3/4 xl:w-52' />
                        <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://mferreiradb.github.io/pokemon-devmedia/' target='_blank'>Acessar</a>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}