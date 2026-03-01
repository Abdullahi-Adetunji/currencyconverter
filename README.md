# 💱 Currenzy - Advanced Currency Converter

**Live Website:** [https://currenzy-4hxz.onrender.com/](https://currenzy-4hxz.onrender.com/)

## 📌 Project Overview
Currenzy is a responsive, feature-rich Currency Converter application built with React, Vite, and modern Tailwind CSS (v4). This project serves as my final Capstone Portfolio Project for the **ALX Software Engineering Program (Front-End Development Track)**. 

Beyond basic conversions, this project demonstrates advanced frontend capabilities including local state persistence, data visualization, complex component architecture, and manual theme management.

## ✨ Key Features

* **Real-Time Exchange Rates:** Fetches live, accurate currency exchange rates via the public ExchangeRate-API.
* **Smart Conversion Engine:** Instantly calculates conversions with a swap feature for seamless bidirectional checking.
* **Favorites Watchlist:** Users can manually "star" their most used currency pairs to save them to a permanent watchlist for 1-click conversions.
* **Conversion History Log:** Automatically saves recent transactions using browser `localStorage`, viewable and manageable on a dedicated History page.
* **Interactive Data Visualization:** Features a 7-day historical trend chart built with `recharts` to visualize currency fluctuations (simulated for the free-tier API).
* **Rate Alerts System:** A simulated notification system that alerts users via a custom UI toast when a currency hits their specific target exchange rate.
* **Light/Dark Theme Toggle:** Fully engineered manual dark mode using Tailwind's `dark:` variant, allowing users to switch aesthetics instantly from the navigation bar.
* **Fully Responsive UI:** A flawless experience across desktop, tablet, and mobile, complete with an animated mobile hamburger dropdown menu.

## 🛠️ Technologies Used

* **Frontend Framework:** React 19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Data Visualization:** Recharts
* **State & Storage:** React Hooks (`useState`, `useEffect`) and Web Storage API (`localStorage`)
* **API:** [ExchangeRate-API](https://www.exchangerate-api.com/)
* **Deployment:** OnRender (Static Site)

## 🚀 Installation & Local Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/currency-converter.git](https://github.com/yourusername/currency-converter.git)
   cd currency-converter

```

2. **Install dependencies:**
```bash
npm install

```


3. **Set up environment variables:**
Create a `.env` file in the root directory and add your API key securely:
```env
VITE_CURRENCY_API_KEY=your_api_key_here

```


4. **Run the development server:**
```bash
npm run dev

```


5. **Open the app:**
Navigate to `http://localhost:5173` in your browser.

## 💻 Usage Guide

1. **Convert:** Select your base and target currencies from the dropdowns, enter an amount, and click "Convert Currency".
2. **Save Favorites:** Click the ⭐ icon next to the convert button to save a pair to your permanent Watchlist. Clicking a pair in your Watchlist instantly loads it into the converter.
3. **Track History:** Navigate to the "History" tab to view a complete log of your past conversions. You can clear this history at any time.
4. **Set Alerts:** Scroll down on the Converter page to set a target rate. If the currency hits that rate, a custom toast notification will appear.
5. **Customize Theme:** Use the half-moon/sun icon in the top navigation bar to toggle between Light and Dark mode.

## 🧠 Engineering Decisions (ALX Defense Notes)

* **Simulated Backend Logic:** To remain strictly within the boundaries of a frontend capstone, the Rate Alerts system utilizes `localStorage` and client-side evaluation to simulate what would traditionally be a Node.js/Cron background worker process.
* **Data Visualization Fallback:** Because free-tier APIs restrict historical endpoints, the `recharts` implementation utilizes a dynamic algorithm to generate a realistic 7-day trendline based on current market rates, ensuring the UI/UX can be fully evaluated without requiring paid API access.

## 📝 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

