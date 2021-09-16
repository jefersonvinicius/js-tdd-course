"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

var _config = require("./config");

function searcher(query, type) {
  return this.request("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type));
}

function search() {
  var _this = this;

  return {
    albums: function albums(query) {
      return searcher.bind(_this, query, 'album')();
    },
    artists: function artists(query) {
      return searcher.bind(_this, query, 'artist')();
    },
    tracks: function tracks(query) {
      return searcher.bind(_this, query, 'track')();
    },
    playlists: function playlists(query) {
      return searcher.bind(_this, query, 'playlist')();
    }
  };
}