import { useState, useContext } from 'react';
import ByActorNameCSS from './ByActorName.module.css';
import {ActorsData} from '../context/ActorsData';

const ByActorName = ()=>{
    const [formData, setFormData] = useState("");
    const {findActor} = useContext(ActorsData);

    function handelInput(e) {
        setFormData(e.target.value);
    };

    function handelSubmit(e) {
        e.preventDefault();
        if (formData !== "") {
            findActor(formData);
            setFormData('');
        }
    };

    return (
    <form onSubmit={handelSubmit} className={`${ByActorNameCSS.wrapper} section-margin`}>
        <input type="text" name="actorSearch" id="actorSearch" value={formData} onChange={handelInput} placeholder="e.g. Steve Carell ..."/>
        <button>Search</button>
    </form>
    );
};

export default ByActorName;