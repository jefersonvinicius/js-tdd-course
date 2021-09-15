export default function album() {
  return {
    getAlbums: (ids) => this.request(`${this.apiURL}/albums/?ids=${ids}`).then((response) => response.json()),
    getAlbum: (id) => this.request(`${this.apiURL}/albums/${id}`).then((response) => response.json()),
    getTracks: (id) => this.request(`${this.apiURL}/albums/${id}/tracks`).then((response) => response.json()),
  };
}
