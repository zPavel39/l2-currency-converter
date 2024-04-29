import React from 'react'

const CustomButton = ({ ...props }: any) => {
	const { setAction = () => {}, show = false } = props
	return (
		<button
			onClick={setAction}
			className='custom-button p-0.5 bg-neutral-50 active:bg-blue-400'
		>
			{show ? 'Закрыть Настройку' : 'Настройка курса'}
		</button>
	)
}

export default React.memo(CustomButton)
