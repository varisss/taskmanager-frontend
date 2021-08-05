import React from "react";
// Styles
import { Wrapper, Content, Label, Input, TextArea } from "./ProjectFrom.styles";

// Components
import NormalButton from "../Buttons/NormalButton";

const sendForm = () => {

}

const ProjectForm: React.FC = () => {

    return (
        <Wrapper>
            <Content>
                <Label>Project name</Label>
                <Input id="project-name" placeholder="Enter project name" type="text" />
                <Label>Project member</Label>
                <Input id="member" placeholder="Add project member" type="text" />
                <Label>Project info</Label>
                <TextArea id="project-info" placeholder="Add project info..." />
                <NormalButton text="Save" callback={sendForm} />
            </Content>
        </Wrapper>
    );
}

export default ProjectForm;