import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);
  const toggle = () => setIsToggled(prev => !prev);
  return [isToggled, toggle];
};

export default useToggle;
