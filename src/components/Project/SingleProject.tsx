import React, { useState, useEffect } from "react";
import API, { Project } from "../../API";
import { useHistory } from "react-router-dom";

// Components
import Headbar from "../Headbar";
import NoContent from "../NoContent";
import AddButton from "../Buttons/AddButton";
import ButtonOverlay from "../ButtonOverlay";
import TaskList from "../Task/TaskList";
import EditForm from "../EditForm";
// Image
import BuddaMask from "../../images/budda_mask.png";
//Styles
import { Wrapper } from "../ContentPart.styles";

interface ProjectProps {
  projectId: String;
  setTaskId: Function;
}

const initialState: any = [];

const handleEditSubmit = (event: any) => {
  // TO DO: Link to API
};

const SingleProject: React.FC<ProjectProps> = ({ projectId, setTaskId }) => {
  const history = useHistory();
  const [project, setProject] = useState<Project>();
  const [tasks, setTasks] = useState(initialState);
  const [showButtonOverlay, setShowButtonOverlay] = useState(false);
  const [isediting, setIsediting] = useState(false);

  const deleteProject = async (id: String) => {
    try {
      await API.deleteProject(id);
      history.replace("/");
      console.log("deleted");
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  useEffect(() => {
    const fetchProj = async () => {
      const proj: Project = await API.fetchProject(projectId);
      console.log(proj);
      setProject(proj);
    };
    const fetchTasks = async () => {
      const t: any = await API.fetchTasks(projectId);
      console.log(t);
      setTasks(t);
    };
    fetchProj();
    fetchTasks();
  }, []);
  if (project) {
    return (
      <>
        {isediting ? (
          <div
            className="curtain"
            onClick={() => {
              setIsediting(false);
            }}
          />
        ) : null}
        <Headbar header={project.name} />
        <Wrapper>
          <h2 className="project-title">Project Info</h2>
          <div className="info-box">
            <p>Status: {project.status}</p>
            <p>Started On: {new Date(project.start).toString().slice(0, 15)}</p>
            <p>{project.description}</p>
          </div>
          <button className="update-btn" onClick={() => setIsediting(true)}>
            <p className="btn-text">Edit Project</p>
          </button>
          <button
            className="delete-btn"
            onClick={async () => {
              if (window.confirm("Are you sure? This cannot be undone.")) {
                await deleteProject(projectId);
              }
            }}
          >
            <p className="btn-text">Delete Project</p>
          </button>
          {tasks.length > 0 ? (
            <TaskList
              projectId={projectId}
              tasks={tasks}
              setTaskId={setTaskId}
            />
          ) : (
            <NoContent
              heading="Project tasks show here"
              subheading={`There are no tasks in this project right now`}
              image={BuddaMask}
            />
          )}
        </Wrapper>
        <AddButton callback={() => setShowButtonOverlay(!showButtonOverlay)} />
        <ButtonOverlay
          buttonText1="Task"
          link1={projectId + "/create-task"}
          showOverlay={showButtonOverlay}
          callback={() => setShowButtonOverlay(false)}
        />
        <EditForm
          isShow={isediting}
          onSubmit={handleEditSubmit}
          data={project}
        />
      </>
    );
  } else {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
};
export default SingleProject;
