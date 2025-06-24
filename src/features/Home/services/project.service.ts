import { $api } from "@/shared/api";

class ProjectService {
  public async createProject(data: any): Promise<any> {
    try {
      const response = await $api.post("/workspace/create-project", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async deleteProject(data: any): Promise<any> {
    try {
      const response = await $api.post("/workspace/delete-project", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const projectService = new ProjectService();
