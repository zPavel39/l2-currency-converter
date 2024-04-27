import React from 'react'
import Select from 'react-select'
import { create } from 'zustand'
import CustomInput from '../../components/ui/input/CustomInput'
import { options } from '../../api/optionCurrency'

const useSelectValueStore = create<ISelectType>(set => ({
	valueFirstSelect: null,
	valueSecondSelect: null,
	setValueFirstSelect: value => set({ valueFirstSelect: value }),
	setValueSecondSelect: value => set({ valueSecondSelect: value }),
}))
const inputStore = create<IInputType>(set => ({
	inputValue: null,
	setInputValue: value => set({ inputValue: value }),
}))

const MainForm: React.FC = () => {
	const {
		valueSecondSelect,
		valueFirstSelect,
		setValueFirstSelect,
		setValueSecondSelect,
	} = useSelectValueStore()
	const { inputValue, setInputValue } = inputStore()

	const handleSelectChange =
		(action: number) => (selectedOption: IOptionType | null) => {
			if (selectedOption) {
				const selectedValue = options.find(
					option => option.value === selectedOption.value
				)
				if (selectedValue) {
					if (action === 1) {
						setValueFirstSelect(selectedValue)
					}
					if (action === 2) {
						setValueSecondSelect(selectedValue)
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
						inputValue={inputValue}
						setInputValue={setInputValue}
						label={valueFirstSelect?.value || `Валюта`}
					/>
					<Select
						classNamePrefix='select-style'
						placeholder={`Валюта`}
						value={valueFirstSelect}
						onChange={handleSelectChange(1)}
						options={options}
					/>
				</div>
				<div className='flex items-end w-full justify-center'>
					<CustomInput
						inputValue={inputValue}
						setInputValue={setInputValue}
						label={valueSecondSelect?.value || `Валюта`}
					/>
					<Select
						classNamePrefix='select-style'
						value={valueSecondSelect}
						placeholder={`Валюта`}
						onChange={handleSelectChange(2)}
						options={options}
					/>
				</div>
			</div>
		</div>
	)
}

export default React.memo(MainForm)
