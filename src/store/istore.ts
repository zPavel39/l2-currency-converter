interface IStore {
	firstSelectValue: IOptionType | null
	secondSelectValue: IOptionType | null
	allOptions: IOptionType[]
	firstInputValue: number
	secondInputValue: number
	settingSelectValue: number
	setFirstSelectValue: (selectValue: IOptionType) => void
	setSecondSelectValue: (selectValue: IOptionType) => void
	setFirstInputValue?: (inputValue: number) => void
	setSecondInputValue?: (inputValue: number) => void
	changeSettingSelectValue: (settingSelectValue: number) => void
	changeOptions: (
		settingSelectValue: number,
		field: string,
		value: number
	) => void
}
