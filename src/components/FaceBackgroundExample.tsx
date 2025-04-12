'use client';

import React from 'react';
import FaceBackground from './FaceBackground';

// Placeholder images - replace with actual image URLs
const placeholderImageUrls = [
  '/placeholder-face.png', // Create or find a suitable placeholder image
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png', // Need at least 20-25 images for 5 rows for better distribution
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
  '/placeholder-face.png',
];

// It's better to have a variety of images for a real application
// Example using unsplash placeholders (replace with real images)
/*
const exampleImageUrls = Array.from({ length: 25 }, (_, i) => {
    const randomId = Math.floor(Math.random() * 1001); // Generate random number between 0 and 1000
    return `https://picsum.photos/id/${randomId}/300/200`});
*/

const FaceBackgroundExample: React.FC = () => {
  // You can switch to exampleImageUrls or provide your actual image URLs
  return <FaceBackground imageUrls={placeholderImageUrls} />;
};

export default FaceBackgroundExample;
