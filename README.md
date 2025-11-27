# EventHub - Event Management Platform

A modern event management application built with Next.js 14 (App Router) and Firebase Authentication.

## Features

- 🎫 Browse and search events
- 🔐 Firebase authentication (Google & Email/Password)
- 📝 Create and manage events (protected routes)
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast and optimized performance

## Tech Stack

- **Frontend:** Next.js 16 (App Router)
- **Authentication:** Firebase Auth
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons


## Routes

### Public Routes
- `/` - Landing page with 7 sections
- `/events` - Event listing page with search and filters
- `/events/[id]` - Event details page
- `/login` - Login page
- `/register` - Registration page

### Protected Routes (Require Authentication)
- `/add-event` - Create new event
- `/manage-events` - Manage all your events


## Features Breakdown

### Landing Page Sections:
1. **Navbar** - Sticky navigation with login/dropdown
2. **Hero** - Main banner with CTAs
3. **Features** - 4 key features with icons
4. **Upcoming Events** - Event cards grid
5. **Stats** - Platform statistics
6. **Testimonials** - User reviews
7. **Footer** - Links and copyright

### Authentication:
- Firebase Google Sign-in
- Email/Password authentication
- Protected routes with automatic redirect
- User dropdown with profile info

### Event Management:
- Create events with rich form
- Upload images (URL)
- Categorize events
- Manage pricing and dates
- Delete events with confirmation

###  **Package.json Dependencies**
`````
 "dependencies": {
    "firebase": "^12.6.0",
    "lucide-react": "^0.554.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0"
  },
`````
## 🎯 Key Features Implemented:

✅ **7 Landing Page Sections** (Navbar, Banner/Hero, Features, Events, Stats, Testimonials, Footer)
✅ **Responsive Design** (Mobile, Tablet, Desktop)
✅ **Firebase Authentication** (Google & Credentials)
✅ **Protected Routes** (Add Event, Manage Events)
✅ **Event Listing** with search and filters
✅ **Event Details** page with full information
✅ **Form Validation** with loading states
✅ **Toast Notifications** for user feedback
✅ **Consistent UI/UX** with hover states
✅ **Clean, Modern Design** with minimal animations
