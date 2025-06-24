import { $api } from "@/shared/api";
import { IProject } from "../types";

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

    public async getProjects(): Promise<IProject[]> {
    try {
      const response = await $api.get<IProject[]>("/workspace/get-projects");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const projectService = new ProjectService();
