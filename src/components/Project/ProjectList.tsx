import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Member } from "../../API";

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
        <div className="card">
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
          <div className="members-container">
            {proj.members.map((member: Member) => (
              <p>{member.name}</p>
            ))}
          </div>
          <div className="status-bar">{proj.status}</div>
        </div>
      ))}
    </Wrapper>
  );
};

export default ProjectList;
