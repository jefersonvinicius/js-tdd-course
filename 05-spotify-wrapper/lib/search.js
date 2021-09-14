"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;

var _config = require("./config");

function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type), {
    headers: {
      Authorization: "Bearer ".concat(global.GLOBAL_SPOTIFY_TOKEN)
    }
  }).then(function (response) {
    return response.json();
  });
}

function searchAlbums(query) {
  return search(query, 'album');
}

function searchArtists(query) {
  return search(query, 'artist');
}

function searchTracks(query) {
  return search(query, 'track');
}

function searchPlaylists(query) {
  return search(query, 'playlist');
}