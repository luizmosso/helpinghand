import React from 'react';
import { Outer, Inner } from './style'

function Page({ children }) {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  );
}

export default Page;
