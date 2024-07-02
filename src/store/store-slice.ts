import { create } from 'zustand'
import { options as initialOptions } from '../api/optionCurrency'

export const useStore = create<IStore>((set, get) => {
	// Проверяем наличие данных в localStorage
	const storedOptions = localStorage.getItem('allOptions')
	const options = storedOptions ? JSON.parse(storedOptions) : initialOptions

	// Сохраняем данные в localStorage, если их там нет
	if (!storedOptions) {
		localStorage.setItem('allOptions', JSON.stringify(initialOptions))
	}

	return {
		firstSelectValue: options[2] || null,
		secondSelectValue: options[0] || null,
		allOptions: options,
		firstInputValue: 0,
		secondInputValue: 0,
		settingSelectValue: 0,
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
		changeOptions: (settingSelectValue, field: string, value: number) => {
			// обнуляем поля
			set({ firstInputValue: 0 })
			set({ secondInputValue: 0 })

			const allOptions = [...get().allOptions]
			const currencyToUpdate = allOptions[settingSelectValue]

			if (currencyToUpdate) {
				// Обновить курс валюты field в currencyToUpdate
				currencyToUpdate.rate.forEach(rate => {
					if (rate.type === field) {
						rate.value = value
					}
				})

				// Найти объект с value равным field
				const targetOption = allOptions.find(option => option.value === field)

				if (targetOption) {
					// Обновить курсы в targetOption, зависящие от валюты, равной value в currencyToUpdate
					targetOption.rate.forEach(rate => {
						if (rate.type === currencyToUpdate.value) {
							rate.value = 1 / value // Новое значение обратного курса
						}
					})
				}

				// Обновить состояние и localStorage
				set({ allOptions })
				localStorage.setItem('allOptions', JSON.stringify(allOptions))
			}
		},
	}
})
