import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { options } from '../../../api/optionCurrency'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

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
				height: 150,
			}}
		>
			<Tabs
				orientation='vertical'
				variant='scrollable'
				value={value}
				onChange={handleChange}
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
