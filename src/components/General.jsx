import {useState} from 'react';

export default function General(){

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
        <div id="general-info-container">
            <h1>General Information</h1>
            <p>Please fill out the information below</p>

            <div id="general-info-form-container">
                <form action="./GeneralInfo.jsx" method="get" onSubmit={handleSubmit}>
                    <div className="form-contents">
                        <label htmlFor="fname">First Name:</label>
                        <input 
                            type="text" 
                            id="fname" 
                            name="fname"
                            value = {inputs.fname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-contents">
                        <label htmlFor="lname">Last Name:</label>
                        <input 
                            type="text"     
                            id="lname" 
                            name="lname"
                            value = {inputs.lname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-contents">
                        <label htmlFor="email">Email Address:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value = {inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-contents">
                        <label htmlFor="phone">Phone Number:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value = {inputs.cellphone}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            onChange={handleChange}
                        />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}