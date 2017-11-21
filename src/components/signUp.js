import React from 'react';
import '../styles/style.css';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signIn, signOut, signUp } from '../actions/actions';
import Footer from "./footer";

const SignUpForm = () => {
    return (
        <form id="sign_up_form" onSubmit={
            e => {
                e.preventDefault();
                signUp(this.firstnameRef.value, this.lastnameRef.value, this.emailRef.value, this.passwordRef.value)
            }
        }>
            <div className="field">
                <input id="user_first_name" type="text" placeholder="First name" ref={e => this.firstnameRef = e} required />
            </div>
            <div className="field">
                <input id="user_last_name" type="text" placeholder="Last name" ref={e => this.lastnameRef = e} required />
            </div>
            <div className="field">
                <input id="user_email" type="email" placeholder="Email" ref={e => this.emailRef = e} required/>
            </div>
            <div className="field">
                <input id="user_password" type="password" placeholder="Password" ref={e => this.passwordRef = e} required />
            </div>
            <div className="field">
                <input id="user_password_confirmation" type="password" placeholder="Confirm password" required />
            </div>
            <button type="submit">Sign up</button>
        </form>
    )
}

const SignUp = ({successLogin}) => {
    return (
        <div>
            {
                successLogin && <Redirect to="/board" />
            }
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
        </div>
    )
}

//export default SignUp;
const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(SignUp);