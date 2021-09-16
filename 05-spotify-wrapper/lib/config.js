"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.API_URL = void 0;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;

var register = function register(spotifyToken) {
  global.GLOBAL_SPOTIFY_TOKEN = spotifyToken;
};

exports.register = register;