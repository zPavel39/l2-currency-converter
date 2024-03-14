import React from 'react'

const MainForm = () => {
	return (
		<div className=' relative flex flex-col gap-4 mx-4 p-9 max-w-450px'>
			<div className='blurred-background absolute inset-0 z-10 '></div>
			<div className='flex flex-col gap-4 z-20'>
				<input
					type='number'
					placeholder='Введите кол-во валюты'
					className='w-72 p-2 text-xl rounded'
				/>
				<input
					type='number'
					placeholder='Введите кол-во валюты'
					className='w-72 p-2 text-xl rounded'
				/>
			</div>
		</div>
	)
}

export default React.memo(MainForm)
