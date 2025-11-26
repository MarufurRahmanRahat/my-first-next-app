import { Star } from 'lucide-react';
import React from 'react';

const Review = () => {
    const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Organizer",
      content: "This platform transformed how we manage our corporate events. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Conference Planner",
      content: "The best event management tool I've used. Simple, powerful, and reliable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Our event attendance increased by 40% since we started using this platform.",
      rating: 5
    }
  ];
    return (
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-gray-600 text-center mb-12">
            Join thousands of satisfied event organizers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Review;