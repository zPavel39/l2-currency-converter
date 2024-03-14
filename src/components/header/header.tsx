import React from 'react'
import LogoGh from './../../assets/images/logo_gh.png'
import LogoL2 from './../../assets/images/lineage-2.webp'

const Header = () => {
	return (
		<header className='w-full h-14 flex justify-between items-center mb-7 relative z-10'>
			<div className=''>
				<img
					className='absolute -top-120px -left-20px h-300px -mr-12px '
					src={LogoL2}
					alt='L2'
				/>
			</div>
			<a
				className=' text-white text-xl mx-5'
				href='https://github.com/zPavel39/l2-currency-converter'
			>
				<img className='h-11 mt-1' src={LogoGh} alt='GH' />
			</a>
		</header>
	)
}

export default React.memo(Header)
