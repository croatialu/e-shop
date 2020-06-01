import React from 'react';
import mobilePage from './index.mobile';
import pcPage from './index.pc';
import createPage from './../../../Common/hoc/createPage';
import { PageProps } from './types';
import usePage from './usePage';
const Page = createPage<PageProps>({ pc: pcPage, mobile: mobilePage });

export default () => {
  const { name, createName } = usePage();

  return <Page name={name} age={21} createName={createName} />;
};
