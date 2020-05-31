import React from 'react';
import { EModule } from './types';
import createAppRouter from './router';

export default function createApp(moduleArr: EModule[]): () => React.ReactElement {
  const Router = createAppRouter(
    moduleArr.reduce<EModule['router']>((res, item) => res.concat(item.router), [])
  );

  return () => <Router></Router>;
}
