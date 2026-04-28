import React, { useState } from 'react';
import WorkerCard from './WorkerCard';
import Button from './Button';

const MOCK_WORKERS = [
  {
    id: 'w1', name: 'Priya Sharma', rating: 4.9, reviews: 132, experience: 5, price: 350,
    avatar: 'https://i.pravatar.cc/150?img=47',
    badges: ['Background Verified', 'Top Rated'],
    services: ['cleaning', 'cooking'],
  },
  {
    id: 'w2', name: 'Ramesh Kumar', rating: 4.7, reviews: 89, experience: 8, price: 400,
    avatar: 'https://i.pravatar.cc/150?img=12',
    badges: ['Background Verified', '8 Yrs Exp'],
    services: ['plumbing', 'appliance_repair'],
  },
  {
    id: 'w3', name: 'Sunita Devi', rating: 4.8, reviews: 104, experience: 4, price: 320,
    avatar: 'https://i.pravatar.cc/150?img=32',
    badges: ['Certified', 'Top Rated'],
    services: ['cleaning', 'babysitting', 'cooking'],
  },
  {
    id: 'w4', name: 'Arjun Mehta', rating: 4.6, reviews: 76, experience: 6, price: 450,
    avatar: 'https://i.pravatar.cc/150?img=53',
    badges: ['Electrician Cert.', 'Background Verified'],
    services: ['electrician', 'ac_repair'],
  },
  {
    id: 'w5', name: 'Kavitha Nair', rating: 5.0, reviews: 58, experience: 3, price: 300,
    avatar: 'https://i.pravatar.cc/150?img=45',
    badges: ['Top Rated', 'Gardening Pro'],
    services: ['gardening', 'cleaning'],
  },
  {
    id: 'w6', name: 'Deepak Rao', rating: 4.5, reviews: 95, experience: 10, price: 500,
    avatar: 'https://i.pravatar.cc/150?img=15',
    badges: ['Senior Technician', 'AC Specialist'],
    services: ['ac_repair', 'electrician', 'appliance_repair'],
  },
];

const WorkerList = ({ serviceId, selected, onSelect }) => {
  const [sortBy, setSortBy] = useState('rating');

  const filtered = MOCK_WORKERS.filter((w) =>
    w.services.includes(serviceId)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'experience') return b.experience - a.experience;
    return 0;
  });

  const handleAutoAssign = () => {
    const best = sorted[0];
    if (best) onSelect(best);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-on-surface-variant font-medium">
          {sorted.length} worker{sorted.length !== 1 ? 's' : ''} available for your schedule
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-on-surface-variant">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-1.5 text-xs font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="rating">Best Rated</option>
              <option value="price">Lowest Price</option>
              <option value="experience">Most Experience</option>
            </select>
          </div>
          <Button variant="secondary" size="sm" icon="auto_awesome" onClick={handleAutoAssign}>
            Auto-Assign Best
          </Button>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-16 text-on-surface-variant">
          <span className="material-symbols-outlined text-5xl block mb-3">person_off</span>
          <p className="font-semibold">No workers available for this service right now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((worker) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              isSelected={selected?.id === worker.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkerList;
