import React from 'react';

export default function LoadingFallback() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#0a1628' }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: '#f5c518', borderTopColor: 'transparent' }}
        />
        <p className="text-sm font-medium" style={{ color: '#f5c518' }}>
          Loading...
        </p>
      </div>
    </div>
  );
}
