import React from 'react';
import { N_EModule } from '../Common/types';
import Demo from './pages/demo';

const router: N_EModule.RouterItem[] = [
  {
    path: '/baskets/home',
    component: () => React.createElement('a', {}, 'baskets'),
    exact: true,
    children: [
      {
        path: '/detail',
        component: () => React.createElement('a', {}, 'baskets/home/detail')
      }
    ]
  },
  {
    path: '/baskets/demo',
    component: Demo
  }
];

export default router;
