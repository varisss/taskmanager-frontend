import axios from 'axios';
//Types
export type Project = {
  _id: string;
  name: string;
  description: string;
  members: Member[];
  start: Date;
  status: string;
};

export type Task = {
  _id: string;
  project: string;
  name: string;
  description: string;
  members: Member[];
  start: Date;
  deadline: Date;
  status: string;
  updates: string[];
};

export type Member = {
  name: string;
  role: string;
};

export type Update = {
  name: string;
  description: string;
  members: Member[];
  status: string;
};

export default {
  fetchProjects: async (): Promise<Project[]> => {
    const projects: any = await axios.get('http://localhost:4000/api/projects');
    console.log(projects.data);
    return projects.data;
  },
  fetchProject: async (projectId: String): Promise<Project> => {
    const project: any = await axios.get(
      `http://localhost:4000/api/projects/${projectId}`
    );
    console.log(project.data);
    return project.data;
  },
  createProject: async (projectData: Object): Promise<any> => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(
        'http://localhost:4000/api/projects/',
        projectData,
        config
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  updateProject: async (
    projectId: String,
    projectData: Object
  ): Promise<any> => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(
        `http://localhost:4000/api/projects/${projectId}`,
        projectData,
        config
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  deleteProject: async (projectId: String): Promise<any> => {
    try {
      console.log(projectId);
      await axios.delete(`http://localhost:4000/api/projects/${projectId}`);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  fetchTasks: async (projectId: String): Promise<Task> => {
    const tasks: any = await axios.get(
      `http://localhost:4000/api/projects/${projectId}/tasks`
    );
    console.log(tasks.data);
    return tasks.data;
  },
  fetchTask: async (projectId: String, taskId: String): Promise<Task> => {
    const task: any = await axios.get(
      `http://localhost:4000/api/projects/${projectId}/tasks/${taskId}`
    );
    console.log(task.data);
    return task.data;
  },
  createTask: async (projectId: String, taskData: Object): Promise<any> => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(
        `http://localhost:4000/api/projects/${projectId}/tasks`,
        taskData,
        config
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  updateTask: async (
    projectId: String,
    taskId: String,
    taskData: Object
  ): Promise<any> => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(
        `http://localhost:4000/api/projects/${projectId}/tasks/${taskId}`,
        taskData,
        config
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  addUpdate: async (
    projectId: String,
    taskId: String,
    update: Object
  ): Promise<any> => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post(
        `http://localhost:4000/api/projects/${projectId}/tasks/${taskId}/update`,
        update,
        config
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  deleteTask: async (projectId: String, taskId: String): Promise<any> => {
    try {
      await axios.delete(
        `http://localhost:4000/api/projects/${projectId}/tasks/${taskId}`
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
