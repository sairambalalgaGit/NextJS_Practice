"use client"
import axios from "axios";
import { useState } from "react"

export default function Signup(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="p-4 border rounded pb-4">

                <input onChange={(e) => {
                    setUsername(e.target.value)
                }} className="p-2 m-2" type="text" placeholder="username" />
                <br />

                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} className="p-2 m-2" type="text" placeholder="password" />
                <br />

                <div className="flex justify-center mt-4">
                    <button onClick={() => {
                        axios.post("http://localhost:3000/api/user", {
                            username,
                            password
                        });
                    }}>Sign Up</button>    
                </div>
                
            </div>
        </div>
        
    </div>
}