import React from 'react';
import { N_EModule } from '../Common/types';

const router: N_EModule.RouterItem[] = [
  {
    path: '/app/home',
    component: () => React.createElement('a', {}, 'app')
  }
];

export default router;
