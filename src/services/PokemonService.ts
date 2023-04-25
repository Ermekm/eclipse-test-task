import { type AxiosResponse } from "axios";
import { $api } from "../http";

export default class PokemonService {
  static async getAll<T = any, R = AxiosResponse<T>>(
    limit: number,
    offset: number
  ): Promise<R> {
    return await $api.get("/pokemon", {
      params: { offset, limit },
    });
  }

  static async getOneByUrl<T = any, R = AxiosResponse<T>>(
    url: string
  ): Promise<R> {
    return await $api.get(url);
  }

  static async getOneByName<T = any, R = AxiosResponse<T>>(
    name: string
  ): Promise<R> {
    return await $api.get(`/pokemon/${name}`);
  }

  static async getSpeciesByName<T = any, R = AxiosResponse<T>>(
    name: string
  ): Promise<R> {
    return await $api.get(`/pokemon-species/${name}`);
  }

  static async getEvolutionChainByUrl<T = any, R = AxiosResponse<T>>(
    url: string
  ): Promise<R> {
    return await $api.get(url);
  }
}
