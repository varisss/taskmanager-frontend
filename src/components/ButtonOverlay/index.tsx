import React from "react";
import { useHistory } from "react-router-dom";
// Components
import NormalButton from "../Buttons/NormalButton";
// Stlyes
import './ButtonOverlay.css';

interface Prop {
    itemToadd?: string
    link1?: string
    link2?: string | undefined
    showOverlay: boolean
    callback: () => void
}

const ButtonOverlay: React.FC<Prop> = ({ itemToadd = "Project", link1="create-project", link2, showOverlay, callback }) => {
    const history = useHistory();

    return (
        <div className={showOverlay ? 'button-overlay active' : 'button-overlay'} onClick={callback}>
            <div className='content'>
                <h2 className="headertext">Create a new</h2>
                <NormalButton text={itemToadd} callback={() => history.push(`${link1}`)} />
                <NormalButton text="Annoucement" callback={() => {
                    if (link2) history.push(`${link2}`)
                }} />
            </div>
        </div>
    );
}

export default ButtonOverlay;