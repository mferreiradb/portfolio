import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => (
    <footer className='space-y-5 pt-16 pb-5 bg-dark-blue-project flex flex-col items-center text-center'>

        <div className="space-y-5">
            <h2 className='text-white font-bold text-xl mb-2'>CONTATO</h2>

            <div className='flex flex-col items-center space-y-3' id='contato'>
                <div className='flex space-x-4'>
                    <EmailIcon className='text-white' />
                    <a href='mailto:mauhmg@gmail.com<' target="_blank" className='underline text-white'>mauhmg@gmail.com</a>
                </div>

                <div className='flex space-x-4'>
                    <WhatsAppIcon className='text-white' />
                    <a href="https://api.whatsapp.com/send?phone=5586995256729" target="_blank" className='underline text-white'>(86) 9 9525-6729</a>
                </div>

                <div className='flex space-x-4'>
                    <CallIcon className='text-white' />
                    <a href="tel:86981033127" target="_blank" className='underline text-white'>(86) 9 8103-3127</a>
                </div>

                <div className='flex space-x-4'>
                    <LinkedInIcon className='text-white' />
                    <a href="https://www.linkedin.com/in/mferreiradb/" target="_blank" className='underline text-white'>/mferreiradb</a>
                </div>
            </div>
        </div>

        <div className='pt-16'>
            <p className='text-white'>Desenvolvido por Mauricio Ferreira</p>
        </div>

    </footer>
)
export default Footer;