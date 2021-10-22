import React, { useEffect, useState } from 'react';
import API from '../API';
//Components
import Headbar from './Headbar';
import NoContent from './NoContent';
import ButtonOverlay from './ButtonOverlay';
import AddButton from './Buttons/AddButton';
import ProjectList from './Project/ProjectList';
// images
import Budda from '../images/budda.png';

interface HomeProps {
  setProjectId: Function;
}

const initialState: any = [];

const Home: React.FC<HomeProps> = ({ setProjectId }) => {
  const [showButtonOverlay, setShowButtonOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState(initialState);

  useEffect(() => {
    const fetchProj = async () => {
      setIsLoading(true);
      const proj: any = await API.fetchProjects();
      setProjects(proj);
      setIsLoading(false);
    };
    fetchProj();
  }, []);

  console.log(projects);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <Headbar header="dreamteam101" />
      {!isLoading && projects.length > 0 ? (
        <ProjectList projects={projects} setProjectId={setProjectId} />
      ) : (
        <NoContent
          heading="Team Project shows here"
          subheading={`There are no projects\nin your team right now`}
          image={Budda}
        />
      )}
      <AddButton callback={() => setShowButtonOverlay(!showButtonOverlay)} />
      <ButtonOverlay
        showOverlay={showButtonOverlay}
        callback={() => setShowButtonOverlay(false)}
      />
    </>
  );
};

export default Home;
