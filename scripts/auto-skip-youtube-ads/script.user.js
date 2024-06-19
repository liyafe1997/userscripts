// ==UserScript==
// @name         Auto Skip YouTube Ads
// @name:vi      Tự Động Bỏ Qua Quảng Cáo YouTube
// @namespace    https://github.com/tientq64/userscripts
// @version      2.0.1
// @description  Auto skip YouTube ads instantly. Very lightweight and efficient.
// @description:vi  Tự động bỏ qua quảng cáo YouTube ngay lập tức. Rất nhẹ và hiệu quả.
// @author       https://github.com/tientq64
// @icon         https://cdn-icons-png.flaticon.com/64/9639/9639954.png
// @match        https://www.youtube.com/*
// @grant        none
// @license      MIT
// @noframes
// @homepage     https://github.com/tientq64/userscripts/tree/main/scripts/auto-skip-youtube-ads
// @updateURL    https://github.com/tientq64/userscripts/raw/main/scripts/auto-skip-youtube-ads/script.user.js
// @downloadURL  https://github.com/tientq64/userscripts/raw/main/scripts/auto-skip-youtube-ads/script.user.js
// ==/UserScript==

function skipAd() {
	const hasAd = player.classList.contains('ad-showing')
	if (!hasAd) return
	const skipButton = document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button')
	if (skipButton) {
		skipButton.click()
		return
	}
	const video = player.querySelector('video')
	video.currentTime = video.duration
}
const player = document.querySelector('.html5-video-player')
if (window.MutationObserver) {
	const observer = new MutationObserver(skipAd)
	observer.observe(player, { attributeFilter: ['class'] })
} else {
	setInterval(skipAd, 1000)
}
skipAd()
// TODO: Hide YouTube's AdBlock warning dialog.
const style = document.createElement('style')
style.textContent = `
	#player-ads {
		display: none !important;
	}
`
document.head.appendChild(style)
