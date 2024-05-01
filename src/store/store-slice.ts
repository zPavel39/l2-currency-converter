import { create } from 'zustand'
import { options } from '../api/optionCurrency'

export const useStore = create<IStore>((set, get) => ({
	firstSelectValue: options[1] || null,
	secondSelectValue: options[0] || null,
	firstInputValue: 0,
	secondInputValue: 0,
	settingSelectValue: 0,
	// для установки значения Select
	setFirstSelectValue: selectValue =>
		set({
			firstSelectValue: selectValue,
			secondInputValue: 0,
			firstInputValue: 0,
		}),
	setSecondSelectValue: selectValue =>
		set({
			secondSelectValue: selectValue,
			secondInputValue: 0,
			firstInputValue: 0,
		}),
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
	changeSettingSelectValue: settingSelectValue => {
		set({ settingSelectValue: settingSelectValue })
	},
}))
