import {useState} from 'react';

export default function Education(){

    const [inputs, setInputs]=useState("");
    const [isActive, setIsActive]=useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("form submitted");
        setIsActive(true);
    }

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}) );
    }

    return(
        <div id="education-container">
            <h1>Education</h1>
            <p>Please fill out the information below</p>
            <div id="education-form-container">
                { !isActive ? (                
                    <form onSubmit={handleSubmit}>
                        <div className="form-contents">
                            <label htmlFor="school">Name of School:</label>
                            <input 
                                type="text" 
                                id="school" 
                                name="school"
                                value = {inputs.school}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="major">Major:</label>
                            <input 
                                type="text"     
                                id="major" 
                                name="major"
                                value = {inputs.major}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="school_start">School Start Date:</label>
                            <input 
                                type="date" 
                                id="school_start" 
                                name="school_start"
                                value = {inputs.school_start}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="school_end">School End Date:</label>
                            <input 
                                type="date" 
                                id="school_end" 
                                name="school_end"
                                value = {inputs.school_end}
                                onChange={handleChange}
                            />
                        </div>
                        <input type="submit" />
                    </form>
                ) : (
                        <div className="form-data">
                        <p>School: {inputs.school}</p>
                        <p>Major: {inputs.major}</p>
                        <p>Start Date: {inputs.school_start}</p>
                        <p>End Date: {inputs.school_end}</p>
                        <button onClick={() => setIsActive(false)}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}