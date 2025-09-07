'use client';

import { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Truck, 
  MapPin, 
  BookOpen, 
  Leaf, 
  Users, 
  TrendingUp, 
  DollarSign,
  Camera,
  Navigation,
  Clock,
  Award,
  ShoppingBag,
  Phone,
  HelpCircle,
  Menu,
  Bell,
  User,
  Home
} from 'lucide-react';

import ReportDumping from '../components/ReportDumping';
import VehicleTracker from '../components/VehicleTracker';
import FacilityFinder from '../components/FacilityFinder';
import WasteGuide from '../components/WasteGuide';
import { getCurrentUser, AuthUser } from '../utils/auth';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface DashboardStats {
  wasteProcessed: string;
  greenPoints: number;
  impactThisMonth: string;
  activeMembers: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  points: number;
  image: string;
}

export default function UserDashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [stats, setStats] = useState<DashboardStats>({
    wasteProcessed: '15.2 tons',
    greenPoints: 1200,
    impactThisMonth: '128 kg',
    activeMembers: 2847
  });

  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Organic Compost Bin',
      description: 'Perfect for kitchen waste',
      points: 250,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Eco Carry Bags',
      description: 'Reusable shopping bags',
      points: 150,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'LED Solar Lights',
      description: 'Energy efficient lighting',
      points: 400,
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Eco Water Purifier',
      description: 'Chemical-free filtration',
      points: 800,
      image: '/api/placeholder/300/200'
    }
  ]);

  useEffect(() => {
    // Fetch user data from auth-app or localStorage
    const fetchUserData = async () => {
      try {
        const authUser = await getCurrentUser();
        if (authUser) {
          setUserData({
            id: authUser.id,
            name: authUser.name,
            email: authUser.email,
            role: authUser.role
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Fallback to mock data
        const mockUserData = {
          id: '1',
          name: 'Rajesh Kumar',
          email: 'rajesh@example.com',
          role: 'User'
        };
        setUserData(mockUserData);
      }
    };

    fetchUserData();
  }, []);

  const DashboardCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 ${className}`}>
      {children}
    </div>
  );

  const ActionCard = ({ icon: Icon, title, description, action, image, onClick }: {
    icon: any;
    title: string;
    description: string;
    action: string;
    image?: string;
    onClick?: () => void;
  }) => (
    <DashboardCard className="p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-green-100 rounded-lg">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
        {image && (
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-xs text-gray-500">Image</div>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button 
        onClick={onClick}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
      >
        {action}
      </button>
    </DashboardCard>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'report':
        return <ReportDumping />;
      case 'tracking':
        return <VehicleTracker />;
      case 'facilities':
        return <FacilityFinder />;
      case 'guide':
        return <WasteGuide />;
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, {userData?.name || 'User'}!
        </h2>
        <p className="text-gray-600">Your environmental impact this month</p>
        
        {/* Impact Stats */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-green-600">{stats.impactThisMonth}</div>
              <div className="text-gray-600">waste diverted from landfills!</div>
            </div>
            <div className="text-right">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                Continue Training
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ActionCard
          icon={AlertTriangle}
          title="Report Illegal Dumping"
          description="Help keep our city clean"
          action="Upload Geo-Tagged Photo"
          image="true"
          onClick={() => setCurrentView('report')}
        />
        
        <ActionCard
          icon={Truck}
          title="Track My Vehicle"
          description="Next pickup: Tomorrow, 9 AM"
          action="Track Vehicle"
          image="true"
          onClick={() => setCurrentView('tracking')}
        />
        
        <ActionCard
          icon={MapPin}
          title="Find Facilities"
          description="Nearest recycling center: 0.8 km"
          action="View on Map"
          image="true"
          onClick={() => setCurrentView('facilities')}
        />
        
        <ActionCard
          icon={BookOpen}
          title="Waste Guide"
          description="Quick segregation reference"
          action="View Full Guide"
          onClick={() => setCurrentView('guide')}
        />
      </div>

      {/* Community Impact */}
      <DashboardCard className="p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Community Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.activeMembers.toLocaleString()}</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.wasteProcessed}</div>
            <div className="text-gray-600">Waste Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">₹{(stats.greenPoints / 10).toFixed(1)}L</div>
            <div className="text-gray-600">Green Points Earned</div>
          </div>
        </div>
      </DashboardCard>

      {/* Eco-Friendly Products */}
      <DashboardCard className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Eco-Friendly Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-500 text-sm">Product Image</div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="text-green-600 font-semibold mb-3">{product.points} Green Points</div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Shop for Bins/Kit
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Contact Green Champion
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Help & Support
          </button>
        </div>
      </DashboardCard>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-800">Swachhta Saathi</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-4">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                  currentView === 'dashboard' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Home className="w-4 h-4" />
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentView('report')}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                  currentView === 'report' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                Report
              </button>
              <button 
                onClick={() => setCurrentView('tracking')}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                  currentView === 'tracking' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Truck className="w-4 h-4" />
                Tracking
              </button>
              <button 
                onClick={() => setCurrentView('facilities')}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                  currentView === 'facilities' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <MapPin className="w-4 h-4" />
                Facilities
              </button>
              <button 
                onClick={() => setCurrentView('guide')}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                  currentView === 'guide' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Guide
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 hover:text-green-600 cursor-pointer" />
              <div className="flex items-center space-x-2">
                <User className="w-6 h-6 text-gray-600" />
                <span className="text-gray-700">{userData?.name || 'Loading...'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </div>
    </div>
  );
}
