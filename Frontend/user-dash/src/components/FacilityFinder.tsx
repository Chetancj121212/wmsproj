'use client';

import { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Car } from 'lucide-react';

interface Facility {
  id: number;
  name: string;
  type: 'Recycling Center' | 'Composting Unit' | 'Waste Treatment' | 'Collection Point';
  distance: string;
  address: string;
  phone: string;
  hours: string;
  status: 'Open' | 'Closed' | 'Full';
}

export default function FacilityFinder() {
  const [facilities] = useState<Facility[]>([
    {
      id: 1,
      name: 'Green Valley Recycling Center',
      type: 'Recycling Center',
      distance: '0.8 km',
      address: 'Sector 15, Near Metro Station',
      phone: '+91 98765 43210',
      hours: '9:00 AM - 6:00 PM',
      status: 'Open'
    },
    {
      id: 2,
      name: 'Community Composting Unit',
      type: 'Composting Unit',
      distance: '1.2 km',
      address: 'Block C, Residential Area',
      phone: '+91 98765 43211',
      hours: '8:00 AM - 5:00 PM',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Municipal Waste Treatment Plant',
      type: 'Waste Treatment',
      distance: '2.5 km',
      address: 'Industrial Area, Zone 3',
      phone: '+91 98765 43212',
      hours: '24 Hours',
      status: 'Open'
    },
    {
      id: 4,
      name: 'Local Collection Point',
      type: 'Collection Point',
      distance: '0.3 km',
      address: 'Main Market Road',
      phone: '+91 98765 43213',
      hours: '6:00 AM - 10:00 PM',
      status: 'Full'
    }
  ]);

  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredFacilities = selectedType === 'All' 
    ? facilities 
    : facilities.filter(facility => facility.type === selectedType);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-green-600 bg-green-100';
      case 'Closed': return 'text-red-600 bg-red-100';
      case 'Full': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Recycling Center': return '♻️';
      case 'Composting Unit': return '🌱';
      case 'Waste Treatment': return '🏭';
      case 'Collection Point': return '📦';
      default: return '📍';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-green-100">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-green-600" />
            Find Facilities
          </h2>
          <p className="text-gray-600 mt-2">Locate nearby waste management facilities</p>
        </div>

        <div className="p-6">
          {/* Filter Buttons */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {['All', 'Recycling Center', 'Composting Unit', 'Waste Treatment', 'Collection Point'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedType === type
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Facilities List */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 mb-4">
                Nearby Facilities ({filteredFacilities.length})
              </h3>
              
              {filteredFacilities.map((facility) => (
                <div key={facility.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getTypeIcon(facility.type)}</span>
                      <h4 className="font-semibold text-gray-800">{facility.name}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(facility.status)}`}>
                      {facility.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4" />
                      <span>{facility.distance} away</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{facility.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{facility.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{facility.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Area */}
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Interactive map would appear here</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto">
                  <Car className="w-4 h-4" />
                  View Full Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
