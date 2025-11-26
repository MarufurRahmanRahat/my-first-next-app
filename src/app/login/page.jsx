'use client'

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { use, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/';
  
    const { signInUser, signInWithGoogle } = use(AuthContext);
    const notify = () => toast.success('Logged in successfully!');

    const handleLogIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // reset error & success
        setError('');
        setSuccess(false);
        setIsLoading(true);

        signInUser(email, password)
            .then(result => {
                notify();
                setSuccess(true);
                event.target.reset();
                setTimeout(() => {
                    router.push(redirectTo);
                }, 1000);
            })
            .catch(error => {
                console.log('error happened', error.message)
                setError(error.message);
                setIsLoading(false);
            })
    }

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        
        signInWithGoogle()
            .then(result => {
                notify();
                setTimeout(() => {
                    router.push(redirectTo);
                }, 1000);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setIsLoading(false);
            })
    }

    const handleTogglePassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <>
            <Toaster position="top-center" />

            {/* Login Form */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login now!</h1>
                            <p className="text-gray-600">Welcome back to EventHub</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogIn} className="space-y-6">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input 
                                    id="email"
                                    type="email" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" 
                                    name='email' 
                                    placeholder="Enter your email"
                                    ref={emailRef}
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className='relative'>
                                    <input 
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pr-12"
                                        name='password' 
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={handleTogglePassword}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
                                        {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <Link 
                                    href='/forgot-password'
                                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Success Message */}
                            {success && (
                                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                                    Login successful! Redirecting...
                                </div>
                            )}

                            {/* Login Button */}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            {/* Google Sign In Button */}
                            <button 
                                type="button"
                                onClick={handleGoogleSignIn} 
                                disabled={isLoading}
                                className="w-full bg-white text-gray-700 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g>
                                        <path d="m0 0H512V512H0" fill="#fff"></path>
                                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                    </g>
                                </svg>
                                <span>Login with Google</span>
                            </button>
                        </form>

                        {/* Sign Up Link */}
                        <p className="text-center text-gray-600 text-sm mt-6">
                            Don't have an account?{' '}
                            <Link href='/signup' className='text-indigo-600 hover:text-indigo-700 font-semibold transition-colors'>
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;