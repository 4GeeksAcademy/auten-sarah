import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email, password})
    });

      const data = await res.json();

 if (res.ok) {
    sessionStorage.setItem("accessToken", data.access_token);
    navigate("/private");
} else {
    setError("Email ou senha incorretos");
    return;
}
    }

 return (
        <>
       <form onSubmit={submit}>
  <div className="d-grid gap-2 col-6 mx-auto mt-4">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} aria-describedby="emailHelp"></input>
  </div>
  <div className="d-grid gap-2 col-6 mx-auto mt-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1"></input>
  </div>
  <div className="d-flex justify-content-center mt-4 ">
  <button type="submit" className="btn btn-primary">Login</button>
  <button className="btn btn-primary ms-3" onClick={() => navigate("/")}>Home</button>
  {error && <p className="text-danger">{error}</p>}
  </div>
</form>
       </>    
    );
};