'use client';
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, Trash2, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { eventAPI } from '@/lib/api';
import { AuthContext } from '../context/AuthContext';
import Loading from '@/components/Loading';


export default function ManageEventsPage() {
    const router = useRouter();
    const { user, loading: authLoading } = use(AuthContext);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    // Check authentication
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login?redirect=/manage-events');
        } else if (user) {
            fetchUserEvents();
        }
    }, [user, authLoading, router]);
    const fetchUserEvents = async () => {
        try {
            const response = await eventAPI.getUserEvents(user.email);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };


    const handleDelete = (eventId) => {
        setEventToDelete(eventId);
        setShowDeleteModal(true);
    };
    const confirmDelete = async () => {
        try {
            await eventAPI.deleteEvent(eventToDelete);
            setEvents(events.filter(event => event._id !== eventToDelete));
            setShowDeleteModal(false);
            setEventToDelete(null);
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Failed to delete event');
        }
    };

    if (authLoading || loading) {
        return (
           <Loading/>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Manage Events</h1>
                            <p className="text-gray-600">View and manage all your events</p>
                        </div>
                        <Link
                            href="/add-event"
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                        >
                            Add New Event
                        </Link>
                    </div>
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold">Event</th>
                                    <th className="text-left py-4 px-4 font-semibold">Date</th>
                                    <th className="text-left py-4 px-4 font-semibold">Location</th>
                                    <th className="text-left py-4 px-4 font-semibold">Price</th>
                                    <th className="text-left py-4 px-4 font-semibold">Status</th>
                                    <th className="text-right py-4 px-4 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr key={event._id} className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="font-semibold">{event.title}</p>
                                                <p className="text-sm text-gray-500">{event.category}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-gray-700">{event.date}</td>
                                        <td className="py-4 px-4 text-gray-700">{event.location}</td>
                                        <td className="py-4 px-4 font-semibold text-indigo-600">${event.price}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.status === 'Active'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {event.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex justify-end space-x-2">
                                                <Link
                                                    href={`/events/${event._id}`}
                                                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(event._id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {events.map((event) => (
                            <div key={event._id} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-semibold text-lg">{event.title}</h3>
                                        <span className="text-xs text-gray-500">{event.category}</span>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.status === 'Active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {event.status}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {event.location}
                                    </div>
                                    <div className="text-indigo-600 font-semibold">${event.price}</div>
                                </div>

                                <div className="flex space-x-2">
                                    <Link
                                        href={`/events/${event._id}`}
                                        className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center text-sm font-medium"
                                    >
                                        View
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(event._id)}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {events.length === 0 && (
                        <div className="text-center py-12">
                            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">No events found</p>
                            <p className="text-gray-400 mt-2">Create your first event to get started</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this event? This action cannot be undone.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}