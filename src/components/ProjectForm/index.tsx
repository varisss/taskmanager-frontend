import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";

// Styles
import { Wrapper, Content, Label, Input, TextArea } from './ProjectFrom.styles';

// Components
import NormalButton from "../Buttons/NormalButton";

// Helpers
import { hashCode } from "../../helper";
import API, { Member } from "../../API";

interface MemberProp {
    members: Member[],
}

const ProjectForm: React.FC<MemberProp> = ({ members }) => {
    const [projectName, setProjectName] = useState('');
    const [selectMembers, setSelectMembers] = useState([] as Member[]);
    const [projectInfo, setProjectInfo] = useState('');

    const history = useHistory(); // for backing to Home page

    const handleSubmit = async () => {
        // If project name is not type doesn't trigger API post
        if(projectName === "") {
            console.log("Plase type project name!");
            /* TO DO: Show error message to user */
            return;
        }
        const d = new Date()
        const sendingData = {
            name: projectName,
            description: projectInfo,
            members: selectMembers,
            start: d,
            status: "pending"
        }

        console.log("sending the created project");
        const response = await API.createProject(sendingData);
        console.log(response);
        /* TO DO: set loading state to trigger project all fecth in homepage */
        history.replace("/");
    }


    return (
        <Wrapper>
            <Content id="myForm">
                <Label>Project name</Label>
                <Input id="project-name" placeholder="Enter project name" type="text"
                    value={projectName} onChange={event => setProjectName(event.currentTarget.value)} />
                <Label>Project member</Label>
                <Select
                    isMulti
                    //closeMenuOnSelect={false}
                    options={members.map((member: Member, index) => ({ value: index, label: member.name }))}
                    onChange={event => {
                        setSelectMembers(Array.isArray(event) ? event.map(x => (members[x.value])) : [])
                    }}
                ></Select>
                <div>
                    {selectMembers.map(m => <p key={hashCode(m.name + m.role)}>{`${m.name}: ${m.role}`}</p>)}
                </div>
                <Label>Project info</Label>
                <TextArea id="project-info" placeholder="Add project info..."
                    value={projectInfo} onChange={event => setProjectInfo(event.currentTarget.value)} />
                <NormalButton text="Save" callback={handleSubmit} />
            </Content>
        </Wrapper>
    );
}

export default ProjectForm;

