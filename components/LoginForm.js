import React, {useState} from 'react';
import validator from 'validator';
import './login.css';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({ email: "", password: ""});

    const[emailError, setEmailError] = useState("");

    const changeHandler = (event) =>{
        var email= event.target.value;
        const value=event.target.value;
        setDetails({
            ...details,
            [event.target.name]: value
        });

        if(validator.isEmail(email)) {
            setEmailError("Valid");

        }
        else{
            setEmailError('enter valid Email');
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();


        Login(details);
    }


    return (
        <div>
            <form id="form" method="post" >
                <h2>LOGIN</h2>
                <hr></hr>
                {(error != '') ? ( <div className="error">{error}</div> ) : ""}
                <input id="text" type="email" name="email" placeholder="Email" onChange={ changeHandler} value= {details.email} ></input>
                <br></br>
                <input id="text" type="password" name="password" placeholder="Password" onChange={ changeHandler} value= {details.password} ></input>
                <br></br>
                <input id="button" type="button" name="login" value="Login" onClick={submitHandler}  /> 
                <br></br>
            </form>
        </div>
    )
}

export default LoginForm;