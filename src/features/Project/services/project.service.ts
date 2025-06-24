import { $api } from "@/shared/api";
import { IProject } from "../types";

class ProjectService {
  public async deleteProject(data: any): Promise<any> {
    try {
      const response = await $api.post("/workspace/delete-project", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getProject(url: string): Promise<IProject> {
    try {
      const response = await $api.get<IProject>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const projectService = new ProjectService();
