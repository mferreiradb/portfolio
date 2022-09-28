import FloatButton from "../../components/FloatButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import React from '../../assets/react.svg'
import Tailwind from '../../assets/tailwind.png'

export default function Conhecimentos() {
    return (
        <div>
            <Header />

            <section id='#topo' className="bg-dark-blue-project flex flex-col p-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Conhecimentos Mais Sólidos</h2>
                    <p className="text-white text-xl">Técnologias que uso para desenvolver atualmente em meus projetos</p>


                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-8 my-10'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img src={React} alt='react-svg' />

                                <h3 className='text-center w-2/3 xl:w-1/4 text-2xl text-white font-semibold'>React JS</h3>
                            </div>
                            <p className="text-white text-lg">O React é uma biblioteca JavaScript com foco em criar interfaces de usuário em páginas web.</p>
                            <ul className='flex flex-col items-center space-y-1'>
                                <h4 className='text-lg text-white font-semibold'>Habilidades</h4>
                                <li type='disc' className='text-sm w-7/8 text-white'>Componentização</li>
                                <li type='disc' className='text-sm w-7/8 text-white'>useState</li>
                                <li type='disc' className='text-sm w-7/8 text-white'>Rotas</li>
                            </ul>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-8 my-10'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-12' src={Tailwind} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>TailWind CSS</h3>
                            </div>

                            <p className="text-white text-lg">Biblioteca CSS com foco no conceito <b>Mobile First</b> que facilita na estilizaçãoe e responsividade através de classes.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-8 my-10'>
                            <h3 className='text-2xl text-white font-semibold'>Material UI</h3>
                            <p className="text-white text-lg">Página de divulgação de pousada</p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-8 my-10'>
                            <h3 className='text-2xl text-white font-semibold'>JavaScript</h3>
                            <p className="text-white text-lg">Página de divulgação de pousada</p>
                        </div>
                    </div>
                </div>

            </section>

            <FloatButton />

            <Footer />
        </div>
    )
}