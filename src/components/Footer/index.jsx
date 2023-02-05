import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

export const Footer = () => (
	<footer className='space-y-5 pt-16 pb-5 flex flex-col items-center text-center border-t-2 bg-dark-blue-project border-blue-900'>

		<div className="space-y-5">
			<h2 className='text-white font-bold text-xl mb-2'>CONTATO</h2>

			<div className='flex flex-col items-center xl:flex-row xl:space-x-10' id='contato'>
				<div className='flex space-x-2 my-1'>
					<EmailIcon className='text-white' />
					<a href='mailto:mauhmg@gmail.com<' target="_blank" className='underline text-white' rel="noreferrer">mauhmg@gmail.com</a>
				</div>

				<div className='flex space-x-2 my-1'>
					<WhatsAppIcon className='text-white' />
					<a href="https://api.whatsapp.com/send?phone=5586981033127" target="_blank" className='underline text-white' rel="noreferrer">(86) 9 8103-3127</a>
				</div>

				<div className='flex space-x-2 my-1'>
					<CallIcon className='text-white' />
					<a href="tel:86981033127" target="_blank" className='underline text-white' rel="noreferrer">(86) 9 8103-3127</a>
				</div>

				<div className='flex space-x-2 my-1'>
					<LinkedInIcon className='text-white' />
					<a href="https://www.linkedin.com/in/mferreiradb/" target="_blank" className='underline text-white' rel="noreferrer">/mferreiradb</a>
				</div>
			</div>
		</div>

		<div className='pt-16'>
			<p className='text-white'>Desenvolvido por <a href="https://github.com/mferreiradb" target="_blank">Mauricio Ferreira</a></p>
		</div>

	</footer>
);
