import React from 'react'

const CustomInput = ({ ...props }: any) => {
	const { label, inputValue, setInputValue } = props
	return (
		<div className='flex items-start flex-col w-full'>
			<label className='text-white'>{label}</label>
			<input
				value={inputValue || ''}
				onChange={e => setInputValue(e.target.value)}
				type='number'
				autoComplete='off'
				placeholder='Введите кол-во...'
				className='m-w-72 p-2 text-xl rounded rounded-r-none w-full'
			/>
		</div>
	)
}

export default React.memo(CustomInput)
