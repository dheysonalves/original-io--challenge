import React from 'react';

import { render } from '@testing-library/react';

import PageContainer from './PageContainer';

test('Rendering with default values.', () => {
  const { container } = render(
    <PageContainer>
      <p>...</p>
    </PageContainer>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
});

test('Rendering with reverse set.', () => {
  const { container } = render(
    <PageContainer reverse>
      <p>...</p>
    </PageContainer>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'column-reverse');
});

test('Rendering with row set.', () => {
  const { container } = render(
    <PageContainer row>
      <p>...</p>
    </PageContainer>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
});

test('Rendering with row and reverse set.', () => {
  const { container } = render(
    <PageContainer row reverse>
      <p>...</p>
    </PageContainer>,
  );
  expect(container.firstChild).toHaveStyleRule('flex-direction', 'row-reverse');
});
