import Router from 'next/router'
import React, { useState, useEffect, Component, FormEventHandler } from "react"
import Navbar from '../components/navbar'
import withPublicRoute from '../components/withPublicRoute'
import saveUser from '../lib/saveUser'

function LoginPage(): JSX.Element {
    const [email, setEmail] = useState("") // input field data
    const [password, setPassword] = useState("") // input field data
    const [localEmail, setLocalEmail] = useState("")
    const [localPassword, setLocalPassword] = useState("")

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        setLocalEmail(email)
        setLocalPassword(password)
        saveUser('user', JSON.stringify({email: email, password: password}))
        Router.push('/')
    };

    if (localEmail !== "" && localPassword !== "") { // if there's a user show the message below
        return (
            <>
                <Navbar />
                <div id="body-container" className="md:max-w-sm md:mx-auto grid grid-flow-rows gap-80 px-15 pb-80 pt-150 md:gap-70 md:px-20 md:pb-70 md:pt-120">
                <p className="text-white text-center">Welcome</p>
                </div>
            </>
        )
    }
    else { // if there's no user, show the login form
      return (
          <>
            <Navbar />
            <div id="body-container" className="md:max-w-sm md:mx-auto grid grid-flow-rows gap-20 px-15 pb-80 pt-150 md:gap-30 md:px-20 md:pb-70 md:pt-120 text-center">
            <form onSubmit={handleSubmit}>
                <p className="text-white mb-10">Email:</p>
                <input
                id="email"
                type="email"
                value={ email }
                placeholder="enter an email"
                className="mb-20 w-full transition p-10 duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
                onChange={({ target }) => setEmail(target.value)}
                />
                <div>
                <p className="text-white mb-10">Password:</p>
                <input
                    id="password"
                    type="password"
                    value={ password }
                    placeholder="enter a password"
                    className="mb-20 w-full transition p-10 duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                    focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
                    onChange={({ target }) => setPassword(target.value)}
                />
                </div>
                <button className="p-10 w-full bg-btn-primary rounded-full text-primary font-bold" type="submit">Login</button>
            </form>
            </div>
        </>
      );
    }
}

export default withPublicRoute(LoginPage)