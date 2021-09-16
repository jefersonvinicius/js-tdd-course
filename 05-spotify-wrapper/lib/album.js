"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = album;

function album() {
  var _this = this;

  return {
    getAlbums: function getAlbums(ids) {
      return _this.request("".concat(_this.apiURL, "/albums/?ids=").concat(ids));
    },
    getAlbum: function getAlbum(id) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(id));
    },
    getTracks: function getTracks(id) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(id, "/tracks"));
    }
  };
}