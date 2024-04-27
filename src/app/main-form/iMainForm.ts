interface IOptionType {
	label: string
	value: string
	rate: Array<{ type: string; value: number }>
}

interface ISelectType {
	valueFirstSelect?: IOptionType | null
	valueSecondSelect?: IOptionType | null
	setValueFirstSelect: (value: IOptionType) => void
	setValueSecondSelect: (value: IOptionType) => void
}
interface IInputType {
	inputValue?: number | null
	setInputValue: (value: number) => void
}
