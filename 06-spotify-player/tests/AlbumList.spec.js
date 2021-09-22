import 'jsdom-global/register';
import { expect } from 'chai';
import dedent from 'dedent-js';
import renderAlbums from '../src/AlbumList';

describe('AlbumList', () => {
  it('should exist', () => {
    expect(renderAlbums).to.be.an('function');
  });

  const data = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Incubus',
        },
      ],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
          width: 64,
        },
      ],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const markup = dedent`
    <div class="list-item">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when data has more than 1 album', () => {
    const data2 = [
      {
        album_type: 'album',
        artists: [
          {
            name: 'Incubus',
          },
        ],
        id: '6peEdPVO73WtgGah5sEhX4',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
            width: 64,
          },
        ],
        name: 'The Essential Incubus',
        type: 'album',
      },
      {
        album_type: 'album',
        artists: [
          {
            name: 'Incubus',
          },
        ],
        id: '6peEdPVO73WtgGah5sEhX4',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
            width: 64,
          },
        ],
        name: 'The Essential Incubus',
        type: 'album',
      },
    ];

    const markup2 = dedent`
      <div class="list-item">
        <img src="${data2[0].images[2].url}" alt="${data2[0].name}" class="list-image">
        <div class="list-description">
          <p class="list-title">${data2[0].name}</p>
          <p class="list-subtitle">${data2[0].artists[0].name}</p>
        </div>
      </div>
      <div class="list-item">
        <img src="${data2[1].images[2].url}" alt="${data2[1].name}" class="list-image">
        <div class="list-description">
          <p class="list-title">${data2[1].name}</p>
          <p class="list-subtitle">${data2[1].artists[0].name}</p>
        </div>
      </div>`;
    const element = document.createElement('div');
    renderAlbums(data2, element);
    expect(element.innerHTML).to.be.eql(markup2);
  });
});
