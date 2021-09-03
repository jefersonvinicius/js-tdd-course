import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetch from 'node-fetch';

import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from '../src/main';

chai.use(sinonChai);

global.fetch = fetch;

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  let fetchedStub;
  let fetchPromise;

  beforeEach(() => {
    fetchPromise = sinon.promise();
    fetchedStub = sinon.stub(global, 'fetch').returns(fetchPromise);
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct url', () => {
      context('passing one type', () => {
        const artists = search('Tainy', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=artist');

        const albums = search('Tainy', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=album');
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Tainy', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=artist,album');
      });
    });

    it('should return JSON data', async () => {
      fetchPromise.resolve({ json: () => ({ body: 'json' }) });
      const response = await search('Tainy', 'artist');
      expect(response).to.be.eql({ body: 'json' });
    });
  });
});
