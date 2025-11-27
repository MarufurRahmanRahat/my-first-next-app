import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
         <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create Unforgettable Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            The all-in-one platform for managing events, selling tickets, and engaging attendees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events"><button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Browse Events
            </button></Link>
            <Link href="/add-event"><button className="px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors border border-indigo-400">
              Create Event
            </button></Link>
          </div>
        </div>
      </section>
    );
};

export default Banner;