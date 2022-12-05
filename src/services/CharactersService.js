import api from "../api/config";

class CharactersService {
  static async getCharacters({ page, name }) {
    let params = { page };

    if (name) {
      params = { ...params, name };
    }

    return api.get("character", { params });
  }

  static async getSingleCharacter({ id }) {
    return api.get(`character/${id}`);
  }

  static async filterCharacters({ name }) {
    return api.get("character", { params: { name } });
  }
}

export default CharactersService;
