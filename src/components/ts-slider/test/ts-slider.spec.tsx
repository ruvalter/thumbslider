import { newSpecPage } from '@stencil/core/testing';
import { TsSlider } from '../ts-slider';

describe('ts-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TsSlider],
      html: `<ts-slider></ts-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <ts-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ts-slider>
    `);
  });
});
