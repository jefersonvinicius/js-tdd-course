"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;
exports.SPOTIFY_TOKEN = void 0;

var _config = require("./config");

var SPOTIFY_TOKEN = 'BQCvpSYh1j_aZG5XlrFP4_gaoE0TDFObV0Tmn74PkS2r2UPelPS0qs0fjBZJn8CTdRynKH1kZ3mxBQl9c8Ch1jZ2Op_jFJqvNp01tsZcgQcl1JWmysLyWSdggY8yxlDycBuFsf4pdtsOhw6CXS6Vs7Nt4KlLmqnU9Ik';
exports.SPOTIFY_TOKEN = SPOTIFY_TOKEN;

function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type), {
    headers: {
      Authorization: "Bearer ".concat(SPOTIFY_TOKEN)
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