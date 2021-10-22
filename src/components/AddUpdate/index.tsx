import React, { useState } from 'react';
import Select from 'react-select';
// Styles
import { Wrapper, Content, Label, Input, TextArea } from './AddUpdate.styles';
// Components
import NormalButton from '../Buttons/NormalButton';
// Helpers
import API, { Update, Member } from '../../API';

type Prop = {
  projectId: String;
  isShow: boolean;
  taskId: String;
  setIsediting: Function;
};

const AddUpdate: React.FC<Prop> = ({
  projectId,
  isShow,
  taskId,
  setIsediting,
}) => {
  const [message, setMessage] = useState();
  const [member, setMember] = useState();

  const handleSubmit = async () => {
    const d = new Date();
    const sendingData = {
      message: message,
      member: member,
    };

    console.log('sending the update');
    const response = await API.addUpdate(projectId, taskId, sendingData);
    console.log(response);
    setIsediting(false);
    window.location.reload(false);
  };

  return (
    <Wrapper className={isShow ? 'active' : ''}>
      <Content id="myForm">
        <Label>Message</Label>
        <Input
          type="text"
          value={message}
          onChange={(event: any) => setMessage(event.currentTarget.value)}
        />
        <Label>Member</Label>
        <Input
          type="text"
          value={member}
          onChange={(event: any) => setMember(event.currentTarget.value)}
        />
        <NormalButton text="Save" callback={handleSubmit} />
      </Content>
    </Wrapper>
  );
};

export default AddUpdate;
