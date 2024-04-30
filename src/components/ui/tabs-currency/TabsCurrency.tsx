import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { options } from '../../../api/optionCurrency'

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: 'background.cer',
				display: 'flex',
				height: 145,
			}}
		>
			<Tabs
				orientation='vertical'
				variant='scrollable'
				value={value}
				onChange={handleChange}
				visibleScrollbar
				aria-label='Vertical tabs example'
				sx={{ borderRight: 1, borderColor: 'divider' }}
			>
				{options.map((option, index) => (
					<Tab
						sx={{ color: 'white' }}
						label={option.label}
						{...a11yProps(index)}
					/>
				))}
			</Tabs>
		</Box>
	)
}
