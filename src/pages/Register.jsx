import { useState } from "react"

function Register(){
const[formData, setFormData] = useState({
    name:"", name2:"", email:"", password:""
}) 

const changeHandler = (e) => {
    setFormData(prev => ({
        ...prev, [e.target.name]: [e.target.value],
    }))
}

const submitHandler = (e) => {
e.preventDefault();
console.log(formData);
alert("The Form is submitted Thank you and please check console");
}

    return(
        <div className="d-flex justify-content-center align-items-center vh-100" style={{
            backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2X1KHMknmQi_mC_z3Gu_ZGf7Cw5ahIBL8NrqOa5k2rg&s)",
            backgroundSize:"cover",
        }}>
            <div className="card p-3 text-center shadow" style={{width:"40%"}}>
                <h2>Sign-Up</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="name">First Name:</label>
                    <input className="form-control" type="text" name="name" 
                    value={formData.name} onChange={changeHandler} required/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="name2">Last Name:</label>
                    <input className="form-control" type="text" name="name2" 
                    value={formData.name2} onChange={changeHandler} required/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email"
                    value={formData.email} onChange={changeHandler} required/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-control" type="password" name="password" 
                    value={formData.password} onChange={changeHandler} required/>
                    </div>
                    <button className="btn btn-success w-100">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register