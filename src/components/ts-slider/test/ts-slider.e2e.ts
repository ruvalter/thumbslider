import { newE2EPage } from '@stencil/core/testing';

describe('ts-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ts-slider></ts-slider>');

    const element = await page.find('ts-slider');
    expect(element).toHaveClass('hydrated');
  });
});
