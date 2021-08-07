import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Member } from "../../API";

// Styles
import { Wrapper } from "../ContentPart.styles";
import MemberIcon from "../MemberIcon";
import StatusBar from "../StatusBar";

interface ProjectListProps {
  projects: string[];
  setProjectId: Function;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  setProjectId,
}) => {
  let color = "red";
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
            {proj.members.map((member: Member) =>
              member.name ? <MemberIcon name={member.name} /> : null
            )}
          </div>
          <StatusBar className="status-bar" status={proj.status} />
        </div>
      ))}
    </Wrapper>
  );
};

export default ProjectList;
