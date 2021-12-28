import { Component, Host, h, Element, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'ts-slider',
  styleUrl: 'ts-slider.css',
  shadow: true,
})
export class TsSlider {

  private items: NodeList;

  @Prop() displayCount = 5;

  @State() sliderSize: number;
  @State() finalStep: number
  @State() currentStep = 0;

  @Element() private element: HTMLElement;

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.sliderSize = this.getListWidth();
  }

  constructor() {
    console.log('connstructor')
  }

  componentDidLoad() {
    console.log('didLoad')
    this.items = this.element.querySelectorAll('ts-item');
    Array.from(this.items).forEach(item => (item as HTMLElement).style.width = `${this.getWidth(this.displayCount)}%`);
    this.finalStep = this.items.length - this.displayCount;
  }

  getListWidth(): number {
    return this.element.getBoundingClientRect().width;
  }

  getWidth(displayCount: number) {
    return 100 / displayCount;
  }

  next = () => {
    if (this.currentStep < this.finalStep) {
      this.currentStep++;
    }
  }

  prev = () => {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  render() {
    console.log('render', this.items?.length, 'count', this.displayCount)
    let length = 2;
    if (this.items?.length) {
      length = (this.items.length + 1) - this.displayCount;
    }

    const steps = Array(length).join('.').split('.')
      .map((_, index) => <div class={`step-item step-index-${index} ${ this.currentStep === index ? 'step-active' : ''}`}></div>);
    return (
      <Host>
        <div class="steps">
          {steps}
        </div>
        <button 
          class={`control prev ${this.currentStep === 0 ? 'initial-state' : ''} ${this.displayCount > this.items?.length ? 'control-hidden' : ''}`} 
          onClick={this.prev}><i>{'<'}</i></button>
          <div class="slider" style={{'transform': `translateX(-${this.currentStep * this.getWidth(this.displayCount)}%)`}}>
            <slot></slot>
          </div>
        <button 
          class={`control next ${this.currentStep === this.finalStep ? 'final-state' : ''} ${this.displayCount > this.items?.length ? 'control-hidden' : ''}`} 
          onClick={this.next}><i>{'>'}</i></button>
      </Host>
    );
  }

}
