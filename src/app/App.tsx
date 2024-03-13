import Header from '../components/header/header'
import ReloadPrompt from '../components/update-project-sw/ReloadPrompt'

function App() {
	return (
		<div className='h-dvh bg-main-map bg-cover bg-center flex-col justify-center'>
			<ReloadPrompt />
			<div className='absolute h-dvh inset-0 bg-black opacity-60 z-2'></div>
			<Header />
			<div className='container mx-lg relative  z-10'>
				<blockquote className='flex flex-col justify-end items-end gap-4 mb-10 mx-5'>
					<q className='text-white text-3xl text-end'>
						Трата денег — это искусство; трата времени — еще большее искусство
					</q>
					<cite className='text-slate-200 text-xl text-right '>
						- Карлос Руис Сафон.
					</cite>
				</blockquote>
			</div>
		</div>
	)
}

export default App
