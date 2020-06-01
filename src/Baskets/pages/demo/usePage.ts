import { useState, useCallback } from 'react';

const usePage = () => {
  const [name, setName] = useState('croatia');

  const createName = useCallback(() => {
    setName(name + Date.now());
  }, [name, setName]);

  return {
    name,
    setName,
    createName
  };
};

export default usePage;
