import { $api } from "../http";

export default class TypeService {
  static async getAll(): Promise<any> {
    return await $api.get("/type");
  }

  static async getOneByName(name: string): Promise<any> {
    return await $api.get(`/type/${name}`);
  }
}
