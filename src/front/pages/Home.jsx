import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		<>
		<div className="d-flex justify-content-center align-items-center mt-4">
			<h2>Hey, let's try one of these buttons above?</h2>
			</div>
			<div className="d-flex justify-content-center align-items-center">

		 <button className="btn btn-primary ms-3 mt-4" onClick={() => navigate("/singup")}>Sign up</button>
		 <button className="btn btn-primary  ms-3 mt-4" onClick={() => navigate("/login")}>Login</button>
		 <button className="btn btn-primary ms-3 mt-4" onClick={() => navigate("/private")}>Private</button>
		 </div>
		 </>
		 
	)
}; 