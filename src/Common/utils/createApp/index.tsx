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

  // @ts-ignore
  const wrapper = pipe(...moduleArr.map((v) => createStore(v.store)), createFetcher()) as (
    node: React.ReactElement
  ) => React.ReactElement;
  return () => wrapper(<Router />);
}
