import {useState} from 'react';

export default function Education(){

    const [inputs, setInputs]=useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("form submitted");
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
                <form action="./App.jsx" method="get" onSubmit={handleSubmit}>
                    <div className="form-contents">
                        <label htmlFor="school">Name of School:</label>
                        <input 
                            type="text" 
                            id="school" 
                            name="school"
                            value = {inputs.fname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-contents">
                        <label htmlFor="major">Major:</label>
                        <input 
                            type="text"     
                            id="major" 
                            name="major"
                            value = {inputs.lname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-contents">
                        <label htmlFor="school-start">School Start Date:</label>
                        <input 
                            type="date" 
                            id="school-start" 
                            name="school-start"
                            value = {inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-contents">
                        <label htmlFor="school-end">School End Date:</label>
                        <input 
                            type="date" 
                            id="school-end" 
                            name="school-end"
                            value = {inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}