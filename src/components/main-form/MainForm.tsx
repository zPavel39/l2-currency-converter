import React from 'react'

const MainForm = () => {
	return (
		<div className=' relative flex flex-col gap-4 mx-4 p-6'>
			<div className='blurred-background absolute inset-0 z-10'></div>
			<div className='flex flex-col gap-4 z-20'>
				<input
					type='number'
					placeholder='Введите кол-во валюты'
					className='w-52 p-px text-base'
				/>
				<input
					type='number'
					placeholder='Введите кол-во валюты'
					className='w-52 p-px text-base'
				/>
			</div>
		</div>
	)
}

export default React.memo(MainForm)
