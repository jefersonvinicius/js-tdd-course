"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = getAlbums;
exports.getAlbum = getAlbum;
exports.getAlbumTracks = getAlbumTracks;

var _config = require("./config");

function getAlbums(ids) {
  return fetch("".concat(_config.API_URL, "/albums/?ids=").concat(ids)).then(function (response) {
    return response.json();
  });
}

function getAlbum(albumId) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(albumId)).then(function (response) {
    return response.json();
  });
}

function getAlbumTracks(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id, "/tracks")).then(function (response) {
    return response.json();
  });
}