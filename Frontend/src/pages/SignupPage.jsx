import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') === 'want_to_help' ? 'want_to_help' : 'need_help';
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userType: initialType,
      name: '',
      phone: '',
      email: '',
      password: '',
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
      terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    }),
    onSubmit: async (values, { setFieldError, setSubmitting }) => {
      console.log('Signup Form Data:', values);

      if (!values.userType) {
        setFieldError('email', 'Please select a role (I need help or I want to help)');
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          // Store token and user details for immediate login
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          if (data.user.userType === 'want_to_help') {
            navigate('/worker-dashboard');
          } else {
            navigate('/user-dashboard');
          }
        } else {
          setFieldError('email', data.message || 'Registration failed');
        }
      } catch (error) {
        console.error('Registration Error:', error);
        setFieldError('email', 'Network error. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-on-surface font-body">
      {/* Header / TopAppBar */}
      <header className="w-full px-8 py-6 max-w-7xl mx-auto flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-[#a33f00] tracking-tight font-headline hover:opacity-80 transition-opacity">HomeEase</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-on-surface-variant text-sm font-medium hidden sm:inline">Already have an account?</span>
          <Link to="/login" className="text-primary font-bold border-b-4 border-primary-container pb-0.5 hover:border-primary transition-all">
            Sign In
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center relative px-6 py-12">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-secondary-container opacity-20 organic-blob -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-primary-container opacity-10 organic-blob -z-10"></div>
        
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Editorial Content */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="space-y-4">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 organic-blob text-xs font-bold tracking-wider uppercase">Welcome Home</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight font-headline">
                Let's start your journey.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
                Whether you're looking for a helping hand or offering your skills, you're exactly where you need to be.
              </p>
            </div>
            
            <div className="relative w-full aspect-square rounded-xl overflow-hidden group hidden md:block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Warm sunlit living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOA_fFD_zYPgJrjk0VF9dRmz6Od366AUGP2Jtqs7JQD44AgoRBKw3CYuPb6TyPH3kuEPOJCgMYKLxNZhZII1YfzDUk1YJtJaOs3VRsY9JZBuwa9VL3gdsAzaYNLiMTZcpgQtp8OEyX35TwQEnF4N3NUquukVoDUwxqSPWGrYOoVq616oQNB1c8SDf5eVlAVZ-LwNMdBwgPMMYcce4F0rM3i2I9hU47PF2Ld-n3cvuuWRqPXuT6U6TFeiN0cHO7-4N6-rxBp22tuI"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-surface" alt="person 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOKQPk62uGHMaWGXrIyxYD4wF33EBdtpLCiewudwkmjJzPBH9hC5wrlJyacNLwozejkEuTmQ0cyX3GSzzxz4ZVhinL4V1TzuSnPh51DAtrh6OMfBrKVJOEuTftydO7fXR1SjuBCngJ6IcbD2tutkJ4BI4CT0eZSgzwp9fbNhRsqQFvKFEZHUzOyAnNs5MiPvANucGkKGlLAIjdS-ZeWReyvcltciNqp8PWnNfoScjljCmvLKwhIgPgAmv2ai6GwuNrc4PEo6j1QT4"/>
                    <img className="w-10 h-10 rounded-full border-2 border-surface" alt="person 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuxM1VPmaT_EKXsLYRlfZvd4TJV_XwVaLMFccD1-XLb84TcilutOJqysz-VeKowsPnrC3QmZffS2__1NsF2X-AChn4YFF0rJVy2v9KamuIH4U3vtbmfsn877xBHvy7qNqghVvc84zqChGgFFv6lQveQaUMuHCtfucdpP4WvInFWtloi1PaLuKYWJMZateNWU-7APXmRw7lMRBj4pQM6EzxDofZNaRcYu55Rp0yOoU9Y0x18kNnoBoBz3UrRxyoG_sntdxbPk_RoQ8"/>
                    <img className="w-10 h-10 rounded-full border-2 border-surface" alt="person 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dX7DmRk1qdKpSs0TMdkDbzEt2b19s2t28bFmgjft8wTg4SL-coP8FVM9Kscf1jUGVqWvcL4Ke2PWR7DZoLJ_2iFQ0Gaomk5h5JvZw7b8217ijYjXtcJ3KYA_kv2Bq89xjPHU24RYWqIiwsfZaTThNce4nBuqnMoYfmKcRnTN7XedH1sX-63ObvU8kRAB1LAG_14PXj19Y-95HD5jLezimlwswHU9EGozmiIhlbUejN_-dqJ6VehaFp_HTnzSt3H-vz0AdlYOtgg"/>
                  </div>
                  <p className="text-xs font-semibold text-on-surface">Joined by 2,000+ local neighbors this week</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Interaction Shell */}
          <div className="md:col-span-7">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(73,24,0,0.04)] relative">
              {/* Progress Bar (Subtle) */}
              <div className="flex gap-2 mb-10">
                <div className="h-1.5 w-16 bg-primary rounded-full"></div>
                <div className="h-1.5 w-16 bg-surface-variant rounded-full"></div>
                <div className="h-1.5 w-16 bg-surface-variant rounded-full"></div>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-on-surface tracking-tight font-headline">Create your Account</h2>
                  <p className="text-on-surface-variant">Join the community today.</p>
                </div>
                
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* User Type Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Choice 1: I Need Help */}
                    <button 
                      type="button"
                      onClick={() => formik.setFieldValue('userType', 'need_help')}
                      className={`group relative flex flex-col items-start p-8 rounded-xl text-left transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl active:scale-95 focus:ring-2 focus:ring-primary/20 ${formik.values.userType === 'need_help' ? 'bg-primary/5 border-2 border-primary shadow-lg' : 'bg-surface-container-lowest border-2 border-transparent shadow-sm'}`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${formik.values.userType === 'need_help' ? 'bg-primary text-on-primary' : 'bg-secondary-container text-on-secondary-container group-hover:bg-secondary group-hover:text-white'}`}>
                        <span className="material-symbols-outlined text-3xl">cottage</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-on-surface mb-2 font-headline">I need help</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Find trusted neighbors for cleaning, gardening, or odd jobs around your sanctuary.
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm">
                        {formik.values.userType === 'need_help' ? 'Selected' : 'Select'}
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </div>
                    </button>
                    
                    {/* Choice 2: I Want To Help */}
                    <button 
                      type="button"
                      onClick={() => formik.setFieldValue('userType', 'want_to_help')}
                      className={`group relative flex flex-col items-start p-8 rounded-xl text-left transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl active:scale-95 focus:ring-2 focus:ring-primary/20 ${formik.values.userType === 'want_to_help' ? 'bg-primary/5 border-2 border-primary shadow-lg' : 'bg-surface-container-lowest border-2 border-transparent shadow-sm'}`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${formik.values.userType === 'want_to_help' ? 'bg-primary text-on-primary' : 'bg-tertiary-container text-on-tertiary-container group-hover:bg-tertiary group-hover:text-white'}`}>
                        <span className="material-symbols-outlined text-3xl">handyman</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-on-surface mb-2 font-headline">I want to help</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Share your skills, set your own schedule, and earn while helping your local community.
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm">
                        {formik.values.userType === 'want_to_help' ? 'Selected' : 'Select'}
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </div>
                    </button>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant ml-2 mb-1">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="w-full bg-surface-container-highest border-none rounded-md py-4 px-4 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline-variant"
                        placeholder="John Doe"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-error text-xs ml-2 mt-1">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant ml-2 mb-1">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="w-full bg-surface-container-highest border-none rounded-md py-4 px-4 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline-variant"
                        placeholder="+91 9420 000 000"
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-error text-xs ml-2 mt-1">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant ml-2 mb-1">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="w-full bg-surface-container-highest border-none rounded-md py-4 px-4 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline-variant"
                        placeholder="name@sanctuary.com"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-error text-xs ml-2 mt-1">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant ml-2 mb-1">Password</label>
                      <div className="relative">
                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          className="w-full bg-surface-container-highest border-none rounded-md py-4 pl-4 pr-12 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline-variant"
                          placeholder="••••••••"
                        />
                        <button 
                          type="button" 
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined">
                            {showPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </button>
                      </div>
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-error text-xs ml-2 mt-1">{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-3 ml-2">
                    <input
                      name="terms"
                      type="checkbox"
                      onChange={formik.handleChange}
                      checked={formik.values.terms}
                      className="w-5 h-5 rounded bg-surface-container-highest border-none text-primary focus:ring-primary/30"
                    />
                    <label className="text-sm font-medium text-on-surface-variant">I agree to the Terms of Service</label>
                  </div>
                  {formik.touched.terms && formik.errors.terms ? (
                    <div className="text-error text-xs ml-2 mt-1">{formik.errors.terms}</div>
                  ) : null}

                  {/* Submit */}
                  <button type="submit" className="w-full py-4 bg-primary text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                    Create Account
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </form>

                {/* Quick Social Signup */}
                <div className="pt-6 border-t border-outline-variant/15">
                  <p className="text-center text-sm font-medium text-on-surface-variant mb-6">Or continue with</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button type="button" className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-variant transition-colors font-semibold text-sm">
                      <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xoWXTv8hi-S1gyfygOEd_eN4fcTU-0fBhAHLR41FG-AjphXj7u8CFmdmPjw5Djaywi3DL5c9t1g4uzCFOE1Bk1QkN9ukV_-7lvUB9qQfQTDAWZrMClfG_9Yaqsv5RZSHX6DOhs8AoHqceTieJ2MDsynY5vAQhAuuJxwhXJJxspJgyiRtO7SLu-PGgh-QEvnxmF7MfLrtxITSniKap7O7KShnInqqRA9J0_B-jhUSqFk-X0-wD4p_HOcKJ_SIwpL27nW7E8sv4pY"/>
                      Google
                    </button>
                    <button type="button" className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-variant transition-colors font-semibold text-sm">
                      <img alt="Facebook" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8-nX4LGTZeZC-9zZjATpWBIJA1OS8fXPQdUWLAmCi21Lo2I6zUoom7ANeEyz5OY5_865yhd-bRBlThicgcIn-sVkg803g39D3iz7aAPigQvBu4DTwnYOTyuuFIzcqafFO4THPeiTcxy2CWWbvNkuGsQf3U-p86tTpyh21_6DtTsYmbn6lBwu9X5770yNuu8Z-GXdduyNlhxzYSKagyq723FTX2OcntoFDcmZtYE5GcNuea4jxbk7gvJkWnPCxFGPcyqFhFtXcsg"/>
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-xs font-bold tracking-widest uppercase">Secure ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">favorite</span>
                <span className="text-xs font-bold tracking-widest uppercase">Trusted Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shield_moon</span>
                <span className="text-xs font-bold tracking-widest uppercase">Privacy First</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col items-center gap-6 mt-12 bg-surface-container-low">
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="#">Contact Us</a>
          <a className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors" href="#">Careers</a>
        </div>
        <p className="text-on-surface-variant text-sm font-medium opacity-70">
          © 2024 HomeEase. Crafted for the tactile hearth.
        </p>
      </footer>
    </div>
  );
};

export default SignupPage;
