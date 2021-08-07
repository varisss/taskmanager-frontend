import React from "react";
// Components
import ProjectForm from "./ProjectForm";
import FormHeadbar from "./FormHeadbar";
// Types
import { Member } from "../API";

interface Prop {
  members: Member[];
}

const CreateProject: React.FC<Prop> = ({ members }) => (
  <>
    <FormHeadbar header="Create Project"></FormHeadbar>
    <ProjectForm members={members} />
  </>
);

export default CreateProject;
