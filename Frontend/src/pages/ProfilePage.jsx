import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Button from '../components/Button';
import Input from '../components/Input';

const Section = ({ icon, title, children }) => (
  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-6 space-y-5">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      <h2 className="font-extrabold text-on-surface">{title}</h2>
    </div>
    {children}
  </div>
);

const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

const ProfilePage = () => {
  const saved = JSON.parse(localStorage.getItem('homeease_profile') || '{}');

  const [editing, setEditing]       = useState(false);
  const [saved_ok, setSavedOk]      = useState(false);
  const [pwSaved, setPwSaved]       = useState(false);

  // Basic Info
  const [name,   setName]   = useState(saved.name   || '');
  const [gender, setGender] = useState(saved.gender || '');
  const [age,    setAge]    = useState(saved.age    || '');

  // Contact
  const [phone,  setPhone]  = useState(saved.phone  || '');
  const [email,  setEmail]  = useState(saved.email  || '');

  // Address
  const [address, setAddress] = useState(
    saved.address || localStorage.getItem('userAddress') || ''
  );

  // Password
  const [curPw,    setCurPw]    = useState('');
  const [newPw,    setNewPw]    = useState('');
  const [confPw,   setConfPw]   = useState('');
  const [pwErrors, setPwErrors] = useState({});

  const handleSave = () => {
    const profile = { name, gender, age, phone, email, address };
    localStorage.setItem('homeease_profile', JSON.stringify(profile));
    localStorage.setItem('userAddress', address);
    setEditing(false);
    setSavedOk(true);
    setTimeout(() => setSavedOk(false), 3500);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    const errs = {};
    if (!curPw)                         errs.curPw  = 'Enter your current password';
    if (newPw.length < 6)               errs.newPw  = 'Password must be at least 6 characters';
    if (newPw !== confPw)               errs.confPw = 'Passwords do not match';
    if (Object.keys(errs).length) { setPwErrors(errs); return; }
    setPwErrors({});
    setCurPw(''); setNewPw(''); setConfPw('');
    setPwSaved(true);
    setTimeout(() => setPwSaved(false), 3500);
  };

  const fieldClass = (active) =>
    `w-full bg-surface-container-low border rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${!active ? 'opacity-60 cursor-not-allowed' : 'border-outline-variant/40'}`;

  return (
    <DashboardLayout activeRoute="profile">
      <div className="max-w-5xl mx-auto px-4 py-8 animate-page-fade-in space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface font-headline">My Profile</h1>
            <p className="text-on-surface-variant text-sm mt-1">Manage your account and preferences</p>
          </div>
          {!editing ? (
            <Button variant="secondary" icon="edit" onClick={() => setEditing(true)}>Edit Profile</Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => setEditing(false)}>Cancel</Button>
              <Button icon="save" onClick={handleSave}>Save Changes</Button>
            </div>
          )}
        </div>

        {/* Save success banner */}
        {saved_ok && (
          <div className="flex items-center gap-3 bg-secondary-container/40 border border-secondary-container text-on-surface rounded-2xl px-5 py-3 animate-page-fade-in">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="text-sm font-semibold">Profile saved successfully!</span>
          </div>
        )}

        {/* Section 1: Basic Info */}
        <Section icon="person" title="Basic Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Input id="p-name" label="Full Name" icon="badge" value={name}
                disabled={!editing}
                onChange={e => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-on-surface">Gender</label>
              <select
                value={gender}
                disabled={!editing}
                onChange={e => setGender(e.target.value)}
                className={fieldClass(editing)}
              >
                <option value="">Select gender</option>
                {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <Input id="p-age" label="Age" type="number" icon="cake" value={age}
              disabled={!editing}
              onChange={e => setAge(e.target.value)}
              placeholder="Your age"
            />
          </div>
        </Section>

        {/* Section 2: Contact */}
        <Section icon="contact_phone" title="Contact Details">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input id="p-phone" label="Phone Number" icon="phone" type="tel" value={phone}
              disabled={!editing}
              onChange={e => setPhone(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
            />
            <Input id="p-email" label="Email Address" icon="email" type="email" value={email}
              disabled={!editing}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
        </Section>

        {/* Section 3: Address */}
        <Section icon="home_pin" title="Address">
          <Input id="p-address" label="Home Address" icon="location_on" value={address}
            disabled={!editing}
            onChange={e => setAddress(e.target.value)}
            placeholder="Your home / service address"
          />
          <p className="text-xs text-on-surface-variant italic">
            This address is auto-used when you book a service.
          </p>
        </Section>

        {/* Section 4: Change Password */}
        <Section icon="lock" title="Change Password">
          {pwSaved && (
            <div className="flex items-center gap-3 bg-secondary-container/40 border border-secondary-container text-on-surface rounded-xl px-4 py-3 animate-page-fade-in">
              <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-sm font-semibold">Password updated successfully!</span>
            </div>
          )}
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <Input id="p-curpw" label="Current Password" icon="key" type="password"
              value={curPw} onChange={e => { setCurPw(e.target.value); setPwErrors(p => ({ ...p, curPw: undefined })); }}
              error={pwErrors.curPw}
              placeholder="Enter current password"
            />
            <Input id="p-newpw" label="New Password" icon="lock_reset" type="password"
              value={newPw} onChange={e => { setNewPw(e.target.value); setPwErrors(p => ({ ...p, newPw: undefined })); }}
              error={pwErrors.newPw}
              placeholder="At least 6 characters"
            />
            <Input id="p-confpw" label="Confirm New Password" icon="check_circle" type="password"
              value={confPw} onChange={e => { setConfPw(e.target.value); setPwErrors(p => ({ ...p, confPw: undefined })); }}
              error={pwErrors.confPw}
              placeholder="Re-enter new password"
            />
            <div className="flex justify-end">
              <Button type="submit" variant="secondary" icon="lock">Update Password</Button>
            </div>
          </form>
        </Section>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
