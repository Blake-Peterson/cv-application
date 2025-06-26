import {useState} from 'react';

export default function Experience(){

    const [inputs, setInputs]=useState("");
    const [isActive, setIsActive] = useState(false);

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
        <div id="experience-container">
            <h1>Expericence</h1>
            <p>Please fill out the information below</p>
            <div id="experience-form-container">
                {!isActive ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-contents">
                            <label htmlFor="company_name">Company Name:</label>
                            <input 
                                type="text" 
                                id="company_name" 
                                name="company_name"
                                value = {inputs.company_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="job_title">Job Title</label>
                            <input 
                                type="text"     
                                id="job_title" 
                                name="job_title"
                                value = {inputs.job_title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="description">Job Description</label>
                            <input 
                                type="text"     
                                id="description" 
                                name="description"
                                value = {inputs.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="job_start_date">Start Date:</label>
                            <input 
                                type="date" 
                                id="job_start_date" 
                                name="job_start_date"
                                value = {inputs.job_start_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-contents">
                            <label htmlFor="job_end_date">End Date:</label>
                            <input 
                                type="date" 
                                id="job_end_date" 
                                name="job_end_date"
                                value = {inputs.job_end_date}
                                onChange={handleChange}
                            />
                        </div>
                        <input type="submit" />
                    </form>
                ): (
                    <div className="form-data">
                        <p>Company Name: {inputs.company_name}</p>
                        <p>Title: {inputs.job_title}</p>
                        <p>Description: {inputs.description}</p>
                        <p>Start Date: {inputs.job_start_date}</p>
                        <p>End Date: {inputs.job_end_date}</p>
                        <p></p>
                        <button onClick={() => setIsActive(false)}>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}