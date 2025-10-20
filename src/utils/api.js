// API configuration for different environments
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://twitter-clone-backend-p2if.onrender.com';

// Helper function to build API URL
export const getApiUrl = (endpoint) => {
  // In production, use the full backend URL
  // In development, use relative path (Vite proxy handles it)
  if (import.meta.env.PROD) {
    return `${API_BASE_URL}${endpoint}`;
  }
  return endpoint;
};

export default API_BASE_URL;
