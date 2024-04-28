interface IStore {
	firstSelectValue: IOptionType | null
	secondSelectValue: IOptionType | null
	firstInputValue: number
	secondInputValue: number
	setFirstSelectValue: (selectValue: IOptionType) => void
	setSecondSelectValue: (selectValue: IOptionType) => void
	setFirstInputValue?: (inputValue: number) => void
	setSecondInputValue?: (inputValue: number) => void
}
// для установки значения Select
