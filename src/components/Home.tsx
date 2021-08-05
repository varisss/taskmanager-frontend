import React, { useEffect, useState } from 'react';
import API from '../API';
import ButtonOverlay from './ButtonOverlay';
import AddButton from './Buttons/AddButton';
import ProjectList from './Project/ProjectList';

//components
import Headbar from './Headbar';

const initialState: any = [];

const Home: React.FC = () => {
    const [showButtonOverlay, setShowButtonOverlay] = useState(false);
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState(initialState);

    useEffect(() => {
        const fetchProj = async () => {
            const proj: any = await API.fetchProjects();
            setProjects(proj);
        }
        fetchProj();
    }, []);

    return (
        <>
            <Headbar header='dreamteam101' />
            <h1 className='main-title'>All Projects</h1>
            <ProjectList projects={projects} />
            <AddButton callback={() => setShowButtonOverlay(!showButtonOverlay)} />
            <ButtonOverlay showOverlay={showButtonOverlay} callback={() => setShowButtonOverlay(false)} />
        </>
    );
}

export default Home;