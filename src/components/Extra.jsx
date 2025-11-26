import React from 'react';

const Extra = () => {
    return (
        <div>
            <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Create Your Next Event?
                    </h2>
                    <p className="text-xl mb-8 text-indigo-100">
                        Join thousands of organizers who trust EventHub for their events
                    </p>
                    <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg">
                        Get Started Free
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Extra;