import React from 'react';

const Stats = () => {
     const stats = [
    { number: "10K+", label: "Events Hosted" },
    { number: "500K+", label: "Happy Attendees" },
    { number: "50+", label: "Countries" },
    { number: "98%", label: "Satisfaction Rate" }
  ];
    return (
         <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Stats;