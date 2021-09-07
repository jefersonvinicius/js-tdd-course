import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbumTracks } from '../src/album';

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
});
