import React, { useState } from 'react'
import Select from 'react-select'
import CustomInput from '../../components/ui/input/CustomInput'
import { useStore } from '../../store/store-slice'
import { options } from '../../api/optionCurrency'
import CustomButton from '../../components/ui/custom-button/CustomButton'
import VerticalTabs from '../../components/ui/tabs-currency/TabsCurrency'

const MainForm: React.FC = () => {
	const {
		firstSelectValue,
		secondSelectValue,
		firstInputValue,
		secondInputValue,
		setFirstSelectValue,
		setSecondSelectValue,
		setFirstInputValue,
		setSecondInputValue,
	} = useStore()
	const [showCurrency, setShowCurrency] = useState(false)
	const handleSelectChange =
		(action: number) => (selectedOption: IOptionType | null) => {
			if (selectedOption) {
				const selectedValue = options.find(
					option => option.value === selectedOption.value
				)
				if (selectedValue) {
					if (action === 1) {
						setFirstSelectValue(selectedValue)
					}
					if (action === 2) {
						setSecondSelectValue(selectedValue)
					}
				}
			}
		}

	return (
		<div className=' relative flex flex-col justify-center gap-4 mx-4 p-9 max-w-450px w-full'>
			<div className='flex justify-end w-full'>
				<CustomButton
					setAction={() => setShowCurrency(!showCurrency)}
					show={showCurrency}
				/>
			</div>

			<div className='blurred-background absolute inset-0 z-10 mt-16'></div>
			<div className='flex flex-col justify-center gap-4 z-20 w-full items-end'>
				{!showCurrency && (
					<>
						<div className='flex items-end w-full justify-center'>
							<CustomInput
								inputValue={firstInputValue}
								setInputValue={setFirstInputValue}
								type={'select'}
								label={firstSelectValue?.value || `Валюта`}
							/>
							<Select
								classNamePrefix='select-style'
								placeholder={`Валюта`}
								value={firstSelectValue}
								onChange={handleSelectChange(1)} // Передаем номер селекта
								options={options}
							/>
						</div>
						<div className='flex items-end w-full justify-center'>
							<CustomInput
								inputValue={secondInputValue}
								setInputValue={setSecondInputValue}
								type={'select'}
								label={secondSelectValue?.value || `Валюта`}
							/>
							<Select
								classNamePrefix='select-style'
								value={secondSelectValue}
								placeholder={`Валюта`}
								onChange={handleSelectChange(2)} // Передаем номер селекта
								options={options}
							/>
						</div>
					</>
				)}
				{showCurrency && (
					<div className='flex gap-10 justify-end items-start'>
						<VerticalTabs />
						<div className='flex flex-col gap-2 justify-end width-full'>
							{options[0].rate.map(i => (
								<CustomInput inputValue={i.value} label={i.type} key={i.type} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default React.memo(MainForm)
