import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { EModule, N_EModule } from '../../types';
import { divide } from 'ramda';

type RouterArr = Array<Omit<N_EModule.RouterItem, 'children'>>;

function flatRouter(router?: EModule['router'], parentPath = ''): RouterArr {
  if (!router || !router.length) {
    return [];
  }

  return (router
    .map((v) => {
      const { children, ...otherConfig } = v;
      const path = parentPath + otherConfig.path;
      return [
        [
          {
            ...otherConfig,
            path
          }
        ],
        flatRouter(children, path)
      ].flat();
    })
    .flat() as unknown) as RouterArr;
}

export default function CreateAppRouter(router: EModule['router']) {
  const routerConfig = flatRouter(router);
  console.log(routerConfig, '666');
  return () => (
    <Router>
      <Switch>
        {routerConfig.map((v, i) => (
          <Route key={i} {...v} />
        ))}
      </Switch>
    </Router>
  );
}
