# ⏩ Auto Skip YouTube Ads

Auto skip YouTube ads almost instantly. Very lightweight and efficient.

Tự động bỏ qua quảng cáo YouTube gần như ngay lập tức. Rất nhẹ và hiệu quả.

## 🎁 Support me

[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/tientq64)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/tientq64)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/tientq64)

## 📑 Changelog

### 3.1.1 (2024-07-04)

#### 🛠 Improvements

- Add a few CSS that hides the ads.

### 3.1.0 (2024-07-02)

#### ✨ Features

- Skip ads faster when the tab is active.

#### 🐛 Bug Fixes

- Fixed bug when set time to end of ad video without the video duration being available.

#### 🎨 Style

- Change icon.

### 3.0.2 (2024-06-28)

#### ♻️ Refactoring

- Rewriting to only use `setInterval` simplifies things, and fix some bugs.

### 2.1.3 (2024-06-21)

#### 🐛 Bug Fixes

- Fix `popupContainer` not found error.

### 2.1.0 (2024-06-20)

#### ✨ Features

- Auto close YouTube's ad blocker warning popup.

### 2.0.1 (2024-06-19)

#### 🛠 Improvements

- Improved skip ad button detection.
- Fall back to `setInterval` when `MutationObserver` is not supported.

### 2.0.0 (2024-06-18)

#### ♻️ Refactoring

- Rewrite the entire code, use `MutationObserver` instead of `setInterval`.

### 1.0.0 (2024-06-17)

#### 🔖 Release

- Stable release.
