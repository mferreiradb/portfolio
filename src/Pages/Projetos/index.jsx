import './style.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Sorveteria from '../../assets/sorveteria.png'
import Pokemon from '../../assets/pokemon.png'
import HelpDev from '../../assets/HelpDev.png'
import MeusLinks from '../../assets/meus-links.png'
import SeuFuturo from '../../assets/SeuFuturo.png'
import DsMeta from '../../assets/dsMeta.png'
import Concreta from '../../assets/Concreta.png'
import Pousada from '../../assets/pousada.png'
import FloatButton from '../../components/FloatButton';

export default function Projetos() {
    return (
        <div>
            <Header />
            <section id='topo' className="bg-light-blue-project flex flex-col px-10 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Projetos responsivos</h2>
                    <p className="text-white text-xl">Projetos desenvolvidos em um momento no qual eu já possuía mais conhecimento em desenvolvimento Front-End</p>

                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Sorveteria</h3>
                            <p className="text-white text-lg">Projeto de SPA para uma Sorveteria aplicando o conceito de Mobile First</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>React JSS</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>TailWind CSS</li>
                                <li type='disc' className='text-sm w-4/4 text-white'>React-Router-Dom</li>
                            </ul>
                            <img src={Sorveteria} className='w-3/4 xl:w-52' />
                            <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://lnkd.in/dVyH2A5n' target='_blank'>Acessar</a>
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
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


                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Meus Links</h3>
                            <p className="text-white text-lg">Página contendo meus links principais</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                            </ul>
                            <img src={MeusLinks} className='w-3/4 xl:w-52' />
                            <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://mferreiradb.github.io/meus-links/' target='_blank'>Acessar</a>
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Adivinhe Seu Futuro</h3>
                            <p className="text-white text-lg">Página na qual você faz uma pergunta e uma resposta será dada de acordo</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                            </ul>
                            <img src={SeuFuturo} className='w-3/4 xl:w-52' />
                            <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://mferreiradb.github.io/maratona-explorer1-rocketseat/' target='_blank'>Acessar</a>
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Verificação de vendas</h3>
                            <p className="text-white text-lg">Projeto fullstack com React e Spring de relatório de vendas por período com envio de sms com dados das vendas</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>TypeScript</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>React JS</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>Java</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>Spring</li>
                            </ul>
                            <img src={DsMeta} className='w-3/4 xl:w-52' />
                            <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://www.linkedin.com/posts/mferreiradb_react-reactjs-vendas-activity-6974475209961558016-oLAo?utm_source=share&utm_medium=member_desktop' target='_blank'>Acessar</a>
                            <p className="text-white text-md">Este projeto não está online devido dificuldades com a Heroku, porém ao clicar em Acessar, você será redirecionado(a) para a minha publicação feita no Linkedin</p>
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Concreta Serviços de Engenharia</h3>
                            <p className="text-white text-lg">Página desenvolvida para um cliente que possui uma empresa de engenharia</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>React JSS</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>TailWind CSS</li>
                                <li type='disc' className='text-sm w-4/4 text-white'>React-Router-Dom</li>
                            </ul>
                            <img src={Concreta} className='w-3/4 xl:w-52' />
                            <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://concreta-arq.vercel.app/' target='_blank'>Acessar</a>
                        </div>
                    </div>
                </div>

            </section>

            <section className="bg-dark-blue-project flex flex-col p-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Projetos não responsivos</h2>
                    <p className="text-white text-xl">Projetos desenvolvidos nos meus primeiros momentos de aprendizado sobre desenvolvimento Front-End</p>


                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
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

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Pousada Secreta</h3>
                            <p className="text-white text-lg">Página de divulgação de pousada</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                            </ul>
                            <img src={Pousada} className='w-3/4 xl:w-52' />
                            <a className="text-white text-md border-4 border-blue-900 py-1 px-4 rounded-2xl" href='https://mferreiradb.github.io/pousada-secreta-devmedia/' target='_blank'>Acessar</a>
                        </div>
                    </div>
                </div>

            </section>

            <FloatButton />

            <Footer />
        </div>
    )
}
