# User Dashboard - Swachhta Saathi

A modern waste management dashboard for users, built with Next.js, React, and Tailwind CSS. This dashboard provides features for tracking waste collection, reporting illegal dumping, finding facilities, and managing environmental impact.

## Features

- **Dashboard Overview**: Environmental impact tracking and statistics
- **Report Illegal Dumping**: Photo upload and geo-location reporting
- **Vehicle Tracking**: Real-time waste collection vehicle tracking
- **Facility Finder**: Locate nearby recycling centers and facilities
- **Waste Guide**: Segregation guidelines and best practices
- **Eco-Products**: Green points redemption system
- **Community Impact**: Statistics on waste processed and community engagement

## Tech Stack

- **Next.js 15.5.2** - React framework
- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the user-dash directory:
```bash
cd Frontend/user-dash
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3001`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── ReportDumping.tsx
    └── VehicleTracker.tsx
```

## Integration with Auth App

The dashboard fetches user authentication details from the auth-app. Make sure the auth-app is running on port 3000 for proper integration.

### User Data Integration

The dashboard expects user data in the following format:
```typescript
interface UserData {
  name: string;
  email: string;
  role: string;
}
```

## Features Overview

### Main Dashboard
- Welcome message with user name
- Environmental impact statistics
- Quick action cards for main features
- Community impact metrics

### Report Illegal Dumping
- Geo-tagged photo upload
- Location input
- Description field
- Real-time submission status

### Vehicle Tracking
- Next pickup schedule
- Live vehicle location
- ETA information
- Driver contact options

### Eco-Products Shop
- Green points system
- Product catalog
- Points redemption
- Shopping cart functionality

## Customization

### Colors
The app uses a green color scheme that can be customized in `tailwind.config.js`:
- Primary: Green shades (500-700)
- Secondary: Emerald shades
- Accent colors for different features

### Adding New Features
1. Create component in `src/components/`
2. Add route in `src/app/`
3. Update navigation in main dashboard

## Environment Variables

Create a `.env.local` file for local development:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_AUTH_URL=http://localhost:3000
```

## Development

### Code Style
- Use TypeScript for type safety
- Follow React functional component patterns
- Use Tailwind classes for styling
- Implement error boundaries for production

### Testing
```bash
npm run test
```

### Linting
```bash
npm run lint
```

## Deployment

The app can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Docker containers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Swachhta Saathi waste management system.
