import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ts-item',
  styleUrl: 'ts-item.css',
  shadow: true,
})
export class TsItem {

  render() {
    return (
      <Host class="ts-item">
        <div class="item-inner-container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
