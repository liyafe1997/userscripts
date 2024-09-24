// ==UserScript==
// @name               Auto Skip YouTube Ads
// @name:vi            Tự Động Bỏ Qua Quảng Cáo YouTube
// @name:zh-CN         自动跳过 YouTube 广告
// @name:zh-TW         自動跳過 YouTube 廣告
// @name:ja            YouTube 広告を自動スキップ
// @name:ko            YouTube 광고 자동 건너뛰기
// @name:es            Saltar Automáticamente Anuncios De YouTube
// @name:ru            Автоматический Пропуск Рекламы На YouTube
// @name:id            Lewati Otomatis Iklan YouTube
// @name:hi            YouTube विज्ञापन स्वचालित रूप से छोड़ें
// @namespace          https://github.com/tientq64/userscripts
// @version            4.4.1
// @description        Automatically skip YouTube ads instantly. Remove the ad blocker warning pop-up. Very lightweight and efficient.
// @description:vi     Tự động bỏ qua quảng cáo YouTube ngay lập tức. Loại bỏ cửa sổ bật lên cảnh báo trình chặn quảng cáo. Rất nhẹ và hiệu quả.
// @description:zh-CN  自动立即跳过 YouTube 广告。删除广告拦截器警告弹出窗口。非常轻量且高效。
// @description:zh-TW  立即自動跳過 YouTube 廣告。刪除廣告攔截器警告彈出視窗。非常輕巧且高效。
// @description:ja     YouTube 広告を即座に自動的にスキップします。広告ブロッカーの警告ポップアップを削除します。非常に軽量で効率的です。
// @description:ko     YouTube 광고를 즉시 자동으로 건너뜁니다. 광고 차단 경고 팝업을 제거하세요. 매우 가볍고 효율적입니다.
// @description:es     Omita automáticamente los anuncios de YouTube al instante. Elimine la ventana emergente de advertencia del bloqueador de anuncios. Muy ligero y eficiente.
// @description:ru     Автоматически пропускайте рекламу YouTube мгновенно. Удалите всплывающее окно с предупреждением о блокировке рекламы. Очень легкий и эффективный.
// @description:id     Lewati iklan YouTube secara otomatis secara instan. Hapus pop-up peringatan pemblokir iklan. Sangat ringan dan efisien.
// @description:hi     YouTube विज्ञापनों को तुरंत स्वचालित रूप से छोड़ें। विज्ञापन अवरोधक चेतावनी पॉप-अप को हटाएँ। बहुत हल्का और कुशल।
// @author             tientq64
// @icon               https://cdn-icons-png.flaticon.com/64/2504/2504965.png
// @match              https://www.youtube.com/*
// @grant              none
// @license            MIT
// @compatible         firefox
// @compatible         chrome
// @compatible         opera
// @compatible         safari
// @compatible         edge
// @noframes
// ==/UserScript==

function skipAd(): void {
	const player = document.querySelector<HTMLDivElement>('#movie_player')
	let hasAd: boolean = false
	video = null

	if (player) {
		hasAd = player.classList.contains('ad-showing')
		video = player.querySelector<HTMLVideoElement>('video.html5-main-video')
	}

	if (hasAd) {
		const skipButton = document.querySelector<HTMLElement>(`
			.ytp-skip-ad-button,
			.ytp-ad-skip-button,
			.ytp-ad-skip-button-modern
		`)
		if (skipButton) {
			skipButton.click()
			skipButton.remove()
		} else if (video && video.src) {
			video.currentTime = 9999
		}
	}

	if (video) {
		video.addEventListener('pause', handleVideoPause)
		video.addEventListener('mouseup', allowPauseVideo)
	}

	const adBlockerWarningDialog = document.querySelector<HTMLElement>(
		'tp-yt-paper-dialog:has(#feedback.ytd-enforcement-message-view-model)'
	)
	if (adBlockerWarningDialog) {
		adBlockerWarningDialog.remove()
	}

	const adBlockerWarningInner = document.querySelector<HTMLElement>(
		'.yt-playability-error-supported-renderers'
	)
	if (adBlockerWarningInner) {
		if (adBlockerWarningInner) {
			adBlockerWarningInner.remove()
			location.reload()
		}
	}

	const playButton = document.querySelector<HTMLButtonElement>('button.ytp-play-button')
	if (playButton) {
		playButton.addEventListener('click', allowPauseVideo)
	}

	fineScrubbing = document.querySelector<HTMLDivElement>('.ytp-fine-scrubbing')

	const adShortVideos = document.querySelectorAll<HTMLElement>(
		'ytd-reel-video-renderer:has(.ytd-ad-slot-renderer)'
	)
	for (const adShortVideo of adShortVideos) {
		adShortVideo.remove()
	}
}

function allowPauseVideo(): void {
	pausedByUser = true
	window.clearTimeout(allowPauseVideoTimeoutId)
	allowPauseVideoTimeoutId = window.setTimeout(disallowPauseVideo, 500)
}

function disallowPauseVideo(): void {
	pausedByUser = false
	window.clearTimeout(allowPauseVideoTimeoutId)
}

function handleVideoPause(): void {
	if (pausedByUser) {
		disallowPauseVideo()
		return
	}
	if (document.hidden) return
	if (fineScrubbing?.checkVisibility()) return
	if (video) {
		if (video.duration - video.currentTime < 0.1) return
		video.play()
	}
}

function handleGlobalKeyDownAndKeyUp(event: KeyboardEvent): void {
	if (document.activeElement?.matches('input, textarea, select')) return
	const code: string = event.code
	if (event.type === 'keydown') {
		if (code === 'KeyK' || code === 'MediaPlayPause') {
			allowPauseVideo()
		}
	} else {
		if (code === 'Space') {
			allowPauseVideo()
		}
	}
}

let video: HTMLVideoElement | null = null
let fineScrubbing: HTMLDivElement | null = null
let pausedByUser: boolean = false
let allowPauseVideoTimeoutId: number = 0

if (window.MutationObserver) {
	const observer: MutationObserver = new MutationObserver(skipAd)
	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['class', 'src'],
		childList: true,
		subtree: true
	})
} else {
	window.setInterval(skipAd, 500)
}
skipAd()

window.addEventListener('keydown', handleGlobalKeyDownAndKeyUp)
window.addEventListener('keyup', handleGlobalKeyDownAndKeyUp)

const style: HTMLStyleElement = document.createElement('style')
style.textContent = `
	#player-ads,
	#masthead-ad,
	#panels:has(ytd-ads-engagement-panel-content-renderer),
	ytd-ad-slot-renderer,
	ytd-rich-item-renderer:has(.ytd-ad-slot-renderer),
	ytd-reel-video-renderer:has(.ytd-ad-slot-renderer),
	tp-yt-paper-dialog:has(#feedback.ytd-enforcement-message-view-model),
	.yt-mealbar-promo-renderer {
		display: none !important;
	}`
document.head.appendChild(style)
