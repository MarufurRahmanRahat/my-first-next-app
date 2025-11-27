const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Generic API call function
async function apiCall(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


// Event API calls
export const eventAPI = {
  // Get all events
  getAllEvents: async (search = '', category = 'all') => {
    let endpoint = '/events';
    const params = new URLSearchParams();
    
    if (search) params.append('search', search);
    if (category !== 'all') params.append('category', category);
    
    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }
    
    return apiCall(endpoint);
  },

  // Get upcoming events (limited)
  getUpcomingEvents: async (limit = 4) => {
    return apiCall(`/events?limit=${limit}`);
  },


  // Get single event
  getEventById: async (id) => {
    return apiCall(`/events/${id}`);
  },

  // Get user's events
  getUserEvents: async (email) => {
    return apiCall(`/events/user/${email}`);
  },

  // Create event
  createEvent: async (eventData) => {
    return apiCall('/events', {
      method: 'POST',
      body: JSON.stringify(eventData),
    });
  },


  // Update event
  updateEvent: async (id, eventData) => {
    return apiCall(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(eventData),
    });
  },

  // Delete event
  deleteEvent: async (id) => {
    return apiCall(`/events/${id}`, {
      method: 'DELETE',
    });
  },
};

// User API calls
export const userAPI = {
  // Create or update user
  saveUser: async (userData) => {
    return apiCall('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Get user by email
  getUserByEmail: async (email) => {
    return apiCall(`/users/${email}`);
  },
};
