import { $api } from "../http";

export default class PokemonService {
  static async getAll(limit: number, offset: number): Promise<any> {
    return await $api.get("/pokemon", {
      params: { offset, limit },
    });
  }

  static async getOneByUrl(url: string): Promise<any> {
    return await $api.get(url);
  }

  static async getOneByName(name: string): Promise<any> {
    return await $api.get(`/pokemon/${name}`);
  }
}
