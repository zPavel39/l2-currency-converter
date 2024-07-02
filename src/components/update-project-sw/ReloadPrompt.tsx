import './ReloadPrompt.css'
import { useState, useEffect } from 'react'
// @ts-ignore
import { useRegisterSW } from 'virtual:pwa-register/react'
// @ts-ignore
import { pwaInfo } from 'virtual:pwa-info'

console.log(pwaInfo)

function ReloadPrompt() {
	const buildDate = '__DATE__'
	const reloadSW: string = '__RELOAD_SW__'

	const {
		offlineReady: [offlineReady, setOfflineReady],
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegisteredSW(swUrl: any, r: any) {
			console.log(`Service Worker at: ${swUrl}`)
			if (reloadSW === 'true') {
				r &&
					setInterval(() => {
						console.log('Checking for sw update')
						r.update()
					}, 20000)
			} else {
				console.log('SW Registered: ' + r)
			}
		},
		onRegisterError(error: string) {
			console.log('SW registration error', error)
		},
	})

	const close = () => {
		setOfflineReady(false)
		setNeedRefresh(false)
	}

	const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
	const [isPwaInstallable, setIsPwaInstallable] = useState(false)

	useEffect(() => {
		const handleBeforeInstallPrompt = (e: any) => {
			e.preventDefault()
			setDeferredPrompt(e)
			setIsPwaInstallable(true)
		}

		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

		return () => {
			window.removeEventListener(
				'beforeinstallprompt',
				handleBeforeInstallPrompt
			)
		}
	}, [])

	const handleInstallClick = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt()
			deferredPrompt.userChoice.then((choiceResult: any) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the A2HS prompt')
				} else {
					console.log('User dismissed the A2HS prompt')
				}
				setDeferredPrompt(null)
				setIsPwaInstallable(false)
			})
		}
	}

	return (
		<div className='ReloadPrompt-container'>
			{(offlineReady || needRefresh) && (
				<div className='ReloadPrompt-toast'>
					<div className='ReloadPrompt-message'>
						{offlineReady ? (
							<span>Приложение готово к работе в автономном режиме</span>
						) : (
							<span>
								Доступно новое обновление, нажмите кнопку перезагрузки, чтобы
								обновить.
							</span>
						)}
					</div>
					{needRefresh && (
						<button
							className='ReloadPrompt-toast-button'
							onClick={() => updateServiceWorker(true)}
						>
							Перезагрузить
						</button>
					)}
					<button className='ReloadPrompt-toast-button' onClick={() => close()}>
						Закрыть
					</button>
				</div>
			)}
			<div className='ReloadPrompt-date'>{buildDate}</div>
			{isPwaInstallable && (
				<button
					className='ReloadPrompt-toast-button'
					onClick={handleInstallClick}
				>
					Установить приложение
				</button>
			)}
		</div>
	)
}

export default ReloadPrompt
