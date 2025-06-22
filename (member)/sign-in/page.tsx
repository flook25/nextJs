'use client'
import { useState } from "react"
export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        alert('u = ' + username + ', p = ' + password);
    }
    return (
        <form onSubmit={handleSignIn}
            className="flex flex-col gap-3">
            <div className="text-xl font-semibold">
                Sign In to BackOffice
            </div>
            <div>Username</div>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="border-1" />
            <div>Password</div>
            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password" className="border-1" />
            <button type="submit" className="btn">
                <i className="fa fa-check mr-2"></i>
                Sign In
            </button>
        </form>
    )
}