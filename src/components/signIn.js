import React from 'react';
import '../styles/style.css';
import { NavLink } from 'react-router-dom';
import Footer from "./footer";

const SignInForm = () => {
    return (
        <form id='sign_in_form'>
            <div className='field'>
                <input type="email" id='user_email' placeholder="Email" required />
            </div>
            <div className='field'>
                <input type="password" id='user_password' placeholder="Password" required />
            </div>
            <button type='submit'>Sign in</button>
            <div className='second_view'>
                <NavLink to={"/signup"}>Create new account</NavLink>
            </div>
        </form>
    )
}

const SignIn = () => {
    return (
        <div className=''>
            <main id='main-container' role='main'>
                <div className='view-container sessions new'>
                    <main>
                        <header >
                            <div className='logo'></div>
                        </header>
                        <SignInForm />
                    </main>
                </div>
            </main>
            {/*<Footer />*/}
        </div>
    )
}

export default SignIn;