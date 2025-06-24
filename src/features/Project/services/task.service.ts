import { $api } from "@/shared/api";
import { IProject } from "../types";
import { ITask } from "../types/tasks.types";

class TaskService {
  public async createTask(data: any): Promise<any> {
    try {
      const response = await $api.post("/task/create", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async deleteTask(url: string): Promise<void> {
    try {
      const response = await $api.post(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getAllTasks(url: string): Promise<ITask[]> {
    try {
      const response = await $api.get<ITask[]>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const taskService = new TaskService();
