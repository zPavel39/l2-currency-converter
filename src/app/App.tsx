import Header from '../components/header/header'
import ReloadPrompt from '../components/update-project-sw/ReloadPrompt'
import MainForm from './main-form/MainForm'
import Gnomka from './../assets/images/gnomka2.png'

function App() {
	return (
		<div>
			<div className='w-dvw bg-main-map h-dvh bg-center bg-cover flex-col justify-center'>
				<ReloadPrompt />
				<div className=' container mx-auto my-0 relative z-10'>
					<Header />
					<blockquote className='flex flex-col justify-end items-end gap-4 mb-5 mx-5'>
						<q className='text-white text-xl text-end'>
							Трата денег — это искусство; трата времени — еще большее искусство
						</q>
						<cite className='text-slate-200 text-l text-right '>
							- Карлос Руис Сафон.
						</cite>
					</blockquote>
					<div className='flex justify-center'>
						<MainForm />
					</div>
				</div>
				<img src={Gnomka} className='img-app absolute bottom-0 z-10' />
			</div>
			<div className='absolute inset-0 h-full bg-black opacity-60 z-2'></div>
		</div>
	)
}

export default App
