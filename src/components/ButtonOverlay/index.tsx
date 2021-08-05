import React from "react";
import { useHistory } from "react-router-dom";
// Components
import NormalButton from "../Buttons/NormalButton";
// Stlyes
import './ButtonOverlay.css';

interface Prop {
    showOverlay: boolean
    callback: () => void
}

const ButtonOverlay: React.FC<Prop> = ({ showOverlay, callback }) => {
    const history = useHistory();

    return (
        <div className={showOverlay ? 'button-overlay active' : 'button-overlay'} onClick={callback}>
            <div className='content'>
                <h2 className="headertext">Create a new</h2>
                <NormalButton text="Project" callback={() => history.push('/create-project')} />
                <NormalButton text="Annoucement" callback={() => { history.go(0) }} />
            </div>
        </div>
    );
}

export default ButtonOverlay;