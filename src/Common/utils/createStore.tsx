import React from 'react';
import { Container } from 'unstated-next';
import { pipe } from 'ramda';

const withStore = <V, S>(Container: Container<V, S>, initialState?: any) => (
  instance: React.ReactElement
) => {
  return <Container.Provider initialState={initialState}>{instance}</Container.Provider>;
};

export type WithStore = typeof withStore;

// export default withStore;

const createStore = (containers: Container<any, any>[] | Container<any, any>) => (
  instance: React.ReactElement
) => {
  const innerContainers = ([] as Container<any, any>[]).concat(containers);
  // @ts-ignore
  const wrapper = pipe(...innerContainers.map((v) => withStore(v))) as (
    ins: React.ReactElement
  ) => React.ReactElement;

  return wrapper(instance);
};

export default createStore;
