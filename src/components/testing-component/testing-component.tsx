import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'testing-component',
  styleUrl: 'testing-component.css',
  shadow: true,
})
export class TestingComponent {

  thumbList = [
    {
      id: 1,
      title: '1 I am first',
      subtitle: 'Like I always am.'
    },
    {
      id: 2,
      title: '2 Second I am',
      subtitle: 'but never doubt of me.'
    },
    {
      id: 3,
      title: '3 Third I am ',
      subtitle: 'jfos asdj jqwpeoi.'
    },
    {
      id: 4,
      title: '4 Fourth here',
      subtitle: 'but never doubt of me.'
    },
    {
      id: 5,
      title: '5 Fith here as well',
      subtitle: 'but never doubt of me.'
    },
    {
      id: 6,
      title: '6 sixth I am ',
      subtitle: 'jfos asdj jqwpeoi.'
    },
    {
      id: 7,
      title: '7 Seventh here',
      subtitle: 'but never doubt of me.'
    },
    {
      id: 8,
      title: '8 Eight here as well',
      subtitle: 'but never doubt of me.'
    }
  ];

  render() {
    const list = this.thumbList.map((thumb) => <ts-item class={`${thumb.id}`}>
      <div>
      <h3>{thumb.title}</h3>
      <p>{thumb.subtitle}</p>
      </div>
    </ts-item>)
    return (
      <Host>
        <ts-slider>
          {list}
        </ts-slider>
      </Host>
    );
  }

}
