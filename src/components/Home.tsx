import React, { useEffect, useState } from 'react';
import API from '../API';
import ProjectList from './Project/ProjectList';

//components

const initialState: any = [];

const Home: React.FC = () => {
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
            <h1 className='main-title'>All Projects</h1>
            <ProjectList projects={projects} />
        </>
    );
}

export default Home;