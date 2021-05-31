import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import IProject from '../interfaces/IProject';
import { api } from '../services/api';

interface ProjectInput {
  name: string;
  brief_description: string;
  justification: string;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

interface ProjectsContextData {
  projects: IProject[];
  createProject: (projects: ProjectInput) => Promise<void>;
}
const ProjectsContext = createContext<ProjectsContextData>(
  {} as ProjectsContextData,
);

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    api
      .get<IProject[]>('/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  async function createProject(projectInput: ProjectInput) {
    const response = await api.post('/projects', projectInput);
    const { project } = response.data;

    setProjects([...projects, project]);
  }

  return (
    <ProjectsContext.Provider value={{ projects, createProject }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);

  return context;
}
