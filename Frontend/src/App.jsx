import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import UserDashboard from './pages/UserDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BookingHistory from './pages/BookingHistory';
import BookingPage from './pages/BookingPage';
import WorkerSelectionPage from './pages/WorkerSelectionPage';
import ConfirmationPage from './pages/ConfirmationPage';
import EmergencyPage from './pages/EmergencyPage';
import EmergencyWorkerPage from './pages/EmergencyWorkerPage';
import EmergencySuccess from './pages/EmergencySuccess';
import MessagesPage from './pages/MessagesPage';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';

import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/bookings" element={<BookingHistory />} />
        <Route path="/worker-dashboard" element={<WorkerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/workers" element={<WorkerSelectionPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/emergency-worker" element={<EmergencyWorkerPage />} />
        <Route path="/emergency-success" element={<EmergencySuccess />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BookingProvider>
  );
}

export default App;