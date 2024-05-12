// App.tsx
import React from 'react';
import UploadComponent from './components/UploadForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Upload and Flip Photo</h1>
      <UploadComponent />
    </div>
  );
};

export default App;
