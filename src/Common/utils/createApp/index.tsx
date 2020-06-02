import React from 'react';
import { EModule } from './../../types';
import createAppRouter from './createRouter';
import { pipe } from 'ramda';
import createStore from '../createStore';
import createFetcher from './createFetcher';

export default function createApp(moduleArr: EModule[]): () => React.ReactElement {
  const Router = createAppRouter(
    moduleArr.reduce<EModule['router']>((res, item) => res.concat(item.router), [])
  );

  const wrapper = pipe(createStore(moduleArr.map((v) => v.store).flat()), createFetcher());

  return () => wrapper(<Router />);
}
