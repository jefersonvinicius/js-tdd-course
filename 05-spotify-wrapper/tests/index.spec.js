import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper, { TokenNotProvided } from '../src/index';

describe('SpotifyWrapper', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({ token: 'any' });
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive token option', () => {
    const spotify = new SpotifyWrapper({ token: 'any' });
    expect(spotify.token).to.be.equal('any');
  });

  it('should throws TokenNotProvided error when token isn`t provided', () => {
    try {
      const _ = new SpotifyWrapper();
    } catch (error) {
      expect(error).to.be.an.instanceOf(TokenNotProvided);
    }
  });

  it('should receive apiURL option', () => {
    const spotify = new SpotifyWrapper({ apiURL: 'any', token: 'any' });
    expect(spotify.apiURL).to.be.equal('any');
  });

  it('should use the default apiURL if it not provided', () => {
    const spotify = new SpotifyWrapper({ token: 'any' });
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  describe('request method', () => {
    let fetchStub;
    let fetchPromise;

    beforeEach(() => {
      fetchPromise = sinon.promise();
      fetchStub = sinon.stub(global, 'fetch').returns(fetchPromise);
    });

    afterEach(() => {
      fetchStub.restore();
    });

    it('should request method exists', () => {
      const spotify = new SpotifyWrapper({ token: 'any' });
      expect(spotify.request).to.exist;
    });

    it('should call fetch', () => {
      const spotify = new SpotifyWrapper({ token: 'any' });
      spotify.request();
      expect(fetchStub).to.be.calledOnce;
    });

    it('should call fetch with correct url', () => {
      const spotify = new SpotifyWrapper({ token: 'any' });
      spotify.request('any_url');
      expect(fetchStub).to.have.been.calledWith('any_url');
    });

    it('should call fetch with correct header', () => {
      const token = 'any';
      const spotify = new SpotifyWrapper({ token });
      const expectedHeaders = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      spotify.request('any_url');
      expect(fetchStub).to.have.been.calledWith('any_url', expectedHeaders);
    });
  });
});
