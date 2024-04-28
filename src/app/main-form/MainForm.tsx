import React from 'react'
import Select from 'react-select'
import CustomInput from '../../components/ui/input/CustomInput'
import { useStore } from '../../store/store-slice'
import { options } from '../../api/optionCurrency'

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
		<div className=' relative flex flex-col justify-center gap-4 mx-4 p-9 max-w-450px'>
			<div className='blurred-background absolute inset-0 z-10 '></div>
			<div className='flex flex-col justify-center gap-4 z-20 items-center w-full'>
				<div className='flex items-end w-full justify-center'>
					<CustomInput
						inputValue={firstInputValue}
						setInputValue={setFirstInputValue}
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
			</div>
		</div>
	)
}

export default React.memo(MainForm)
