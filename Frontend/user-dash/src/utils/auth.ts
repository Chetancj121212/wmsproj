// Auth integration utilities
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Wasteworker';
  token?: string;
}

// Mock function to get user data from auth-app
// In a real implementation, this would make an API call to your auth service
export const getCurrentUser = async (): Promise<AuthUser | null> => {
  try {
    // Try to get user data from localStorage first (if coming from auth-app)
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }

    // Try to get from auth-app API if available
    try {
      const response = await fetch('http://localhost:3000/api/auth/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        return userData;
      }
    } catch (apiError) {
      console.log('Auth API not available, using mock data');
    }

    // Return mock data for development
    return {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      role: 'User',
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  const user = localStorage.getItem('auth_user');
  return !!user;
};

// Function to logout user
export const logout = () => {
  localStorage.removeItem('auth_user');
  window.location.href = 'http://localhost:3000'; // Redirect to auth-app
};

// Function to save user data to localStorage
export const saveUserData = (userData: AuthUser) => {
  localStorage.setItem('auth_user', JSON.stringify(userData));
};

// Function to get auth token
export const getAuthToken = (): string | null => {
  const storedUser = localStorage.getItem('auth_user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    return user.token || null;
  }
  return null;
};
