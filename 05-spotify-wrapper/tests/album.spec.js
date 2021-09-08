import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchStub;
  let fetchPromise;

  beforeEach(() => {
    fetchPromise = sinon.promise();
    fetchStub = sinon.stub(global, 'fetch').returns(fetchPromise);
  });

  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke tests', () => {
    it('should getAlbum exists', () => {
      expect(getAlbum).to.be.exist;
    });

    it('should getAlbumTracks exists', () => {
      expect(getAlbumTracks).to.be.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(fetchStub).to.be.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const album = getAlbum('any_id_1');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/any_id_1');

      const album2 = getAlbum('any_id_2');
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/any_id_2');
    });
    it('should return the correct data from promise', async () => {
      fetchPromise.resolve({ json: () => ({ album: 'response' }) });
      const album = await getAlbum('any_id_1');
      expect(album).to.be.an('object');
      expect(album).to.be.eql({ album: 'response' });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(fetchStub).to.be.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const album = getAlbums(['any_id_1', 'any_id_2']);
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/?ids=any_id_1,any_id_2');

      const album2 = getAlbums(['any_id_3', 'any_id_4']);
      expect(fetchStub).to.be.calledWith('https://api.spotify.com/v1/albums/?ids=any_id_3,any_id_4');
    });
    it('should return the correct data from promise', async () => {
      fetchPromise.resolve({ json: () => [{ title: 'title 1' }, { title: 'title 2' }] });
      const album = await getAlbums(['any_id_1', 'any_id_2']);
      expect(album).to.be.an('array');
      expect(album).to.be.eql([{ title: 'title 1' }, { title: 'title 2' }]);
    });
  });
});
