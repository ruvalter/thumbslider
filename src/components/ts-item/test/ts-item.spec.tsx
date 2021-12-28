import { newSpecPage } from '@stencil/core/testing';
import { TsItem } from '../ts-item';

describe('ts-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TsItem],
      html: `<ts-item></ts-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ts-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ts-item>
    `);
  });
});
