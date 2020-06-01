import React from 'react';
import { PageProps } from './types';
export default ({ name, age }: PageProps) => {
  return (
    <div>
      mobile: name({name}), age({age})
    </div>
  );
};
