# Personalized Portfolio with Analytics

A modern portfolio built with **Next.js (App Router)**, **TypeScript**, and **TailwindCSS**, featuring integrated **click tracking** and an **Analytics dashboard** to visualize project engagement.  
This project demonstrates full-stack readiness, frontend polish, and data visualization skills.

> ⚠️ Note: This project is to demonstrate full-stack readiness, containerization, and analytics integration. It is intended for local use only — not for production deployment.

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
```markdown
- **Containerization**: Docker + Docker Compose (for reproducible local environments)

## 📛 Badges

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-384d54?style=for-the-badge&logo=docker&logoColor=white)

---

## ⚙️ Setup & Installation

### Option 1: Local Development (Node.js)
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

### Option 2: 🐳 Docker Compose (Recommended)
1. **Build and start the container**
   ```bash
   docker compose up --build

2. **Open in browser**
   ```bash
   http://localhost:3000

3. **Stop containers**
   ```bash
   docker compose down

---

## 📊 Usage

- Navigate to **Projects** page → click on "View Project" buttons.
- Each click is tracked and stored in localStorage.
- Navigate to **Analytics** page → view bar and pie charts of project engagement.