# 🏠 HomeEase – Premium Emergency Domestic Help Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

🔗 **Live Demo: [homeease-tulya.vercel.app](https://homeease-tulya.vercel.app/)**

## 📌 Overview

**HomeEase** is a sophisticated web application built to revolutionize the domestic service industry. It serves as a digital bridge connecting households with verified professional workers (maids, cooks, babysitters) through a "Tactile Hearth" design philosophy—balancing modern efficiency with a warm, household-centric aesthetic.

The platform is engineered to handle both **Emergency Domestic Replacements** and **Planned Service Schedules**, ensuring that no household is left without help when they need it most.

---

## 🏗️ Technical Architecture

### Core Frontend Logic
*   **Framework**: React (Vite-powered) for ultra-fast performance.
*   **State Management**: 
    *   **Context API**: `BookingContext` manages complex multi-step booking flows and global states.
    *   **Persistent Storage**: Robust `localStorage` integration for authentication tokens, user profile persistence, and theme preferences.
*   **Routing**: Sophisticated `react-router-dom` implementation with role-based navigation paths for Users and Workers.

### Component-Driven Design
The project follows an atomic design approach with highly reusable components:
*   **Layouts**: `DashboardLayout` provides a unified structural skeleton with responsive sidebars and headers.
*   **UI Kit**: Custom-built `Button`, `Input`, `Card`, and `ConfirmModal` components with consistent accessibility and micro-interactions.
*   **Specialized Widgets**: `WorkerCard`, `ServiceSelector`, `StepProgress`, and `WorkSizeSelector` for intuitive user interactions.

---

## 🎯 Key User Modules

### 👤 User (Household) Ecosystem
*   **Dynamic Dashboard**: High-level overview of active bookings and personalized recommendations.
*   **Emergency Mode**: A dedicated "Quick Help" system for instant worker assignment.
*   **Multi-Step Booking**: A structured flow involving worker selection, service detailing, and confirmation.
*   **History & Rebooking**: Dedicated history page to track past engagements and quickly re-hire trusted professionals.
*   **Tactile Profile**: Comprehensive profile management with detailed 4-point address validation.

### 👨‍🍳 Worker (Professional) Ecosystem
*   **Professional Dashboard**: Visualizes earnings, active jobs, and pending requests.
*   **Job Request Portal**: Real-time interface to accept or reject service requests.
*   **Verification Portal**: Integrated document upload system for ID proofs and photos to earn the "Verified Badge."
*   **Earnings Analytics**: Detailed tracking of income trends and job completions.


---

## 🎨 UI/UX Excellence

*   **Tactile Hearth Theme**: A premium color palette using rich oranges (`#a33f00`) and high-contrast typography (`#111827`, `#374151`) to ensure a warm yet professional feel.
*   **Responsive Flow**: Optimized for all devices, from mobile phones to high-resolution desktops, using a sophisticated Tailwind grid system.
*   **Accessibility First**: Optimized color contrast, semantic HTML, and clear visual feedback (Skeleton loaders, Success banners).
*   **Micro-animations**: Subtle transitions and hover effects that make the interface feel alive and interactive.

---

## 📂 Directory Analysis

```bash
src/
├── components/     # UI Building Blocks (Navbar, Footer, Service Cards)
├── context/        # State Management (BookingContext)
├── pages/          # Full-Page Modules (Dashboards, Booking Flow, Profiles)
├── assets/         # Static Media and Icons
├── index.css       # Global Design Tokens and Tailwind Directives
└── App.jsx         # Routing Architecture & Provider Configuration
```

---

## 🔐 Security & Data Integrity

*   **Encrypted State**: Passwords and sensitive data are managed with rigorous validation using **Formik + Yup**.
*   **Session Guard**: Implemented logic to ensure stale state synchronization, particularly during password updates and profile changes.
*   **Verification Standard**: Multi-point document upload system to maintain the highest trust standards for domestic workers.

---

## 📡 API Documentation

The project includes a comprehensive Postman collection for backend testing and integration.
*   **Production API**: [https://homeease-8cv9.onrender.com](https://homeease-8cv9.onrender.com)
*   **Postman Collection Link**: [View on Postman](https://tulya-jain-cg-7399319.postman.co/workspace/433d93db-3a63-4eb4-82b1-980b84f711f3/collection/52084195-ab6539b3-974e-4c8f-a0c2-76697236363a?action=share&source=copy-link&creator=52084195)


---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v16.x or higher)
*   npm or yarn

### Installation & Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/jaintulya/HomeEase.git
    cd HomeEase
    ```

2.  **Backend Setup**:
    ```bash
    cd Backend
    npm install
    npm start  # Runs on http://localhost:5000
    ```

3.  **Frontend Setup**:
    ```bash
    cd ../Frontend
    npm install
    npm run dev  # Runs on http://localhost:5173
    ```

---

## 📈 Future Roadmap
*   **Mobile App Expansion**: Porting the React logic to React Native.
*   **Real-time Tracking**: GPS-based tracking for emergency worker arrival.
*   **Subscription Models**: Premium tiers for priority booking and insurance coverage.
*   **AI Matching**: Smarter worker-user matching based on history and proximity.

---

## 📌 Project Conclusion
HomeEase transforms the fragmented domestic help industry into a reliable, professional service hub. By combining **modern UI aesthetics** with **robust verification and instant accessibility**, it brings peace of mind to the modern household.

---

## 🎨 Design & Prototype (Figma)
You can explore the high-fidelity design system and interactive prototype for HomeEase here:
🔗 **[Figma Prototype Link](https://www.figma.com/proto/adYtyU8zPOoO1hOih9ppAs/Untitled?node-id=334-6475&p=f&viewport=-1421%2C86%2C0.4&t=e4ToDCcNSB7Kx3A2-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=341%3A6476)**
