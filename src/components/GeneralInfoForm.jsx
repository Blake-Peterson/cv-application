
export default function GeneralInfoForm(){
    return(
        <div id="general-info-form-container">
            <form action="./GeneralInfo.jsx" method="get">
                <div className="form-contents">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" id="fname" name="fname"/>
                </div>
                <div className="form-contents">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname"/>
                </div>
                <div className="form-contents">
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="form-contents">
                    <label htmlFor="cellphone">Phone Number:</label>
                    <input type="text" id="cellphone" name="cellphone"/>
                </div>
            </form>
        </div>
    );
}