import React from 'react';
import '../styles/style.css';
import { NavLink } from 'react-router-dom';
import Footer from "./footer";

const SignUpForm = () => {
    return (
        <form id="sign_up_form">
            <div className="field">
                <input id="user_first_name" type="text" placeholder="First name" required="" />
            </div>
            <div className="field">
                <input id="user_last_name" type="text" placeholder="Last name" required="" />
            </div>
            <div className="field">
                <input id="user_email" type="email" placeholder="Email" required="" />
            </div>
            <div className="field">
                <input id="user_password" type="password" placeholder="Password" required="" />
            </div>
            <div className="field">
                <input id="user_password_confirmation" type="password" placeholder="Confirm password" required="" />
            </div>
            <button type="submit">Sign up</button>
        </form>
    )
}

const SignUp = () => {
    return (
        <div className='marginTop'>
            <main id='main-container' role='main'>
                <div className='view-container sessions new'>
                    <main>
                        <header>
                            <div className='logo'></div>
                        </header>
                        <SignUpForm />
                        <div className='second_view'>
                            <NavLink to={"/signin"}>Sign in</NavLink>
                        </div>
                    </main>
                </div>
                {/*<Footer />*/}
            </main>
        </div>
    )
}

export default SignUp;