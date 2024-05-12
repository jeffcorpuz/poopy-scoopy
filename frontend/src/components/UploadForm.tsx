// src/UploadComponent.tsx
import React, { useState } from 'react';

const UploadComponent: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await fetch('/api/flip-photo', {
        method: 'POST',
        body: formData,
      });

      const data = await response.blob();
      const imgUrl = URL.createObjectURL(data);
      setImage(imgUrl);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
      {image && <img src={image} alt="Flipped Photo" />}
    </div>
  );
};

export default UploadComponent;
