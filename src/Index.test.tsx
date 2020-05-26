import React from 'react';
import { render } from '@testing-library/react';

describe('test', () => {
  it('test demo', () => {
    const { container } = render(<div />);

    expect(container).not.toBe(null);
  });
});
