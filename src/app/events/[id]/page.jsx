'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Ticket } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { eventAPI } from '@/lib/api';
import Loading from '@/components/Loading';


export default function EventDetailsPage() {
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      fetchEvent();
    }
  }, [params.id]);


  const fetchEvent = async () => {
    try {
      const response = await eventAPI.getEventById(params.id);
      setEvent(response.data);
    } catch (error) {
      console.error('Error fetching event:', error);
      setError('Event not found');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    <Loading/>
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
          <Link href="/events" className="text-indigo-600 hover:text-indigo-700">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }


   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={event.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop'}
          alt={event.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-8 left-8">
          <Link
            href="/events"
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Events</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
              {event.category}
            </span>
            <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">{event.fullDescription}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-indigo-600 mb-2">${event.price}</div>
                <p className="text-gray-500">per ticket</p>
              </div>

              <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center space-x-2 mb-6">
                <Ticket className="w-5 h-5" />
                <span>Buy Tickets</span>
              </button>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}