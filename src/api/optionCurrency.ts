export const options: IOptionType[] = [
	{
		value: 'Аденка(кк)',
		label: 'Аденка(кк)',
		rate: [
			{ type: 'Рубли', value: 0.65 },
			{ type: 'USDT', value: 0.007081 },
		],
	},
	{
		value: 'Рубли',
		label: 'Рубли',
		rate: [
			{ type: 'Аденка(кк)', value: 1.538 },
			{ type: 'USDT', value: 0.010841 },
		],
	},
	{
		value: 'USDT',
		label: 'USDT',
		rate: [
			{ type: 'Рубли', value: 92.23 },
			{ type: 'Аденка(кк)', value: 0.00705155 },
		],
	},
]
