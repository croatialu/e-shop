import React, { ComponentProps } from 'react';
import { SWRConfig } from 'swr';

type ValueType = ComponentProps<typeof SWRConfig>['value'];

const createFetcher = (config: ValueType = {}) => (instance: React.ReactElement) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        ...config
      }}
    >
      {instance}
    </SWRConfig>
  );
};

export type CreateFetcher = typeof createFetcher;

export default createFetcher;
