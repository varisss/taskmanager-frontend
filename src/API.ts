import axios from 'axios';
//Types
export type Project = {
    _id: string
    name: string,
    description: string,
    start: Date,
    status: string,
    members: string[], // changed for testing
    tasks: string[], // changed for testing
}

export type Member = {
    name: string,
    role: string
}

export type Task = {
    _id: string,
    project: string,
    name: string,
    description: string,
    status: string,
    updates: string[],
}

export default {
    fetchProjects: async (): Promise<Project[]> => {
        const projects: any = await axios.get('http://localhost:4000/api/projects');
        console.log(projects.data);
        return projects.data;
    },
    fetchProject: async (projectId: String): Promise<Project> => {
        const project: any = await axios.get(`http://localhost:4000/api/projects/${projectId}`);
        return project.data;
    },
    createProject: async () => {

    },
    updateProject: async () => {

    },
    deleteProject: async () => {

    },
}