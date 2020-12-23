import './App.css';
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Login() {
    const history = useHistory();
    var auth = true;
    var condition1 = true;
    var consdition2 = true;
    const onClick = () => {
        if (auth) {
            if (condition1 && consdition2) {
                history.push("/Dashboard");
            } else {
                history.push("/accessDenied");
            }
        } else {
            history.push("/accessDenied");
        }
    };

    return (
        <div className="App">
            <p>
                <div>Login page</div>
            </p>
            <p>
                <div>
                    <Button onClick={onClick} variant="contained" color="primary">
                        Login
</Button>
                </div>
            </p>
        </div>
    );
}

export default Login;
