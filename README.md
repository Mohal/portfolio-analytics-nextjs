# Personalized Portfolio with Analytics

A modern portfolio built with **Next.js (App Router)**, **TypeScript**, and **TailwindCSS**, featuring integrated **click tracking** and an **Analytics dashboard** to visualize project engagement.  
This project demonstrates full-stack readiness, frontend polish, and data visualization skills.

---

## 🚀 Features

- **Next.js App Router** for modern routing and layouts
- **TailwindCSS** for responsive, utility-first styling
- **Global Layout** with header and footer shared across all pages
- **Pages**:
  - **Home**: Hero section introducing the portfolio
  - **About**: Professional bio and skills grid
  - **Projects**: Responsive project cards with click tracking
  - **Analytics**: Charts (bar + pie) visualizing project clicks
- **Click Tracking**:
  - Records clicks on project links
  - Persists data in `localStorage`
  - Displays click counts under each project card
- **Analytics Dashboard**:
  - Bar chart showing click counts per project
  - Pie chart showing click distribution
  - Built with **Chart.js** + `react-chartjs-2`

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Charts**: Chart.js + react-chartjs-2
- **State Management**: React hooks (`useState`, `useEffect`)
- **Storage**: localStorage (future upgrade: backend/database)

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohal/portfolio-analytics-nextjs.git
   cd portfolio-analytics-nextjs

2. **Install dependencies**
   ```bash
   npm install

3. **Run the development server**
   ```bash
   npm run dev

4. **Open in browser**
   ```bash
   http://localhost:3000

---

## 📊 Usage

- Navigate to **Projects** page → click on "View Project" buttons.
- Each click is tracked and stored in localStorage.
- Navigate to **Analytics** page → view bar and pie charts of project engagement.

---

## 📜 License

This project is open-source and available under the MIT License.