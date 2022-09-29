import './style.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FloatButton from '../../components/FloatButton';

import Sorveteria from '../../assets/sorveteria.png'
import HelpDev from '../../assets/HelpDev.png'
import MeusLinks from '../../assets/meus-links.png'
import SeuFuturo from '../../assets/SeuFuturo.png'
import DsMeta from '../../assets/dsMeta.png'
import Concreta from '../../assets/Concreta.png'
import AcessButton from '../../components/AcessButton';


export default function Projetos() {
    return (
        <div>
            <Header />
            <section id='topo' className="bg-light-blue-project flex flex-col px-10 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Projetos responsivos</h2>
                    <p className="text-white text-xl">Projetos totalmente responsivos desenvolvidos com diversas tecnologias fundamentais para o FrontEnd e tecnologias que estão em alta!</p>

                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Sorveteria</h3>
                            <p className="text-white text-lg">Projeto de SPA para uma Sorveteria aplicando o conceito de Mobile First.</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>React JSS</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>TailWind CSS</li>
                                <li type='disc' className='text-sm w-4/4 text-white'>React-Router-Dom</li>
                            </ul>

                            <div className='flex grow items-center justify-center w-full'>
                                <img src={Sorveteria} className='w-3/4 xl:w-52' />
                            </div>

                            <AcessButton url='https://lnkd.in/dVyH2A5n' />
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Projeto Help Dev</h3>
                            <p className="text-white text-lg">Página dedicada a fornecer materiais de consulta para quem está estudando sobre desenvolvidos.</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                            </ul>

                            <div className='flex grow items-center justify-center w-full'>
                                <img src={HelpDev} className='w-3/4 xl:w-54' />
                            </div>

                            <AcessButton url='https://mferreiradb.github.io/help-dev/' />
                        </div>


                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Meus Links</h3>
                            <p className="text-white text-lg">Página contendo meus links principais.</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                            </ul>

                            <div className='flex grow items-center justify-center w-full'>
                                <img src={MeusLinks} className='w-3/4 xl:w-52' />
                            </div>

                            <AcessButton url='https://mferreiradb.github.io/meus-links/' />
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Adivinhe Seu Futuro</h3>
                            <p className="text-white text-lg">Página na qual você faz uma pergunta e uma resposta será dada de acordo.</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>HTML 5</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>CSS 3</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                            </ul>

                            <div className='flex grow items-center justify-center w-full'>
                                <img src={SeuFuturo} className='w-3/4 xl:w-54 xl:h-64' />
                            </div>

                            <AcessButton url='https://mferreiradb.github.io/maratona-explorer1-rocketseat/' />
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Verificação de vendas</h3>
                            <p className="text-white text-lg">Projeto fullstack com React e Spring de relatório de vendas por período com envio de sms com dados das vendas.</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>TypeScript</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>React JS</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>Java</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>Spring</li>
                            </ul>

                            <div className='flex grow items-center justify-center w-full'>
                                <img src={DsMeta} className='w-3/4 xl:w-52' />
                            </div>

                            <AcessButton url='https://www.linkedin.com/posts/mferreiradb_react-reactjs-vendas-activity-6974475209961558016-oLAo?utm_source=share&utm_medium=member_desktop' />

                            <p className="text-white text-md italic">Este projeto não está online devido dificuldades com a Heroku, porém ao clicar em Acessar, você será redirecionado(a) para a minha publicação feita no Linkedin.</p>
                        </div>

                        <div className='flex flex-col items-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/4 xl:m-5 my-5'>
                            <h3 className='text-2xl text-white font-semibold'>Concreta Serviços de Engenharia</h3>
                            <p className="text-white text-lg">Página desenvolvida para uma empresa de engenharia.</p>
                            <ul className='flex flex-col items-center'>
                                <h4 className='text-lg text-white font-semibold'>Tecnologias utilizadas</h4>
                                <li type='disc' className='text-sm w-2/4 text-white'>JavaScript</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>React JSS</li>
                                <li type='disc' className='text-sm w-2/4 text-white'>TailWind CSS</li>
                                <li type='disc' className='text-sm w-4/4 text-white'>React-Router-Dom</li>
                            </ul>

                            <div className='flex grow items-center justify-center w-full'>
                                <img src={Concreta} className='w-3/4 xl:w-52' />
                            </div>

                            <AcessButton url='https://concreta-e85r.vercel.app/' />
                            
                            <p className="text-white text-md italic">Este projeto ainda está em fase de desenvolvimento. Você pode acompanhar como está o andamento do projeto clicando no botão para acessar!</p>
                        </div>
                    </div>
                </div>

            </section>

            <FloatButton />

            <Footer />
        </div>
    )
}
