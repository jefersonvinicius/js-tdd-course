import 'jsdom-global/register';
import { expect } from 'chai';
import dedent from 'dedent-js';
import renderAlbumTracks from '../src/AlbumTracks';

describe('AlbumTracks', () => {
  it('should create and append the markup given a correct data', () => {
    const data = [
      {
        preview_url:
          'https://p.scdn.co/mp3-preview/3ca335232913362d41cb9879dd4ffaa20a1e4989?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        name: 'Around the World',
        duration_ms: 238733,
      },
    ];

    const markup = dedent`
      <div class="music" data-preview-track="https://p.scdn.co/mp3-preview/3ca335232913362d41cb9879dd4ffaa20a1e4989?cid=774b29d4f13844c495f206cafdad9c86">
        <p class="music-number">1</p>
        <p class="music-title">Around the World</p>
        <p class="music-duration">238733</p>
      </div>`;

    const element = document.createElement('div');
    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when has more than 1 item', () => {
    const data = [
      {
        preview_url:
          'https://p.scdn.co/mp3-preview/3ca335232913362d41cb9879dd4ffaa20a1e4989?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        name: 'Around the World',
        duration_ms: 238733,
      },
      {
        preview_url:
          'https://p.scdn.co/mp3-preview/3ca335232913362d41cb9879dd4ffaa20a1e4989?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        name: 'Around the World',
        duration_ms: 238733,
      },
    ];

    const markup = dedent`
      <div class="music" data-preview-track="https://p.scdn.co/mp3-preview/3ca335232913362d41cb9879dd4ffaa20a1e4989?cid=774b29d4f13844c495f206cafdad9c86">
        <p class="music-number">1</p>
        <p class="music-title">Around the World</p>
        <p class="music-duration">238733</p>
      </div>
      <div class="music" data-preview-track="https://p.scdn.co/mp3-preview/3ca335232913362d41cb9879dd4ffaa20a1e4989?cid=774b29d4f13844c495f206cafdad9c86">
        <p class="music-number">1</p>
        <p class="music-title">Around the World</p>
        <p class="music-duration">238733</p>
      </div>`;

    const element = document.createElement('div');
    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
});
