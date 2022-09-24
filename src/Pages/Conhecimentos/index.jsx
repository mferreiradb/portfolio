import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Conhecimentos() {
    return (
        <div>
            <Header />
            <section className="bg-red-700 flex flex-col items-center p-5">
                <div className='text-center flex flex-col items-center space-y-6'>
                    <h2 className='text-3xl text-white font-semibold'>Quem sou eu?</h2>
                    <p className='text-white text-lg leading-relaxed'>Meu nome é Mauricio, sou natural de Parnaíba-PI. Tenho formação técnica em Administração, Atendimento ao Cliente e Gestão de Pessoas. Estou me desenvolvendo na área de Tecnologia e busco trabalhar com programação. Possuo experiência com Banco de Dados SQL (MYSQL e Firebird), linguagem Javascript, React Js, React Native, Photoshop, Figma e Pacote Office, além de já ter estudado Python e Java. Estou estudando desenvolvimento FullStack na DevMedia, uma das maiores escolas de programação do mercado.</p>
                </div>
            </section>

            <Footer />
        </div>
    )
}