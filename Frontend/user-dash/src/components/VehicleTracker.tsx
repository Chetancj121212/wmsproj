'use client';

import { useState } from 'react';
import { Truck, MapPin, Clock, Navigation, Phone } from 'lucide-react';

interface VehicleData {
  vehicleId: string;
  nextPickup: string;
  location: string;
  status: 'On Route' | 'Collecting' | 'Completed';
  eta: string;
}

export default function VehicleTracker() {
  const [vehicleData] = useState<VehicleData>({
    vehicleId: 'WM-001',
    nextPickup: 'Tomorrow, 9:00 AM',
    location: 'Sector 12, Block A',
    status: 'On Route',
    eta: '8:45 AM'
  });

  const [isTracking, setIsTracking] = useState(false);

  const startTracking = () => {
    setIsTracking(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-green-100">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Truck className="w-6 h-6 text-green-600" />
            Vehicle Tracking
          </h2>
          <p className="text-gray-600 mt-2">Track your waste collection vehicle in real-time</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vehicle Info */}
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Next Pickup</h3>
                <div className="flex items-center gap-2 text-green-700">
                  <Clock className="w-4 h-4" />
                  <span>{vehicleData.nextPickup}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Vehicle Status</h3>
                <div className="flex items-center gap-2 text-blue-700">
                  <div className={`w-3 h-3 rounded-full ${
                    vehicleData.status === 'On Route' ? 'bg-blue-500' :
                    vehicleData.status === 'Collecting' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                  <span>{vehicleData.status}</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Current Location</h3>
                <div className="flex items-center gap-2 text-purple-700">
                  <MapPin className="w-4 h-4" />
                  <span>{vehicleData.location}</span>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Estimated Arrival</h3>
                <div className="flex items-center gap-2 text-orange-700">
                  <Clock className="w-4 h-4" />
                  <span>{vehicleData.eta}</span>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Live tracking map would appear here</p>
                {!isTracking ? (
                  <button
                    onClick={startTracking}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
                  >
                    <Navigation className="w-4 h-4" />
                    Start Live Tracking
                  </button>
                ) : (
                  <div className="text-blue-600 font-medium">
                    🔵 Live tracking active
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Driver
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              View Route History
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Schedule Pickup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
