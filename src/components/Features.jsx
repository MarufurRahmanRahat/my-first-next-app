import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import React from 'react';

const Features = () => {
    const features = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Easy Event Creation",
            description: "Create and manage events in minutes with our intuitive interface"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Attendee Management",
            description: "Track registrations and manage attendees effortlessly"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Location Tracking",
            description: "Add venue details and interactive maps for easy navigation"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Real-time Updates",
            description: "Keep attendees informed with instant notifications"
        }
    ];
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose EventHub?</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Everything you need to create, manage, and promote successful events
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-indigo-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;