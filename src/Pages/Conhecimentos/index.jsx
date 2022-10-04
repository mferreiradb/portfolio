import FloatButton from "../../components/FloatButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import React from '../../assets/react.svg'
import Tailwind from '../../assets/tailwind.png'
import MUI from '../../assets/MUI.png'
import JS from '../../assets/JS.png'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import Flutter from '../../assets/flutter.png'
import Dart from '../../assets/dart.png'
import Python from '../../assets/py.png'
import MYSQL from '../../assets/mysql.png'
import GIT from '../../assets/git.png'
import Card from "../../components/Card";

const Conhecimentos = () => {
    return (
        <div>
            <Header />

            <section id='topo' className="bg-dark-blue-project flex flex-col p-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Conhecimentos Mais Sólidos</h2>
                    <p className="text-white text-xl">Técnologias que utilizo atualmente para desenvolver meus projetos</p>


                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

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

                        <Card img={Tailwind} titulo='Tailwind CSS'>
                            <p className="text-white text-lg">Biblioteca CSS com foco no conceito <b>Mobile First</b> que facilita na estilizaçãoe e responsividade através de classes.</p>
                        </Card>

                        <Card img={MUI} titulo='Material UI'>
                            <p className="text-white text-lg">
                                Biblioteca que nos permite importar e usar diferentes componentes para criar uma interface de usuário em nossos aplicativos React. </p>
                        </Card>

                        <Card img={JS} titulo='JavaScript'>

                            <p className="text-white text-lg">JavaScript é uma linguagem de programação interpretada, estruturada de scripts em alto nível, com tipagem dinâmica fraca e multiparadigma.</p>
                        </Card>

                        <Card img={HTML} titulo='HTML 5'>

                            <p className="text-white text-lg">HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet. É a quinta versão da linguagem HTML, que passou a ser conheciida como HTML Semântico.</p>
                        </Card>

                        <Card img={CSS} titulo='CSS 3'>

                            <p className="text-white text-lg">CSS3 é a terceira e mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web.</p>
                        </Card>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-24' src={MYSQL} alt='react-svg' />

                                <h3 className='text-center md:pr-11 w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>MYSQL</h3>
                            </div>

                            <p className="text-white text-lg">O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.</p>
                        </div>

                        <Card img={GIT} titulo='GIT'>

                            <p className="text-white text-lg">Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>
                        </Card>

                    </div>
                </div>

            </section>

            <section id='topo' className="bg-light-blue-project flex flex-col p-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Conhecimentos Menos Sólidos</h2>
                    <p className="text-white text-xl">Técnologias que já estudei, porém que não utilizo atualmente</p>


                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img src={React} alt='react-svg' />

                                <h3 className='text-center w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>React Native</h3>
                            </div>
                            <p className="text-white text-lg">React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.</p>
                            <ul className='flex flex-col items-center space-y-1'>
                                <h4 className='text-lg text-white font-semibold'>Habilidades</h4>
                                <li type='disc' className='text-sm w-7/8 text-white'>Exibição de imagens</li>
                                <li type='disc' className='text-sm w-7/8 text-white'>Componentização</li>
                                <li type='disc' className='text-sm w-7/8 text-white'>Estilização</li>
                            </ul>
                            <p className="text-white text-md italic">Neste momento, estou em pausa nos estudos com o objetivo de explorar as possibilidades de outra tecnologia para desenvolvimento de apps nativos multi plataforma</p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-12' src={Flutter} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>Flutter</h3>
                            </div>

                            <p className="text-white text-lg">Flutter é um kit de desenvolvimento de interface de usuário, que possibilita a criação de aplicativos compilados nativamente, para os sistemas operacionais Android, iOS, Windows, Mac, Linux e, Fuchsia e Web.</p>

                            <p className="text-white text-md italic">Atualmente, estou explorando a tecnologia para verificar se irei investir nela ou no <b>React Native</b></p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-12' src={Dart} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>Dart</h3>
                            </div>

                            <p className="text-white text-lg">Dart é uma linguagem de programação voltada à web desenvolvida pela Google. O objetivo da linguagem Dart foi, inicialmente, de substituir a JavaScript como a linguagem principal embutida nos navegadores. Hoje ela é utilizada em maior parte no desenvolvimento de aplicações Flutter</p>

                            <p className="text-white text-md italic">Atualmente, estou explorando a tecnologia para verificar se irei investir nela ou no <b>React Native</b></p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-20' src={Python} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>Python</h3>
                            </div>

                            <p className="text-white text-lg">Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>

                            <p className="text-white text-md italic">Finalizei o primeiro módulo do curso de Python 3 do <b>Curso em Vídeo</b>, ministrado pelo professor <b>Gustavo Guanabara</b></p>
                        </div>
                    </div>
                </div>

            </section>

            <FloatButton />

            <Footer />
        </div>
    )
}
export default Conhecimentos