# 🏠 HomeEase – Emergency Domestic Help Platform

## 📌 Overview

HomeEase is a web application that helps households quickly find and book domestic workers (maids, cooks, babysitters) during emergencies or for scheduled tasks.

The platform brings structure to an unorganized sector by providing **instant access, verified workers, and a smooth booking system**.

---

## 🚨 Problem

Households relying on domestic help face sudden disruption when workers quit without notice.
There is no reliable system to provide **immediate replacement**, leading to stress and inefficiency.

---

## 💡 Solution

HomeEase provides a **centralized platform** where users can:

* Find nearby available workers
* Book instantly (emergency mode)
* Schedule services in advance
* View ratings and profiles

---

## 🎯 Key Features

### 👤 User (Household)

* Search & filter workers (type, rating, availability)
* Emergency booking (instant)
* Scheduled booking
* Worker profile view
* Booking history & rebook
* Ratings & reviews

---

### 👨‍🍳 Worker

* Registration with skills & experience
* Availability toggle (Available/Busy)
* Accept/Reject job requests
* Earnings dashboard
* Profile management

---

### 🛠️ Admin

* Dashboard (users, workers, bookings)
* Worker verification
* Complaint management

---

## 🧭 User Flow

### User Flow

Login → Dashboard → Search Workers → View Profile → Book → Confirmation

### Worker Flow

Login → Set Availability → Receive Request → Accept → Complete Job

### Admin Flow

Login → Dashboard → Manage System

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Material UI (MUI)

### State Management

* Redux Toolkit

### Forms & Validation

* Formik + Yup

### API Handling

* Axios

---

## 📂 Folder Structure

```bash
src/
│
├── components/
├── pages/
├── features/
├── services/
├── hooks/
├── utils/
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication & Routing

* Protected routes for logged-in users
* Role-based access (User / Worker / Admin)

---

## 🎨 UI/UX Highlights

* Responsive design (mobile-friendly)
* Skeleton loaders, empty states, error states
* Light/Dark mode (stored in localStorage)

---
## 🎨 UI/UX Design (Figma Prototype)

🔗 **Figma Prototype Link:**
https://www.figma.com/proto/adYtyU8zPOoO1hOih9ppAs/Untitled?node-id=334-6475&p=f&viewport=266%2C284%2C0.09&t=GIwsr7ebigfiLYpM-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=341%3A6476


## ⚡ Performance Optimization

* Lazy loading (React.lazy)
* Memoization (useMemo, useCallback)

---

## 💾 Storage Usage

### localStorage

* Auth token
* Theme preference

### sessionStorage

* Temporary booking form data

---

## 🔔 Notifications

* Toast notifications for booking success, errors, and updates

---

## 📂 File Upload

* Worker uploads ID proof and profile image

---

## ❗ Error Handling

* Global error UI
* Error boundaries
* API error handling

---

## 🚀 Setup Instructions

```bash
git clone <repo-url>
npm install
npm run dev
```

---

## 📈 Future Scope

* Mobile app
* Real-time tracking
* Subscription plans
* Expansion to multiple cities

---

## 📌 Conclusion

HomeEase solves a real-world household problem by providing a structured and reliable system for emergency domestic help. It improves convenience, reduces stress, and organizes an unstructured service sector.

---
