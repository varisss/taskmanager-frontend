import React from "react";
// Components
import NormalButton from "../Buttons/NormalButton";
// Stlyes
import './ButtonOverlay.css';

interface Prop {
    showOverlay: boolean
    callback: () => void
}

const ButtonOverlay: React.FC<Prop> = ({ showOverlay, callback }) => {

    return (
        <div className={showOverlay ? 'button-overlay active' : 'button-overlay'} onClick={callback}>
            <div className='content'>
                <h2>Create a new</h2>
                <NormalButton text="Project" callback={() => { console.log("Create project") }} />
                <NormalButton text="Announcement" callback={() => { console.log("Create announcement") }} />
            </div>
        </div>
    );
}

export default ButtonOverlay;