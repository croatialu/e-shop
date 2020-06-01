import { RouteProps } from 'react-router-dom';
import { Container } from 'unstated-next';

type A = RouteProps['children'];

export namespace N_EModule {
  type RouterBaseItem = Omit<RouteProps, 'children'>;

  export interface RouterItem extends RouterBaseItem {
    children?: RouterItem[];
  }
}

export interface EModule {
  router: N_EModule.RouterItem[];
  store: Container<any, any>;
}
