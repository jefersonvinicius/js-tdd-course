export default function album() {
  return {
    getAlbums: (ids) => this.request(`${this.apiURL}/albums/?ids=${ids}`),
    getAlbum: (id) => this.request(`${this.apiURL}/albums/${id}`),
    getTracks: (id) => this.request(`${this.apiURL}/albums/${id}/tracks`),
  };
}
