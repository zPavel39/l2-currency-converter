import React from 'react'

const CustomInput = ({ ...props }: any) => {
	return (
		<div className='flex items-start flex-col '>
			<label className='text-white'>{props.name}</label>
			<input
				type='number'
				placeholder='Введите кол-во...'
				className='m-w-72 p-2 text-xl rounded rounded-r-none'
			/>
		</div>
	)
}

export default React.memo(CustomInput)
