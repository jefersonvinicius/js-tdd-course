import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetch from 'node-fetch';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = fetch;

describe('Spotify Wrapper', () => {
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'any',
    });
  });

  describe('Smoke tests', () => {
    it('should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
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

  describe('spotify.search.artists', () => {
    it('should call fetch', () => {
      const artists = spotify.search.artists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should calls with correct URL', () => {
      const artists = spotify.search.artists('Tainy');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=artist');
      const artists2 = spotify.search.artists('Bad');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Bad&type=artist');
    });
  });

  describe('spotify.search.albums', () => {
    it('should call fetch', () => {
      const albums = spotify.search.albums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should calls with correct URL', () => {
      const albums = spotify.search.albums('Tainy');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=album');
      const albums2 = spotify.search.albums('Bad');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Bad&type=album');
    });
  });

  describe('spotify.search.tracks', () => {
    it('should call fetch', () => {
      const tracks = spotify.search.tracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should calls with correct URL', () => {
      const tracks = spotify.search.tracks('Tainy');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=track');
      const tracks2 = spotify.search.tracks('Bad');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Bad&type=track');
    });
  });

  describe('spotify.search.playlists', () => {
    it('should call fetch', () => {
      const playlists = spotify.search.playlists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should calls with correct URL', () => {
      const playlists = spotify.search.playlists('Tainy');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Tainy&type=playlist');
      const playlists2 = spotify.search.playlists('Bad');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Bad&type=playlist');
    });
  });
});
