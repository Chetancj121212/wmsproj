'use client';

import { useState } from 'react';
import { Leaf, Shield, Users, Trash2, User, Mail, Lock, TreePine, Droplets, Recycle, Sparkles, Wind, Globe } from 'lucide-react';

type Role = 'Admin' | 'User' | 'Wasteworker';

interface FormData {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export default function AuthPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    role: 'User'
  });

  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const roleConfigs = {
    Admin: {
      icon: Shield,
      color: 'from-emerald-600 to-green-700',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-100',
      description: 'System Administrator',
      features: ['Full system access', 'User management', 'Environmental reports']
    },
    User: {
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-100',
      description: 'General User',
      features: ['View reports', 'Submit requests', 'Track progress']
    },
    Wasteworker: {
      icon: Trash2,
      color: 'from-lime-600 to-green-600',
      bgPattern: 'bg-gradient-to-br from-lime-50 to-green-100',
      description: 'Waste Management Specialist',
      features: ['Collection routes', 'Vehicle tracking', 'Field reports']
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert(`${isLogin ? 'Login' : 'Sign up'} successful for ${formData.role}!`);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const currentRole = roleConfigs[formData.role];
  const IconComponent = currentRole.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style jsx>{`
          @keyframes diagonalMove {
            0% {
              transform: translateX(-200px) translateY(200px);
            }
            100% {
              transform: translateX(calc(100vw + 200px)) translateY(calc(-100vh - 200px));
            }
          }
          .diagonal-animation {
            animation: diagonalMove 12s linear infinite;
          }
        `}</style>
        
        {/* Large Floating Leaves - Layer 1 */}
        <div className="absolute text-green-400/60 diagonal-animation" style={{ top: '73%', left: '-85px', animationDelay: '0s' }}>
          <Leaf size={32} />
        </div>
        <div className="absolute text-emerald-400/50 diagonal-animation" style={{ top: '12%', left: '-167px', animationDelay: '2s' }}>
          <Leaf size={28} />
        </div>
        <div className="absolute text-lime-400/55 diagonal-animation" style={{ top: '89%', left: '-93px', animationDelay: '4s' }}>
          <Leaf size={24} />
        </div>
        <div className="absolute text-green-400/45 diagonal-animation" style={{ top: '45%', left: '-134px', animationDelay: '6s' }}>
          <Leaf size={30} />
        </div>
        <div className="absolute text-green-300/40 diagonal-animation" style={{ top: '35%', left: '-75px', animationDelay: '8s' }}>
          <Leaf size={26} />
        </div>
        <div className="absolute text-emerald-300/45 diagonal-animation" style={{ top: '68%', left: '-155px', animationDelay: '10s' }}>
          <Leaf size={22} />
        </div>
        
        {/* Medium Leaves - Layer 2 */}
        <div className="absolute text-lime-300/35 diagonal-animation" style={{ top: '18%', left: '-105px', animationDelay: '1s' }}>
          <Leaf size={20} />
        </div>
        <div className="absolute text-green-400/40 diagonal-animation" style={{ top: '55%', left: '-120px', animationDelay: '3s' }}>
          <Leaf size={18} />
        </div>
        <div className="absolute text-emerald-400/35 diagonal-animation" style={{ top: '82%', left: '-90px', animationDelay: '5s' }}>
          <Leaf size={16} />
        </div>
        <div className="absolute text-lime-400/40 diagonal-animation" style={{ top: '28%', left: '-140px', animationDelay: '7s' }}>
          <Leaf size={22} />
        </div>
        <div className="absolute text-green-300/30 diagonal-animation" style={{ top: '95%', left: '-110px', animationDelay: '9s' }}>
          <Leaf size={14} />
        </div>
        
        {/* Floating Water Droplets */}
        <div className="absolute text-blue-400/60 diagonal-animation" style={{ top: '56%', left: '-76px', animationDelay: '1s' }}>
          <Droplets size={28} />
        </div>
        <div className="absolute text-cyan-400/50 diagonal-animation" style={{ top: '23%', left: '-142px', animationDelay: '3s' }}>
          <Droplets size={24} />
        </div>
        <div className="absolute text-blue-400/40 diagonal-animation" style={{ top: '67%', left: '-111px', animationDelay: '5s' }}>
          <Droplets size={26} />
        </div>
        <div className="absolute text-cyan-300/45 diagonal-animation" style={{ top: '8%', left: '-88px', animationDelay: '7s' }}>
          <Droplets size={20} />
        </div>
        <div className="absolute text-blue-300/35 diagonal-animation" style={{ top: '41%', left: '-125px', animationDelay: '9s' }}>
          <Droplets size={22} />
        </div>
        <div className="absolute text-cyan-400/40 diagonal-animation" style={{ top: '84%', left: '-95px', animationDelay: '11s' }}>
          <Droplets size={18} />
        </div>
        
        {/* Spinning Recycle Icons */}
        <div className="absolute text-green-500/50 diagonal-animation" style={{ top: '34%', left: '-158px', animationDelay: '1.5s' }}>
          <div className="animate-spin" style={{ animationDuration: '3s' }}>
            <Recycle size={36} />
          </div>
        </div>
        <div className="absolute text-emerald-500/45 diagonal-animation" style={{ top: '78%', left: '-87px', animationDelay: '3.5s' }}>
          <div className="animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
            <Recycle size={32} />
          </div>
        </div>
        <div className="absolute text-lime-500/40 diagonal-animation" style={{ top: '19%', left: '-125px', animationDelay: '5.5s' }}>
          <div className="animate-spin" style={{ animationDuration: '3s' }}>
            <Recycle size={28} />
          </div>
        </div>
        <div className="absolute text-green-400/35 diagonal-animation" style={{ top: '63%', left: '-115px', animationDelay: '7.5s' }}>
          <div className="animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
            <Recycle size={24} />
          </div>
        </div>
        <div className="absolute text-emerald-400/40 diagonal-animation" style={{ top: '91%', left: '-80px', animationDelay: '9.5s' }}>
          <div className="animate-spin" style={{ animationDuration: '3s' }}>
            <Recycle size={20} />
          </div>
        </div>
        
        {/* Floating Trees */}
        <div className="absolute text-green-500/50 diagonal-animation" style={{ top: '61%', left: '-103px', animationDelay: '2.5s' }}>
          <TreePine size={40} />
        </div>
        <div className="absolute text-lime-500/40 diagonal-animation" style={{ top: '8%', left: '-149px', animationDelay: '4.5s' }}>
          <TreePine size={35} />
        </div>
        <div className="absolute text-emerald-500/35 diagonal-animation" style={{ top: '92%', left: '-68px', animationDelay: '6.5s' }}>
          <TreePine size={30} />
        </div>
        <div className="absolute text-green-400/40 diagonal-animation" style={{ top: '37%', left: '-130px', animationDelay: '8.5s' }}>
          <TreePine size={28} />
        </div>
        <div className="absolute text-lime-400/35 diagonal-animation" style={{ top: '75%', left: '-85px', animationDelay: '10.5s' }}>
          <TreePine size={25} />
        </div>
        <div className="absolute text-emerald-400/30 diagonal-animation" style={{ top: '15%', left: '-105px', animationDelay: '0.2s' }}>
          <TreePine size={22} />
        </div>
        
        {/* Bright Sparkles */}
        <div className="absolute text-yellow-400/70 diagonal-animation" style={{ top: '37%', left: '-95px', animationDelay: '0.5s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={20} />
          </div>
        </div>
        <div className="absolute text-amber-400/60 diagonal-animation" style={{ top: '83%', left: '-156px', animationDelay: '2.5s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={18} />
          </div>
        </div>
        <div className="absolute text-yellow-300/50 diagonal-animation" style={{ top: '14%', left: '-72px', animationDelay: '4.5s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={16} />
          </div>
        </div>
        <div className="absolute text-amber-300/45 diagonal-animation" style={{ top: '69%', left: '-138px', animationDelay: '6.5s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={14} />
          </div>
        </div>
        <div className="absolute text-yellow-400/50 diagonal-animation" style={{ top: '47%', left: '-115px', animationDelay: '8.5s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={12} />
          </div>
        </div>
        <div className="absolute text-amber-400/55 diagonal-animation" style={{ top: '25%', left: '-92px', animationDelay: '1.3s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={10} />
          </div>
        </div>
        <div className="absolute text-yellow-300/45 diagonal-animation" style={{ top: '58%', left: '-122px', animationDelay: '3.3s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={8} />
          </div>
        </div>
        <div className="absolute text-amber-300/40 diagonal-animation" style={{ top: '87%', left: '-78px', animationDelay: '5.3s' }}>
          <div className="animate-ping" style={{ animationDuration: '2s' }}>
            <Sparkles size={15} />
          </div>
        </div>
        
        {/* Wind Effects */}
        <div className="absolute text-gray-400/40 diagonal-animation" style={{ top: '41%', left: '-116px', animationDelay: '1.2s' }}>
          <Wind size={24} />
        </div>
        <div className="absolute text-gray-400/35 diagonal-animation" style={{ top: '86%', left: '-81px', animationDelay: '3.2s' }}>
          <Wind size={22} />
        </div>
        <div className="absolute text-gray-300/30 diagonal-animation" style={{ top: '21%', left: '-135px', animationDelay: '5.2s' }}>
          <Wind size={18} />
        </div>
        <div className="absolute text-gray-400/25 diagonal-animation" style={{ top: '66%', left: '-98px', animationDelay: '7.2s' }}>
          <Wind size={20} />
        </div>
        
        {/* Floating Particles - Small Dots */}
        <div className="absolute diagonal-animation" style={{ top: '52%', left: '-64px', animationDelay: '0.8s' }}>
          <div className="w-4 h-4 bg-green-400/50 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '28%', left: '-152px', animationDelay: '2.8s' }}>
          <div className="w-3 h-3 bg-emerald-400/45 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '75%', left: '-89px', animationDelay: '4.8s' }}>
          <div className="w-3 h-3 bg-lime-400/40 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '16%', left: '-127px', animationDelay: '6.8s' }}>
          <div className="w-4 h-4 bg-blue-400/50 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '64%', left: '-98px', animationDelay: '8.8s' }}>
          <div className="w-3 h-3 bg-cyan-400/45 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '31%', left: '-143px', animationDelay: '10.8s' }}>
          <div className="w-3 h-3 bg-yellow-400/50 rounded-full"></div>
        </div>
        
        {/* Additional Small Particles */}
        <div className="absolute diagonal-animation" style={{ top: '44%', left: '-70px', animationDelay: '1.1s' }}>
          <div className="w-2 h-2 bg-green-300/40 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '79%', left: '-160px', animationDelay: '3.1s' }}>
          <div className="w-2 h-2 bg-emerald-300/35 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '11%', left: '-85px', animationDelay: '5.1s' }}>
          <div className="w-2 h-2 bg-lime-300/30 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '59%', left: '-110px', animationDelay: '7.1s' }}>
          <div className="w-2 h-2 bg-blue-300/35 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '33%', left: '-125px', animationDelay: '9.1s' }}>
          <div className="w-2 h-2 bg-cyan-300/30 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '88%', left: '-95px', animationDelay: '11.1s' }}>
          <div className="w-2 h-2 bg-yellow-300/40 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '22%', left: '-140px', animationDelay: '0.3s' }}>
          <div className="w-1.5 h-1.5 bg-green-200/30 rounded-full"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '71%', left: '-75px', animationDelay: '2.3s' }}>
          <div className="w-1.5 h-1.5 bg-emerald-200/25 rounded-full"></div>
        </div>
        
        {/* Enhanced Gradient Lines */}
        <div className="absolute diagonal-animation" style={{ top: '48%', left: '-107px', animationDelay: '1.8s' }}>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400/40 to-transparent"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '25%', left: '-154px', animationDelay: '3.8s' }}>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400/35 to-transparent"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '82%', left: '-77px', animationDelay: '5.8s' }}>
          <div className="w-28 h-1 bg-gradient-to-r from-lime-400/40 to-transparent"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '13%', left: '-130px', animationDelay: '7.8s' }}>
          <div className="w-18 h-1 bg-gradient-to-r from-blue-400/35 to-transparent"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '65%', left: '-100px', animationDelay: '9.8s' }}>
          <div className="w-22 h-1 bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
        </div>
        <div className="absolute diagonal-animation" style={{ top: '39%', left: '-145px', animationDelay: '0.7s' }}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400/25 to-transparent"></div>
        </div>
        
        {/* Globe in Center Background - Stationary */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-300/20 animate-pulse" style={{ animationDuration: '6s' }}>
          <Globe size={200} />
        </div>
      </div>

      {/* Main Rectangle Container */}
      <div className="w-full max-w-5xl h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-green-200 flex relative z-10">
        
        {/* Left Side - Visual Mission Display */}
        <div className="flex-1 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 p-6 flex flex-col justify-center items-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-8 left-8 text-green-200/10">
              <TreePine size={120} />
            </div>
            <div className="absolute bottom-8 right-8 text-emerald-200/10">
              <Recycle size={100} />
            </div>
          </div>

          {/* Central Visual Mission */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Main Visual - Circular Manus */}
            <div className="relative w-48 h-48 mb-6">
              {/* Central Earth/Globe */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center">
                <Globe className="text-white" size={60} />
              </div>
              
              {/* Orbiting Elements - Showing the Mission Visually */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                {/* Waste to Resource */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Recycle className="text-white" size={16} />
                </div>
                
                {/* Clean Water */}
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Droplets className="text-white" size={16} />
                </div>
                
                {/* Green Energy */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <TreePine className="text-white" size={16} />
                </div>
                
                {/* Clean Air */}
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Wind className="text-white" size={16} />
                </div>
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-1/2 w-0.5 h-16 bg-gradient-to-b from-green-300 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 right-8 h-0.5 w-16 bg-gradient-to-r from-green-300 to-transparent transform -translate-y-1/2"></div>
                <div className="absolute bottom-8 left-1/2 w-0.5 h-16 bg-gradient-to-t from-green-300 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-8 h-0.5 w-16 bg-gradient-to-l from-green-300 to-transparent transform -translate-y-1/2"></div>
              </div>
            </div>

            {/* Minimal Text */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Manus
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Transforming • Protecting • Sustaining
              </p>
            </div>

            {/* Impact Indicators */}
            <div className="flex space-x-6 mt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span className="text-xs text-gray-600 font-semibold">Clean</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <Recycle className="text-white" size={20} />
                </div>
                <span className="text-xs text-gray-600 font-semibold">Circular</span>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-green-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <Leaf className="text-white" size={20} />
                </div>
                <span className="text-xs text-gray-600 font-semibold">Green</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Minimal Auth Form */}
        <div className="flex-1 bg-white p-8 flex flex-col justify-center">
          <div className="max-w-xs mx-auto w-full">
            
            {/* Minimal Header */}
            <div className="text-center mb-8">
              <h2 className="text-lg font-semibold text-gray-800">
                Welcome
              </h2>
            </div>

            {/* Simple Role Toggle */}
            <div className="flex justify-center mb-6">
              <div className="flex bg-gray-100 rounded-full p-1">
                {Object.entries(roleConfigs).map(([role, config]) => {
                  const isSelected = formData.role === role;
                  return (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleInputChange('role', role as Role)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-white text-green-700 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {role}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clean Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 text-sm border-0 border-b-2 bg-transparent focus:outline-none focus:border-green-500 transition-colors placeholder-gray-400 ${
                    errors.name ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Full Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 text-sm border-0 border-b-2 bg-transparent focus:outline-none focus:border-green-500 transition-colors placeholder-gray-400 ${
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full px-4 py-3 text-sm border-0 border-b-2 bg-transparent focus:outline-none focus:border-green-500 transition-colors placeholder-gray-400 ${
                    errors.password ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-full text-white text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 bg-gradient-to-r ${currentRole.color} mt-8`}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Simple Toggle */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-gray-500 hover:text-green-600 transition-colors"
              >
                {isLogin ? 'Need an account? Sign up' : 'Have an account? Sign in'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}