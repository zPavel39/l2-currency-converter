import Header from '../components/header/header'

function App() {
	return (
		<div className='bg-main-map h-screen bg-cover bg-center h-vh flex-col justify-center'>
			<div className='absolute inset-0 bg-black opacity-50 z-2'></div>
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
