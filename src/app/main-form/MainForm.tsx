import React, { useState } from 'react'
import Select from 'react-select'
import CustomInput from '../../components/ui/input/CustomInput'
import { useStore } from '../../store/store-slice'
import { options } from '../../api/optionCurrency'
import VerticalTabs from '../../components/ui/tabs-currency/TabsCurrency'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { AnimatePresence, motion } from 'framer-motion'

const MainForm: React.FC = () => {
	const {
		firstSelectValue,
		secondSelectValue,
		firstInputValue,
		allOptions,
		secondInputValue,
		setFirstSelectValue,
		setSecondSelectValue,
		setFirstInputValue,
		setSecondInputValue,
		settingSelectValue,
		changeOptions,
	} = useStore()

	const [showCurrency, setShowCurrency] = useState(false)
	const handleSelectChange =
		(action: number) => (selectedOption: IOptionType | null) => {
			if (selectedOption) {
				const selectedValue = allOptions.find(
					option => option.value === selectedOption.value
				)
				if (selectedValue) {
					if (action === 1) {
						setFirstSelectValue(selectedValue)
					}
					if (action === 2) {
						setSecondSelectValue(selectedValue)
					}
				}
			}
		}
	const handleChangeCurrency = (field: string, value: number) => {
		console.log('field', field)
		console.log('value', value)
		changeOptions(settingSelectValue, field, value)
	}
	console.log('settingSelectValue', settingSelectValue)
	console.log('allOptions', allOptions)
	return (
		<div className=' relative flex flex-col justify-center gap-1 mx-4 p-9 max-w-450px w-full'>
			<div className='flex justify-end w-full relative'>
				<AnimatePresence>
					{!showCurrency && (
						<motion.button
							key='settings'
							initial={{
								position: 'absolute',
								scale: 0,
								top: -24,
								height: 31,
								width: 31,
							}}
							animate={{ rotate: 360, scale: [0, 1] }}
							transition={{
								duration: 1,
								times: 0.3,
								repeatDelay: 1,
							}}
							exit={{ scale: 0, rotate: [0, 360] }}
							onClick={() => setShowCurrency(!showCurrency)}
						>
							<SettingsOutlinedIcon fontSize='large' sx={{ color: 'white' }} />
						</motion.button>
					)}
					{showCurrency && (
						<motion.button
							key='close'
							initial={{
								position: 'absolute',
								top: -24,
								scale: 0,
								height: 31,
								width: 31,
							}}
							animate={{ rotate: 360, scale: [0, 1] }}
							transition={{
								duration: 1,
								times: 0.3,
								repeatDelay: 1,
							}}
							exit={{ rotate: [0, 360], scale: 0 }}
							onClick={() => setShowCurrency(!showCurrency)}
						>
							<CloseOutlinedIcon fontSize='large' sx={{ color: 'white' }} />
						</motion.button>
					)}
				</AnimatePresence>
			</div>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{ opacity: [0, 0.6] }}
				transition={{
					duration: 0.8,
					times: 0.3,
					repeatDelay: 1,
				}}
				className='blurred-background absolute inset-0  mt-10 '
			></motion.div>
			<div className='flex flex-col justify-center gap-2 z-20 w-full items-end min-h-144px relative mt-3'>
				{!showCurrency && (
					<>
						<motion.div
							key='1'
							initial={{
								opacity: 0,
								x: -200,
							}}
							animate={{ opacity: [0, 1], x: 0 }}
							transition={{
								duration: 0.8,
								times: 0.3,
								repeatDelay: 1,
								ease: 'easeInOut',
							}}
							className='flex items-end w-full justify-center mt-4'
						>
							<CustomInput
								inputValue={firstInputValue}
								setInputValue={setFirstInputValue}
								type={'select'}
								label={firstSelectValue?.value || `Валюта`}
							/>
							<Select
								classNamePrefix='select-style'
								placeholder={`Валюта`}
								value={firstSelectValue}
								onChange={handleSelectChange(1)} // Передаем номер селекта
								options={allOptions}
							/>
						</motion.div>
						<motion.div
							key='2'
							initial={{
								opacity: 0,
								x: -200,
							}}
							animate={{ opacity: [0, 1], x: 0 }}
							transition={{
								duration: 1,
								ease: 'easeInOut',
								times: 0.3,
								repeatDelay: 1,
							}}
							className='flex items-end w-full justify-center'
						>
							<CustomInput
								inputValue={secondInputValue}
								setInputValue={setSecondInputValue}
								type={'select'}
								label={secondSelectValue?.value || `Валюта`}
							/>
							<Select
								classNamePrefix='select-style'
								value={secondSelectValue}
								placeholder={`Валюта`}
								onChange={handleSelectChange(2)} // Передаем номер селекта
								options={allOptions}
							/>
						</motion.div>
					</>
				)}
				{showCurrency && (
					<div className='flex gap-10 justify-end items-center mt-2 relative'>
						<motion.div
							key='3'
							initial={{
								opacity: 0,
								y: -200,
							}}
							animate={{ opacity: [0, 1], y: 0 }}
							transition={{
								duration: 0.8,
								ease: 'easeInOut',
								times: 0.3,
								repeatDelay: 1,
							}}
						>
							<VerticalTabs />
						</motion.div>
						<motion.div
							key='4'
							initial={{
								opacity: 0,
								x: 200,
							}}
							animate={{ opacity: [0, 1], x: 0 }}
							transition={{
								duration: 0.8,
								times: 0.3,
								ease: 'easeInOut',
								repeatDelay: 1,
							}}
							className='flex flex-col gap-2 justify-end width-full'
						>
							{allOptions[settingSelectValue].rate.map(i => (
								<CustomInput
									setInputValue={(e: number) => handleChangeCurrency(i.type, e)}
									inputValue={i.value}
									label={i.type}
									key={i.type}
								/>
							))}
						</motion.div>
					</div>
				)}
			</div>
		</div>
	)
}

export default React.memo(MainForm)
