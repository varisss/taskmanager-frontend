import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

// Styles
import { Wrapper, Content, Label, Input, TextArea } from './TaskForm.styles';

// Components
import NormalButton from '../Buttons/NormalButton';

// Helpers
import { hashCode } from '../../helper';
import API, { Member } from '../../API';

interface MemberProp {
  projectId: string;
  members: Member[];
}

const statusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'complete', label: 'Complete' },
];

const TaskForm: React.FC<MemberProp> = ({ projectId, members }) => {
  const history = useHistory();
  const [taskName, setTaskName] = useState('');
  const [selectMembers, setSelectMembers] = useState([] as Member[]);
  const [status, setStatus] = useState(statusOptions[0]);
  const [taskInfo, setTaskInfo] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async () => {
    // If project name is not type doesn't trigger API post
    if (taskName === '') {
      console.log('Plase type task name!');
      /* TO DO: Show error message to user */
      return;
    }
    const d = new Date();
    const sendingData = {
      project: projectId,
      name: taskName,
      description: taskInfo,
      members: selectMembers,
      status: status,
      start: d,
      deadline: deadline,
    };

    console.log('sending the created task');
    const response = await API.createTask(projectId, sendingData);
    console.log(response);
    /* TO DO: set loading state to trigger project all fecth in homepage */
    history.replace('/');
  };

  return (
    <Wrapper>
      <Content id="myForm">
        <Label>Task name</Label>
        <Input
          placeholder="Enter Task name"
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.currentTarget.value)}
        />
        <Label>Responsible persons</Label>
        <Select
          isMulti
          closeMenuOnSelect={false}
          options={members.map((member: Member, index) => ({
            value: index,
            label: member.name,
          }))}
          onChange={(event) => {
            setSelectMembers(
              Array.isArray(event) ? event.map((x) => members[x.value]) : []
            );
          }}
        ></Select>
        <ul>
          {selectMembers.map((m) => (
            <li
              key={hashCode(m.name + m.role).toString()}
            >{`${m.name}: ${m.role}`}</li>
          ))}
        </ul>
        <Label>Status</Label>
        <Select
          options={statusOptions}
          value={status}
          onChange={(event) => setStatus(event!)}
          defaultValue={statusOptions[0]}
        />
        {status.value === 'ongoing' ? (
          <>
            {' '}
            <Label>deadLine</Label>
            <Input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </>
        ) : null}
        <Label>Task info</Label>
        <TextArea
          placeholder="Add Task info..."
          value={taskInfo}
          onChange={(event) => setTaskInfo(event.currentTarget.value)}
        />
        <NormalButton text="Save" callback={handleSubmit} />
      </Content>
    </Wrapper>
  );
};

export default TaskForm;
