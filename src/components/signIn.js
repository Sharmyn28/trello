import React from 'react';
import '../styles/style.css';
import { NavLink, Redirect } from 'react-router-dom';
import Footer from "./footer";
import { connect } from 'redux-zero/react';
import { signIn, signOut, signUp } from '../actions/actions'

const SignInForm = () => {
    return (
        <form id='sign_in_form' onSubmit={
            e => {
                e.preventDefault();
                signIn(this.emailInputRef.value, this.passwordInputRef.value)
            }
        }>
            <div className='field'>
                <input type="email" id='user_email' placeholder="Email" ref={e => this.emailInputRef = e} required />
            </div>
            <div className='field'>
                <input type="password" id='user_password' placeholder="Password" ref={e => this.passwordInputRef = e} required />
            </div>
            <button type='submit'>Sign in</button>
            <div className='second_view'>
                <NavLink to={"/signup"}>Create new account</NavLink>
            </div>
        </form>
    )
}

const SignIn = ({ successLogin }) => {
    return (
        <div>
            {
                successLogin && <Redirect to="/board" />
            }
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
        </div>
    )
}

const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(SignIn);
