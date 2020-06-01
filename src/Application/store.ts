import { createContainer } from 'unstated-next';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';

type PlatformType = 'pc' | 'mobile';

const useStore = () => {
  const [platform, setPlatform] = useState<PlatformType>('pc');

  const { width } = useWindowSize();

  useEffect(() => {
    setPlatform(width <= 375 ? 'mobile' : 'pc');
  }, [width, setPlatform]);

  return { platform };
};

export default createContainer(useStore);
