'use client';
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, MapPin, DollarSign, Upload } from 'lucide-react';
import { eventAPI } from '@/lib/api';
import Loading from '@/components/Loading';
import { AuthContext } from '../context/AuthContext';

export default function AddEventPage() {
  const router = useRouter();
  const { user, loading: authLoading } =use (AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    date: '',
    location: '',
    price: '',
    category: 'Technology',
    imageUrl: ''
  });

   // Check authentication
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/add-event');
    }
  }, [user, authLoading, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const eventData = {
        ...formData,
        creatorEmail: user.email,
        creatorName: user.displayName || 'Anonymous'
      };

      await eventAPI.createEvent(eventData);
      
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      
      // Reset form
      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        date: '',
        location: '',
        price: '',
        category: 'Technology',
        imageUrl: ''
      });

       // Redirect to manage events after 2 seconds
      setTimeout(() => {
        router.push('/manage-events');
      }, 2000);

    } catch (error) {
      console.error('Error creating event:', error);
      alert('Failed to create event. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


   if (authLoading) {
    return (
      <Loading/>
    );
  }


   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
          <p className="text-gray-600 mb-8">Fill in the details to create your event</p>

           <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold mb-2">Event Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                placeholder="Tech Summit 2025"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-semibold mb-2">Short Description *</label>
              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                placeholder="A brief summary (max 100 characters)"
              />
              <p className="text-sm text-gray-500 mt-1">{formData.shortDescription.length}/100</p>
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Description *</label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                placeholder="Detailed event description..."
              />
            </div>

            {/* Date and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Event Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                >
                  <option>Technology</option>
                  <option>Entertainment</option>
                  <option>Food</option>
                  <option>Business</option>
                  <option>Arts</option>
                  <option>Sports</option>
                </select>
              </div>
            </div>

            {/* Location and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    placeholder="San Francisco, CA"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Price *</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    placeholder="299"
                  />
                </div>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-semibold mb-2">Image URL (Optional)</label>
              <div className="relative">
                <Upload className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Event...' : 'Create Event'}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-bounce">
          Event created successfully! Redirecting...
        </div>
      )}
    </div>
  );
}


