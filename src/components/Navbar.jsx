'use client'
import { AuthContext } from '@/app/context/AuthContext';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React, { use, useState } from 'react';

const Navbar = () => {

    const { user, signOutUSer } = use(AuthContext)

    const handleSignOut = () => {
        signOutUSer()
            .then(() => {

            })
            .catch(error => {
                // console.log(error)
            })
    }


    const links = <>
        <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
        <Link href="/events" className="text-gray-700 hover:text-indigo-600 transition-colors">Events</Link>
        <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
    </>

    const mobileLinks = <>
        <Link href="/" className="block py-2 text-gray-700">Home</Link>
        <Link href="/events" className="block py-2 text-gray-700">Events</Link>
        <Link href="/about" className="block py-2 text-gray-700">About</Link>
        <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
    </>

    
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-8 h-8 text-indigo-600" />
                            <span className="text-2xl font-bold text-gray-900">EventHub</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">

                            {links}
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                                    >
                                        <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center">
                                            <span><img className="rounded-full w-8 h-8 text-sm font-semibold" src={`${user.photoURL}`}></img></span>
                                        </div>
                                        <span>{`${user.displayName}`}</span>
                                    </button>

                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                                            <div className="px-4 py-2 border-b">
                                                <p className="font-semibold">{`${user.displayName}`}</p>
                                                <p className="text-sm text-gray-500">{`${user.email}`}</p>
                                            </div>
                                            <Link href="/add-event" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Add Event</Link>
                                            <Link href="/manage-events" className="block px-4 py-2 hover:bg-gray-50 transition-colors">Manage Events</Link>
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600 transition-colors"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex space-x-3">
                                    <Link href="/login">
                                    <button
                                        className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                    >
                                        Login
                                    </button></Link>
                                    <Link href="/register"><button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                        Register
                                    </button></Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2"
                        >
                            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                            <div className="w-6 h-0.5 bg-gray-600"></div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4">
                            {mobileLinks}
                            {!user && (
                                <div className="mt-4 space-y-2">
                                    <button className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg">
                                        Login
                                    </button>
                                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg">
                                        Register
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;