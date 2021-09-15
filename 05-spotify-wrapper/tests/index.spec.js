import { expect } from 'chai';
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
});
