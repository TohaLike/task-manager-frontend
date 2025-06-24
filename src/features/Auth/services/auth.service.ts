import { $api } from "@/shared/api";

class AuthService {
  public async register(data: any): Promise<any> {
    try {
      const response = await $api.post("/auth/register", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async login(data: any): Promise<any> {
    try {
      const response = await $api.post("/auth/login", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async logout(): Promise<any> {
    try {
      const response = await $api.post("/auth/logout");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
