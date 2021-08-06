import React from "react";
import { useHistory } from "react-router-dom";
// Components
import NormalButton from "../Buttons/NormalButton";
// Stlyes
import './ButtonOverlay.css';

interface Prop {
    buttonText1?: string
    buttonText2?: string
    link1?: string
    link2?: string | undefined
    showOverlay: boolean
    callback: () => void
}

const ButtonOverlay: React.FC<Prop> = ({ buttonText1 = "Project", buttonText2 = "Announcement", link1="create-project", link2, showOverlay, callback }) => {
    const history = useHistory();

    return (
        <div className={showOverlay ? 'button-overlay active' : 'button-overlay'} onClick={callback}>
            <div className='content'>
                <h2 className="headertext">Create a new</h2>
                <NormalButton text={buttonText1} callback={() => history.push(`${link1}`)} />
                <NormalButton text={buttonText2} callback={() => {
                    if (link2) history.push(`${link2}`)
                }} />
            </div>
        </div>
    );
}

export default ButtonOverlay;