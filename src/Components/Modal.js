import React from "react";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export default function Modal({onClose})
{
    return (
        
        <div className="modal">
            <div className="modal-bg">
                <div className="modal-1">
                    <h1>Login</h1>
                    <button onClick={onClose} className="closeBtn"><CloseSharpIcon/></button>
                </div>
                <div className="login">
                    <input 
                        type="email" 
                        placeholder="Enter your email"

                    ></input>
                    <input 
                       type="password" 
                        placeholder="Enter your password"

                    ></input>
                    < button placeholder="Login" className="secondary-button" id="loginbtn">Login</button>
                    <div>
                        Not a member? <a href="" className="register">Register</a>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}