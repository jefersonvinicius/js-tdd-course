import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchStub;
  let fetchPromise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({ token: 'any' });
    fetchPromise = sinon.promise();
    fetchStub = sinon.stub(global, 'fetch').returns(fetchPromise);
  });

  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke tests', () => {
    it('should getAlbum exists', () => {
      expect(spotify.album.getAlbum).to.be.exist;
    });

    it('should getAlbumTracks exists', () => {
      expect(spotify.album.getTracks).to.be.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(fetchStub).to.be.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbum('any_id_1');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/any_id_1');

      const album2 = spotify.album.getAlbum('any_id_2');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/any_id_2');
    });
    it('should return the correct data from promise', async () => {
      fetchPromise.resolve({ json: () => ({ album: 'response' }) });
      const album = await spotify.album.getAlbum('any_id_1');
      expect(album).to.be.an('object');
      expect(album).to.be.eql({ album: 'response' });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(fetchStub).to.be.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getAlbums(['any_id_1', 'any_id_2']);
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/?ids=any_id_1,any_id_2');

      const album2 = spotify.album.getAlbums(['any_id_3', 'any_id_4']);
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/?ids=any_id_3,any_id_4');
    });
    it('should return the correct data from promise', async () => {
      fetchPromise.resolve({ json: () => [{ title: 'title 1' }, { title: 'title 2' }] });
      const album = await spotify.album.getAlbums(['any_id_1', 'any_id_2']);
      expect(album).to.be.an('array');
      expect(album).to.be.eql([{ title: 'title 1' }, { title: 'title 2' }]);
    });
  });

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getTracks();
      expect(fetchStub).to.be.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const album = spotify.album.getTracks('any_id');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/any_id/tracks');

      const album2 = spotify.album.getTracks('any_id_2');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/any_id_2/tracks');
    });
    it('should return the correct data from promise', async () => {
      fetchPromise.resolve({ json: () => ({ body: 'response' }) });
      const album = await spotify.album.getTracks('any_id');
      expect(album).to.be.an('object');
      expect(album).to.be.eql({ body: 'response' });
    });
  });
});
