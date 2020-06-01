import React from 'react';
import { PageProps } from './types';

export default ({ name, age, createName }: PageProps) => {
  return (
    <div>
      pc: name({name}), age({age});
      <button onClick={createName}>创建名字</button>
    </div>
  );
};
