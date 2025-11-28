'use client';
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { eventAPI } from '@/lib/api';
import Loading from './Loading';




const Upcoming = () => {

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUpcomingEvents();
    }, []);


    const fetchUpcomingEvents = async () => {
        try {
            const response = await eventAPI.getUpcomingEvents(4);
            setUpcomingEvents(response.data);
        } catch (error) {
            // console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Upcoming Events</h2>
                    <p className="text-gray-600 text-center mb-12">
                        Discover amazing events happening near you
                    </p>

                    {loading ?
                    <Loading/>
                    : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {upcomingEvents.map((event) => (
                                <div
                                    key={event._id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <img
                                        src={event.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-5">
                                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                                            {event.category}
                                        </span>
                                        <h3 className="text-lg font-semibold mt-2 mb-2 line-clamp-1">{event.title}</h3>
                                        <p className="text-sm text-gray-500 mb-3 flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {event.location}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-indigo-600 font-bold">${event.price}</span>
                                            <Link
                                                href={`/events/${event._id}`}
                                                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>

    );
};

export default Upcoming;