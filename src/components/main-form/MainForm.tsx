import React from 'react'
import Select from 'react-select'

import CustomInput from '../ui/input/CustomInput'
const options = [
	{ value: 'Аденка(кк)', label: 'Аденка(кк)' },
	{ value: 'Рубли', label: 'Рубли' },
	{ value: 'USDT', label: 'USDT' },
]
const MainForm = () => {
	return (
		<div className=' relative flex flex-col gap-4 mx-4 p-9 max-w-450px'>
			<div className='blurred-background absolute inset-0 z-10 '></div>
			<div className='flex flex-col gap-4 z-20'>
				<div className='flex items-end'>
					<CustomInput name={'Aденка'} />
					<Select
						classNamePrefix='select-style'
						placeholder={`Валюта`}
						options={options}
					/>
				</div>
				<div className='flex items-end'>
					<CustomInput name={'Рубли'} />
					<Select
						classNamePrefix='select-style'
						placeholder={`Валюта`}
						options={options}
					/>
				</div>
			</div>
		</div>
	)
}

export default React.memo(MainForm)
