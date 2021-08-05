import React from "react";

// Components
import ProjectForm from "./ProjectForm";
import FormHeadbar from "./FormHeadbar";


const CreateProject: React.FC = (projects) => (
    <>
        <FormHeadbar header='Create Project' ></FormHeadbar>
        <ProjectForm />
    </>
);

export default CreateProject;