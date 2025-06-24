import { $api } from "../api";

class UserService {
  public async profile() {
    try {
      const response = await $api.get("/user/me");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const userService = new UserService();
