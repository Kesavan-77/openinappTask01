import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'
import Brand from '../assets/brand.svg';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Discord from '../assets/discord.svg';
import Google from '../assets/google.svg';
import Apple from '../assets/apple.svg'

export default function SignIn() {
    const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your sign-in logic here

    // After successful sign-in, navigate to the dashboard or desired page
    navigate('/dashboard');
  }
  return (
    <div className='signIn'>
        <div className="company">
            <img src={Brand} alt='brand'></img>
            <p>BASE</p>
            <div className='media'>
                <img src={Github} alt='github'></img>
                <img src={Twitter} alt='twitter'></img>
                <img src={Linkedin} alt='Linkedin'></img>
                <img src={Discord} alt='discord'></img>
            </div>
        </div>
        <div className='login'>
            <div className='head'>
                <h1>Sign In</h1>
                <p>Sign in to your account</p>
            </div>
            <div className='g-a'>
                <p><img src={Google} alt='google'></img> sign in with google</p>
                <p><img src={Apple} alt='aaple'></img> sign in with Apple</p>
            </div>
            <div className='form'>
                <form>
                    <label>Email address</label>
                    <input type='email' className='input-box' name='email'></input>
                    <label>Password</label>
                    <input type='password' className='input-box' name='password'></input>
                    <p><a href="#">Forgot password?</a></p>
                    <button type='submit' className='submit' onClick={handleSignIn}>Sign In</button>
                </form>
            </div>
            <p class='reg'>Don't have an account? <a href='#'>Register here</a></p>
        </div>
    </div>
  )
}
