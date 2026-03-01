# Currency Converter Application

A responsive **Currency Converter** built with **React**, **JavaScript**, and **Tailwind CSS** that allows users to convert amounts between different currencies using real-time exchange rates fetched from a public API.

This project demonstrates integration with external APIs, dynamic state management, and responsive UI design in a frontend web development environment.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Error Handling](#error-handling)
* [Stretch Goals](#stretch-goals)
* [License](#license)


## Features

* **Real-time Exchange Rates**: Fetches live currency exchange rates using a public API.
* **Currency Conversion**: Convert amounts between selected currencies.
* **Exchange Rate Info**: Displays the current exchange rate for the selected currency pair.
* **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices using Tailwind CSS.
* **Reusable Components**: Modular React components for currency selection, input, and conversion result.
* **Error Handling**: User-friendly messages for network errors, invalid API responses, or unsupported currencies.


## Technologies Used

* **Frontend**: React, JavaScript, HTML, CSS
* **Styling**: Tailwind CSS
* **API**: [ExchangeRate-API](https://www.exchangerate-api.com/)
* **Deployment**: Onrender
* **Live Website**: https://currenzy-4hxz.onrender.com/


## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open the app**

Open [http://localhost:5173](http://localhost:5173) in your browser (if using Vite).

---

## Usage

1. Select the **base currency** (currency you want to convert from).
2. Select the **target currency** (currency you want to convert to).
3. Enter the **amount** you want to convert.
4. View the **converted amount** and the **current exchange rate**.


## Error Handling

* Displays alerts if:

  * Network requests fail
  * API responses are invalid
  * Selected currency is unsupported

* Ensures the user experience is smooth even when errors occur.

