export const options: IOptionType[] = [
	{
		value: 'Аденка(кк)',
		label: 'Аденка(кк)',
		rate: [
			{ type: 'Рубли', value: 0.065 },
			{ type: 'USDT', value: 0.007081 },
		],
	},
	{
		value: 'Рубли',
		label: 'Рубли',
		rate: [
			{ type: 'Аденка(кк)', value: 15.3846 },
			{ type: 'USDT', value: 0.010841 },
		],
	},
	{
		value: 'USDT',
		label: 'USDT',
		rate: [
			{ type: 'Рубли', value: 92.2313 },
			{ type: 'Аденка(кк)', value: 141.2445 },
		],
	},
]
