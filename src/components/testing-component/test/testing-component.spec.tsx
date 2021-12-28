import { newSpecPage } from '@stencil/core/testing';
import { TestingComponent } from '../testing-component';

describe('testing-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestingComponent],
      html: `<testing-component></testing-component>`,
    });
    expect(page.root).toEqualHtml(`
      <testing-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </testing-component>
    `);
  });
});
