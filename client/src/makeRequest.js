// import React from 'react'

// const makeRequest = () => {
//     const [message, setMessage] = useState("");

//     // Fetching message from backend on mount
//     useEffect(() => {
//         const baseUrl = process.env.NODE_ENV === 'development'
//             ? "http://localhost:4000"
//             : "https://menhew-server.onrender.com/";

//         fetch(`${baseUrl}/`)
//             .then((res) => res.json())
//             .then((data) => setMessage(data.message));
//     }, []);
//     return (
//         <div>
//             <h1>{message}</h1>
//         </div>
//     )
// }

// export default makeRequest