import { newE2EPage } from '@stencil/core/testing';

describe('testing-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<testing-component></testing-component>');

    const element = await page.find('testing-component');
    expect(element).toHaveClass('hydrated');
  });
});
