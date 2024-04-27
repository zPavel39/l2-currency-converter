export const options: IOptionType[] = [
	{
		value: 'Аденка(кк)',
		label: 'Аденка(кк)',
		rate: [
			{ type: 'Рубли', value: 1 },
			{ type: 'USDT', value: 1 },
		],
	},
	{
		value: 'Рубли',
		label: 'Рубли',
		rate: [
			{ type: 'Аденка', value: 1 },
			{ type: 'USDT', value: 1 },
		],
	},
	{
		value: 'USDT',
		label: 'USDT',
		rate: [
			{ type: 'Рубли', value: 1 },
			{ type: 'Аденка', value: 1 },
		],
	},
]
