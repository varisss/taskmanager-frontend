import React from "react";
import { Member } from "../../API";
// Styles
import { Wrapper, Content, Label, Input, TextArea } from './ProjectFrom.styles';

// Components
import NormalButton from "../Buttons/NormalButton";
import { useState } from "react";

interface MemberProp {
    members: Member[]
}

const ProjectForm: React.FC<MemberProp> = ({ members }) => {
    const [projectName, setProjectName] = useState('');
    const [selectMembers, setSelectMembers] = useState('');
    const [projectInfo, setProjectInfo] = useState('');


    const handleSubmit = () => {
        const form = new FormData();
        form.append("name", projectName);
        form.append("description", projectInfo);
        console.log("sending the created project");

    }

    return (
        <Wrapper >
            <Content>
                <Label>Project name</Label>
                <Input id="project-name" placeholder="Enter project name" type="text"
                    value={projectName} onChange={event => setProjectName(event.currentTarget.value)} />
                <Label>Project member</Label>
                <select value={selectMembers} onChange={event => setSelectMembers(event.currentTarget.value)}
                    color="#000">
                    {members.map((member) => (<option value={`${member.name},${member.role}`}>{`${member.name} : ${member.role}`}</option>))}
                </select>
                <Label>Project info</Label>
                <TextArea id="project-info" placeholder="Add project info..."
                    value={projectInfo} onChange={event => setProjectInfo(event.currentTarget.value)} />
                <NormalButton text="Save" callback={handleSubmit} />
            </Content>
        </Wrapper>
    );
}

export default ProjectForm;

