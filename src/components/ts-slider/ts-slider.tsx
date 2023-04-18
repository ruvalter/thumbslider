import { Component, Host, h, Element, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'ts-slider',
  styleUrl: 'ts-slider.css',
  shadow: true,
})
export class TsSlider {
  private items: NodeList;

  @Prop() displayCount = 4;
  @Prop() skipCount = 1;
  @State() sliderSize: number;
  @State() finalStep: number;
  @State() currentStep = 0;
  @State() isFirstClick = true;
  @State() animating = false;

  @Element() private element: HTMLElement;

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.sliderSize = this.getListWidth();
  }

  constructor() {
    console.log('connstructor');
  }

  componentDidLoad() {
    console.log('didLoad');
    this.items = this.element.querySelectorAll('ts-item');
    Array.from(this.items).forEach(item => ((item as HTMLElement).style.width = `${this.getWidth(this.displayCount)}%`));
    this.finalStep = this.items.length - this.displayCount;
  }

  getListWidth(): number {
    return this.element.getBoundingClientRect().width;
  }

  getWidth(displayCount: number) {
    return 100 / displayCount;
  }

  next = () => {
    if (!this.animating) {
      const slider = this.element.shadowRoot.querySelector('.slider') as HTMLElement;
      slider.style.transform = `translateX(-${this.skipCount * this.getWidth(this.displayCount)}%)`;
      if (this.currentStep > 0 || !this.isFirstClick) {
        this.isFirstClick = false;
        this.animating = true;
        const first = this.element.querySelector('ts-item') as HTMLElement;
        const clone = first.cloneNode(true) as HTMLElement;
        const last = this.element.querySelector('ts-item:last-child');
        first.style.transition = 'width 300ms ease-in-out';
        clone.style.transition = 'width 300ms ease-in-out';
        first.style.width = '0px';
        setTimeout(() => {
          last.after(clone);
          // slider.style.transform = 'translateX(0%)'
          first.remove();
          const lastStep = this.items.length - 1;
          if (this.currentStep === lastStep) {
            this.currentStep = 0;
          } else {
            this.currentStep++;
          }
          this.animating = false;
        }, 300);
      } else {
        this.currentStep++;
        setTimeout(() => (this.animating = false), 300);
      }
    }
  };

  prev = () => {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  };

  render() {
    console.log('render', this.items?.length, 'count', this.displayCount);
    let length = 2;
    if (this.items?.length) {
      length = this.items.length;
    }

    const steps = Array(length)
      .join('.')
      .split('.')
      .map((_, index) => <div class={`step-item step-index-${index} ${this.currentStep === index ? 'step-active' : ''}`}></div>);
    return (
      <Host>
        <div class="steps">{steps}</div>
        <button class={`control prev ${this.currentStep === 0 ? '' : ''} ${this.displayCount > this.items?.length ? '' : ''}`} onClick={this.prev}>
          <i>{'<'}</i>
        </button>
        <div class="slider">
          <slot></slot>
        </div>
        <button class={`control next ${this.currentStep === this.finalStep ? '' : ''} ${this.displayCount > this.items?.length ? '' : ''}`} onClick={this.next}>
          <i>{'>'}</i>
        </button>
      </Host>
    );
  }
}
