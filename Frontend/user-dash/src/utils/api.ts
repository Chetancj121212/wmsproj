// API service utilities for interacting with backend
import { getAuthToken } from './auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Generic API request function
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const token = getAuthToken();
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Specific API functions
export const reportIllegalDumping = async (reportData: {
  location: string;
  description: string;
  image?: File;
}) => {
  const formData = new FormData();
  formData.append('location', reportData.location);
  formData.append('description', reportData.description);
  if (reportData.image) {
    formData.append('image', reportData.image);
  }

  return apiRequest('/api/reports/illegal-dumping', {
    method: 'POST',
    body: formData,
    headers: {}, // Let fetch set the Content-Type for FormData
  });
};

export const getVehicleTracking = async (vehicleId?: string) => {
  const endpoint = vehicleId 
    ? `/api/vehicles/${vehicleId}/tracking`
    : '/api/vehicles/my-tracking';
  
  return apiRequest(endpoint);
};

export const getFacilities = async (type?: string, location?: string) => {
  const params = new URLSearchParams();
  if (type) params.append('type', type);
  if (location) params.append('location', location);
  
  const queryString = params.toString();
  const endpoint = `/api/facilities${queryString ? `?${queryString}` : ''}`;
  
  return apiRequest(endpoint);
};

export const getUserStats = async () => {
  return apiRequest('/api/users/stats');
};

export const getCommunityStats = async () => {
  return apiRequest('/api/community/stats');
};

export const getEcoProducts = async () => {
  return apiRequest('/api/products/eco-friendly');
};

export const purchaseProduct = async (productId: number, quantity: number = 1) => {
  return apiRequest('/api/products/purchase', {
    method: 'POST',
    body: JSON.stringify({ productId, quantity }),
  });
};

export const schedulePickup = async (pickupData: {
  date: string;
  timeSlot: string;
  wasteType: string;
  notes?: string;
}) => {
  return apiRequest('/api/pickups/schedule', {
    method: 'POST',
    body: JSON.stringify(pickupData),
  });
};
