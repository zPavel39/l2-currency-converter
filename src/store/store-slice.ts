import { create } from 'zustand'
import { options } from '../api/optionCurrency'

export const useStore = create<IStore>((set, get) => ({
	firstSelectValue: options[0] || null,
	secondSelectValue: options[1] || null,
	firstInputValue: 0,
	secondInputValue: 0,
	// для установки значения Select
	setFirstSelectValue: selectValue => set({ firstSelectValue: selectValue }),
	setSecondSelectValue: selectValue => set({ secondSelectValue: selectValue }),
	// для установки значения CustomInput
	setFirstInputValue: inputValue => {
		const selectedRate = get().firstSelectValue?.rate.find(
			rate => rate.type === get().secondSelectValue?.value
		)
		const calculatedValue = selectedRate ? inputValue * selectedRate.value : 0
		set({
			firstInputValue: inputValue,
			secondInputValue: Number(calculatedValue.toFixed(2)),
		})
	},
	setSecondInputValue: inputValue => {
		const selectedRate = get().secondSelectValue?.rate.find(
			rate => rate.type === get().firstSelectValue?.value
		)
		const calculatedValue = selectedRate ? inputValue * selectedRate.value : 0
		set({
			secondInputValue: inputValue,
			firstInputValue: Number(calculatedValue.toFixed(2)),
		})
	},
}))
