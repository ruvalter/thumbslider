import { newE2EPage } from '@stencil/core/testing';

describe('ts-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ts-item></ts-item>');

    const element = await page.find('ts-item');
    expect(element).toHaveClass('hydrated');
  });
});
