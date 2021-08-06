import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper } from "./ProjectList.styles";

interface ProjectListProps {
  projects: string[];
  setProjectId: Function;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  setProjectId,
}) => {
  //useEffect(() => setProjectId(''), []);
  return (
    <Wrapper>
      <h2 className="main-title">Recent Projects</h2>
      {projects.map((proj: any) => (
        <div className="project">
          <Link
            style={{ textDecoration: "none" }}
            to={`/${proj._id}`}
            onClick={() => {
              console.log(proj._id);
              setProjectId(proj._id);
            }}
          >
            <h2>{proj.name}</h2>
          </Link>
          <p>{proj.description}</p>
          <p>{proj.status}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default ProjectList;
