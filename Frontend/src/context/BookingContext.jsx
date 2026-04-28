import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultBooking = {
  service: null,
  details: {},
  selectedWorker: null,
  status: 'idle',
};

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(() => {
    try {
      const saved = localStorage.getItem('homeease_booking');
      return saved ? JSON.parse(saved) : defaultBooking;
    } catch {
      return defaultBooking;
    }
  });

  useEffect(() => {
    localStorage.setItem('homeease_booking', JSON.stringify(booking));
  }, [booking]);

  const updateBooking = (patch) =>
    setBooking((prev) => ({ ...prev, ...patch }));

  const resetBooking = () => {
    localStorage.removeItem('homeease_booking');
    setBooking(defaultBooking);
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
  return ctx;
};
