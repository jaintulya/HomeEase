import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      userType: 'need_help',
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setFieldError, setSubmitting }) => {
      console.log('Login Form Data:', values);
      
      // Validate role selection
      if (!values.userType && values.email !== 'admin@gmail.com') {
        setFieldError('email', 'Please select a role (I need help or I want to help)');
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          // Store token
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          if (data.user.userType === 'admin') {
            navigate('/admin-dashboard');
          } else if (data.user.userType === 'want_to_help') {
            navigate('/worker-dashboard');
          } else {
            navigate('/user-dashboard');
          }
        } else {
          // Determine where to show error based on message
          if (data.message && data.message.toLowerCase().includes('password')) {
            setFieldError('password', data.message);
          } else {
            setFieldError('email', data.message || 'Login failed');
          }
        }
      } catch (error) {
        console.error('Login Error:', error);
        setFieldError('email', 'Network error. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Background Organic Shape Decor */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-container opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container opacity-30 rounded-full blur-3xl"></div>
        
        {/* Login Card */}
        <div className="relative w-full max-w-lg">
          {/* Form Container */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(73,24,0,0.06)] overflow-hidden transition-all duration-300">
            
            {/* Branding Header */}
            <div className="pt-12 pb-8 px-10 text-center">
              <Link to="/" className="inline-flex items-center justify-center w-16 h-16 bg-primary-container rounded-full mb-6 hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
              </Link>
              <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-primary-fixed mb-2">
                <Link to="/" className="hover:opacity-80 transition-opacity">HomeEase</Link>
              </h1>
              <p className="text-on-surface-variant font-medium">Welcome back to your tactile hearth.</p>
            </div>
            
            {/* User/Worker Toggle */}
            <div className="px-10 mb-8">
              <div className="flex p-1 bg-surface-container-high rounded-full">
                <button 
                  type="button"
                  onClick={() => formik.setFieldValue('userType', 'need_help')}
                  className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-all ${formik.values.userType === 'need_help' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  I need help
                </button>
                <button 
                  type="button"
                  onClick={() => formik.setFieldValue('userType', 'want_to_help')}
                  className={`flex-1 py-3 px-4 rounded-full text-sm font-semibold transition-all ${formik.values.userType === 'want_to_help' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  I want to help
                </button>
              </div>
            </div>
            
            {/* Form Fields */}
            <form onSubmit={formik.handleSubmit} className="px-10 pb-12 space-y-6">
              <div className="space-y-1">
                <label className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant ml-2 mb-1">Email Address</label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full bg-surface-container-highest border-none rounded-md py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline-variant" 
                    placeholder="name@sanctuary.com" 
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">mail</span>
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-error text-xs ml-2 mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center ml-2 mb-1">
                  <label className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant">Password</label>
                  <a className="text-xs font-bold text-primary hover:text-primary-dim transition-colors" href="#">Forgot?</a>
                </div>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="w-full bg-surface-container-highest border-none rounded-md py-4 pl-12 pr-12 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline-variant" 
                    placeholder="••••••••" 
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">lock</span>
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
              
              <div className="flex items-center space-x-3 ml-2">
                <input
                  name="remember"
                  type="checkbox"
                  onChange={formik.handleChange}
                  checked={formik.values.remember}
                  className="w-5 h-5 rounded bg-surface-container-highest border-none text-primary focus:ring-primary/30" 
                  id="remember" 
                />
                <label className="text-sm font-medium text-on-surface-variant" htmlFor="remember">Keep me signed in</label>
              </div>
              
              <button type="submit" className="w-full py-4 bg-primary text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                Sign In to My Home
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
              
              <div className="relative flex items-center justify-center py-4">
                <div className="w-full border-t border-outline-variant/20"></div>
                <span className="absolute bg-surface-container-lowest px-4 text-xs font-bold text-outline-variant uppercase tracking-widest">Or continue with</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container rounded-full font-bold text-sm text-on-surface-variant hover:bg-surface-variant transition-colors">
                  <img alt="Google" className="w-5 h-5 grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACS2dXpU9khbq0FqgujTlwU3hrQ-LfpAl8MPxvQcrQ5W1yQgNe_si6A4V8hF0jO5HBmp-mhukjbItrSJvambj-yC_KmJIWtceIHBPVYr7rtABFtXsouJU1rTZcYbMIZ08cMqsXgt_FHw2mY9D5rNOEn1OF5MH1PKKt95HT6d50AO50eHJSQMEsRGYdplvtWWNVGOYtDBqWU1mYPYFuO9jBxhub3ufEjJGnY5ggIZEt8knmKDbnD_d_hYFdnqitqrXEy8jel_ycZVA"/>
                  Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container rounded-full font-bold text-sm text-on-surface-variant hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-lg">ios</span>
                  Apple
                </button>
              </div>
            </form>
            
            {/* Footer Link */}
            <div className="bg-surface-container-low py-6 px-10 text-center">
              <p className="text-sm font-medium text-on-surface-variant">
                New to HomeEase? 
                <Link className="text-primary font-bold underline underline-offset-4 decoration-4 decoration-primary/20 hover:decoration-primary/60 transition-all ml-1" to="/signup">Create an account</Link>
              </p>
            </div>
          </div>
          
          {/* Floating Decorative Element */}
          <div className="absolute -right-12 -top-12 w-32 h-32 hidden lg:block opacity-80">
            <div className="w-full h-full bg-tertiary-container rounded-xl flex items-center justify-center rotate-12 shadow-sm">
              <span className="material-symbols-outlined text-tertiary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Simple Transactional Footer */}
      <footer className="w-full py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <span className="text-sm font-medium text-on-surface-variant/60">© 2024 HomeEase. Crafted for the tactile hearth.</span>
        <div className="flex gap-8">
          <a className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest hover:text-primary transition-colors" href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
