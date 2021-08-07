import React from "react";
// Components
import FormHeadbar from "./FormHeadbar";
import TaskForm from "./TaskForm";
// Types
import { Member } from "../API";

interface Prop {
  projectId: string;
  members: Member[];
}

const CreateTask: React.FC<Prop> = ({ projectId, members }) => (
  <>
    <FormHeadbar header="Create Task" />
    <TaskForm projectId={projectId} members={members} />
  </>
);

export default CreateTask;
