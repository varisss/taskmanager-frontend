import React, { useState } from 'react';
import Select from 'react-select';
// Styles
import { Wrapper, Content, Label, Input, TextArea } from './EditForm.styles';
// Components
import NormalButton from '../Buttons/NormalButton';
// Helpers
import API, { Update, Member } from '../../API';

type Prop = {
  projectId: String;
  isShow: boolean;
  data: Update;
  setIsediting: Function;
};

const EditForm: React.FC<Prop> = ({
  projectId,
  isShow,
  data,
  setIsediting,
}) => {
  const [editName, setEditName] = useState(data.name);
  const [selectMembers, setSelectMembers] = useState(data.members);
  const [editDesc, setEditDesc] = useState(data.description);
  const [editStatus, setEditStatus] = useState(data.status);

  const handleSubmit = async () => {
    const d = new Date();
    const sendingData = {
      name: editName,
      description: editDesc,
      members: selectMembers,
      status: editStatus,
    };

    console.log('sending the created project');
    const response = await API.updateProject(projectId, sendingData);
    console.log(response);
    setIsediting(false);
    window.location.reload(false);
  };

  return (
    <Wrapper className={isShow ? 'active' : ''}>
      <Content id="myForm">
        <Label>Edit name</Label>
        <Input
          type="text"
          value={editName}
          onChange={(event) => setEditName(event.currentTarget.value)}
        />
        <Label>Edit Status</Label>
        <Input
          type="text"
          value={editStatus}
          onChange={(event) => setEditStatus(event.currentTarget.value)}
        />
        <Label>Edit member</Label>
        <Select
          isMulti
          closeMenuOnSelect={false}
          options={data.members.map((member: Member, index) => ({
            value: index,
            label: member.name,
          }))}
          onChange={(event) => {
            setSelectMembers(
              Array.isArray(event)
                ? event.map((x) => data.members[x.value])
                : []
            );
          }}
        ></Select>
        <Label>Edit info</Label>
        <TextArea
          value={editDesc}
          onChange={(event) => setEditDesc(event.currentTarget.value)}
        />
        <NormalButton text="Save" callback={handleSubmit} />
      </Content>
    </Wrapper>
  );
};

export default EditForm;
