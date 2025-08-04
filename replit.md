# Overview

This is a personal portfolio website for Raghav Rastogi, a Full Stack .NET Developer with 3+ years of experience. The application showcases his professional experience, skills, projects, and provides a contact form for potential employers or collaborators. Built as a modern web application with a React frontend and Express.js backend, it demonstrates expertise in both client-side and server-side development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side is built using **React 18** with **TypeScript** and follows a component-based architecture:

- **Routing**: Uses `wouter` for lightweight client-side routing
- **Styling**: Implements **Tailwind CSS** with a custom dark theme and **shadcn/ui** component library for consistent, professional UI components
- **State Management**: Leverages **TanStack React Query** for server state management and API data fetching
- **Component Structure**: Organized into reusable UI components with a clean separation between layout, business logic, and presentation
- **Build Tool**: **Vite** for fast development and optimized production builds

The frontend follows a single-page application (SPA) pattern with smooth scrolling navigation between sections (Hero, About, Skills, Experience, Projects, Contact).

## Backend Architecture

The server-side uses **Node.js** with **Express.js** in a RESTful API design:

- **Runtime**: Node.js with ES modules (type: "module")
- **API Design**: RESTful endpoints for contact form submission and message retrieval
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging
- **Development Setup**: Hot reloading with tsx for TypeScript execution

## Data Storage

The application uses a **dual storage approach**:

- **Development**: In-memory storage using Map data structures for rapid development and testing
- **Production Ready**: **Drizzle ORM** configured with **PostgreSQL** for production deployment
- **Schema**: Defined in shared TypeScript files with Zod validation for type safety
- **Migration Support**: Drizzle Kit configured for database schema migrations

The storage layer implements an interface pattern (`IStorage`) allowing easy switching between memory and database implementations.

## Database Schema

- **Users Table**: Basic user management with username/password fields
- **Contact Messages Table**: Stores contact form submissions with name, email, subject, message, and timestamp
- **Validation**: Zod schemas ensure data integrity and type safety across client and server

## API Structure

RESTful API endpoints:
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact` - Retrieve contact messages (admin functionality)

All endpoints include proper error handling, input validation, and structured JSON responses.

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives for building the component library
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Modern icon library for consistent iconography
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind CSS

## Development and Build Tools
- **Vite**: Next-generation frontend build tool with hot module replacement
- **TypeScript**: Static type checking for enhanced developer experience and code reliability
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with autoprefixer for browser compatibility

## Backend Framework and Database
- **Express.js**: Minimalist web framework for Node.js API development
- **Drizzle ORM**: Lightweight, type-safe ORM for PostgreSQL integration
- **Neon Database**: Serverless PostgreSQL database solution (@neondatabase/serverless)
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## Form Handling and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## State Management and API
- **TanStack React Query**: Powerful data synchronization for server state management
- **Wouter**: Minimalist routing library for React applications

## Development Experience
- **Replit Integration**: Specialized plugins for Replit development environment including error overlays and cartographer support
- **Date-fns**: Modern JavaScript date utility library for date formatting and manipulation