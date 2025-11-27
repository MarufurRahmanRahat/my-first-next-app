'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, Users, Target, Award, Heart, Shield, Zap, Globe } from 'lucide-react';

export default function AboutPage() {
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Passion for Events",
            description: "We believe in the power of events to bring people together and create meaningful connections."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Trust & Security",
            description: "Your data security and privacy are our top priorities. We ensure safe and secure transactions."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "We constantly evolve our platform with cutting-edge technology to enhance your experience."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Reach",
            description: "Connect with events and people worldwide, breaking geographical boundaries."
        }
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            bio: "Passionate about connecting people through memorable events."
        },
        {
            name: "Michael Chen",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            bio: "Tech enthusiast driving innovation in event management."
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            bio: "Ensuring seamless event experiences for all users."
        },
        {
            name: "David Kim",
            role: "Head of Marketing",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            bio: "Spreading the word about amazing events worldwide."
        }
    ];

    const stats = [
        { number: "10K+", label: "Events Hosted" },
        { number: "500K+", label: "Happy Users" },
        { number: "50+", label: "Countries" },
        { number: "98%", label: "Success Rate" }
    ];

    const milestones = [
        { year: "2020", event: "EventHub Founded", description: "Started with a vision to revolutionize event management" },
        { year: "2021", event: "Reached 1K Events", description: "Achieved our first major milestone of hosting 1,000 events" },
        { year: "2022", event: "Global Expansion", description: "Expanded operations to 20+ countries worldwide" },
        { year: "2023", event: "100K Users", description: "Celebrated crossing 100,000 registered users" },
        { year: "2024", event: "AI Integration", description: "Launched AI-powered event recommendations" },
        { year: "2025", event: "Industry Leader", description: "Recognized as the leading event management platform" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">


            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About EventHub</h1>
                    <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                        We're on a mission to make event management simple, accessible, and enjoyable for everyone.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Target className="w-12 h-12 text-indigo-600 mr-4" />
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To empower event organizers and attendees worldwide by providing a seamless, innovative platform
                                that connects people through unforgettable experiences. We strive to make every event a success,
                                from small gatherings to large-scale conferences.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Award className="w-12 h-12 text-indigo-600 mr-4" />
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To become the world's most trusted and comprehensive event management platform,
                                fostering global connections and creating opportunities for communities to thrive through
                                shared experiences and meaningful interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-indigo-200 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                            >
                                <div className="text-indigo-600 mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story  */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
                        <p className="text-gray-600 text-lg">From humble beginnings to industry leadership</p>
                    </div>

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-24 md:w-32">
                                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center font-bold">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-xl shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                                    <p className="text-gray-600">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 text-lg">
                            Passionate individuals dedicated to your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Create Amazing Events?
                    </h2>
                    <p className="text-xl mb-8 text-indigo-100">
                        Join thousands of organizers who trust EventHub
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/events"
                            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Browse Events
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors border border-indigo-400"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
}