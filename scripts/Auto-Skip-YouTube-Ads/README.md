# ⏩ Auto Skip YouTube Ads

Automatically skip YouTube ads almost instantly. Remove the ad blocker warning pop-up. Very lightweight and efficient.

几乎立即自动跳过 YouTube 广告。删除广告拦截器警告弹出窗口。非常轻量且高效。

Tự động bỏ qua quảng cáo YouTube gần như ngay lập tức. Loại bỏ cửa sổ bật lên cảnh báo trình chặn quảng cáo. Rất nhẹ và hiệu quả.

## 📑 Changelog

### 4.3.6 - 2024-08-07

- Fix bug where video rewinds a segment after skipping an ad ([#254113][254113]).

### 4.3.4 - 2024-08-02

- Improve the performance.

### 4.2.1 - 2024-07-30

- Fixed video automatically replay when ended.

### 4.2.0 - 2024-07-30

- Videos will now no longer occasionally pause due to ad blocker use.
- Faster ad video skipping speed.

### 4.1.0 - 2024-07-10

- No need to reload the page when the ad blocker warning dialog appears.

### 4.0.0 - 2024-07-09

- The page will now reload if an ad blocker warning dialog appears. Because YouTube now pauses the video at first if an ad blocker is detected.
- Write to the Console every time skip an ad video, etc. Purpose to help debug. To open the Console, press `Ctrl+Shift+J`.

### 3.1.2 - 2024-07-06

- Playing video after clicking dismiss the ad blocker warning popup.

### 3.1.1 - 2024-07-04

- Add a few CSS that hides the ads.

### 3.1.0 - 2024-07-02

- Skip ads faster when the tab is active.
- Fixed bug when set time to end of ad video without the video duration being available.
- Change icon.

### 3.0.2 - 2024-06-28

- Rewriting to only use `setInterval` simplifies things, and fix some bugs.

### 2.1.3 - 2024-06-21

- Fix `popupContainer` not found error.

### 2.1.0 - 2024-06-20

- Auto close YouTube's ad blocker warning popup.

### 2.0.1 - 2024-06-19

- Improved skip ad button detection.
- Fall back to `setInterval` when `MutationObserver` is not supported.

### 2.0.0 - 2024-06-18

- Rewrite the entire code, use `MutationObserver` instead of `setInterval`.

### 1.0.0 - 2024-06-17

- Stable release.

## 💳 Credits

<a href="https://www.flaticon.com/free-icons/youtube" title="youtube icons">Youtube icons created by Ruslan Babkin - Flaticon</a>.

[254113]: https://greasyfork.org/vi/scripts/498197-auto-skip-youtube-ads/discussions/254113
