import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from 'redux/';
import axios from 'axios';

const DogPoopTracker: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.location);

  const handleReport = async () => {
    try {
      await axios.post<{ message: string }>('/report', { location });
      console.log('Report sent successfully!');
    } catch (error) {
      console.error('Error reporting dog poop:', error);
    }
  };

  return (
    <div>
      <h1>Dog Poop Tracker</h1>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => dispatch(setLocation(e.target.value))} />
      </label>
      <button onClick={handleReport}>Report Dog Poop</button>
    </div>
  );
};

export default DogPoopTracker;
