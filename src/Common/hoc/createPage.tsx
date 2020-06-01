import React from 'react';
import Application from './../../Application';

const AppStore = Application.store;

interface CreatePageParam<P> {
  pc: React.FC<P>;
  mobile: React.FC<P>;
}

const createPage = <P extends {}>({ pc, mobile }: CreatePageParam<P>) => {
  return (props: P): JSX.Element => {
    const { platform } = AppStore.useContainer();

    const View = platform === 'pc' ? pc : mobile;

    return <View {...props} />;
  };
};

export default createPage;
