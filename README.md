# SavvyFi-Inspired Personal Finance App

A full-stack personal finance platform inspired by the SavvyFi smart finance dashboard. The project includes a Next.js web dashboard, an Express + MongoDB API, and a React Native (Expo) mobile client.

## Stack
- **Web**: Next.js (App Router) + Tailwind CSS + Recharts
- **Mobile**: React Native (Expo) + React Navigation
- **API**: Node.js + Express + MongoDB (Mongoose) + JWT auth
- **AI Insights**: API endpoint with simple forecast logic (pluggable for external AI)

## Quick Start

### 1) Backend API
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Web App
```bash
cd frontend
npm install
npm run dev
```

### 3) Mobile App
```bash
cd mobile
npm install
npm run start
```

## Features
- Authentication (email + OAuth placeholders)
- Profile management
- Dashboard with balances, charts, and transactions
- Accounts & cards management
- Budgets & goals with progress and alerts
- AI insights & forecasts
- Transfers, bill pay, and QR pay UI
- Secure JWT sessions

## Environment Variables
See `.env.example` in the `backend` folder for MongoDB connection and JWT secret.
