import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Tournament() {
    const [data, setData] = useState('');

    useEffect(() => {
        const options = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };
        axios.get(`https://kickit-backendnew.onrender.com/KickIt/getTournaments`, options)
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data.tour);
            })
            .catch((error) => console.log(error));
    }, []);

    const iconStyle = {
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "2em",
    };

    const searchBarContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "70px",
    };

    const searchBarStyle = {
        width: "800px",
        padding: "10px",
        fontSize: "1em",
        boxSizing: "border-box",
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
    };

    const searchIconContainerStyle = {
        marginLeft: "10px",
        cursor: "pointer",
        backgroundColor: "lightgray",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "1px solid black",
    };

    const searchIconStyle = {
        fontSize: "1.5em",
    };

    const handleSearchClick = () => {
        const searchValue = document.querySelector(".searchbar input").value;
        console.log("Searching for:", searchValue);
        // Add your search logic here
    };

    const Clickchat = () => {
        window.location.href = "https://e2ee-chatapp.vercel.app/";
    };

    const stylebutton = {
        marginTop: "20px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        borderRadius: "30px",
    };

    const stylebutton2 = {
        marginTop: "20px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        borderRadius: "30px",
        backgroundColor: "red",
    };

    const stylebuttonNew = {
        width: "100%",
        marginTop: "20px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "50px",
        justifyContent: "center",
        borderRadius: "30px",
    };

    const stylebuttonNew2 = {
        width: "100%",
        marginTop: "20px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "50px",
        justifyContent: "center",
        borderRadius: "30px",
        backgroundColor: "white",
        color: "black",
        border: "2px solid black",
    };

    const ClickSports = () => {
        console.log("Sports Button clicked!");
    };

    const NewButton = () => {
        console.log("New Button clicked!");
    };

    const textStyle = {
        fontSize: "0.8em",
    };

    return (
        <>
            <div style={searchBarContainerStyle}>
                <input type="text" className="searchbar" style={searchBarStyle} placeholder="Search..." />
                <div style={searchIconContainerStyle} onClick={handleSearchClick}>
                    <i className="fas fa-search" style={searchIconStyle}></i>
                </div>
            </div>
            <h1>
                {data &&
                    Object.keys(data).map((key, i) => (
                        <div
                            className="sports"
                            key={i}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "20px",
                            }}
                        >
                            <div className="event" style={{ border: "1px solid black", padding: "10px", borderRadius: "10px" }}>
                                <h4>{data[key].activity}:</h4>
                                <h4>
                                    <a href={data[key].details} style={{ color: "blue" }}>
                                        Details
                                    </a>
                                </h4>
                                <div style={textStyle}>
                                    <span>Venue: {data[key].venue}</span>
                                    <span>Time: {data[key].time}</span>
                                    <span>Player Required: {data[key].playersRequired}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </h1>
            <div style={{ marginTop: "50px" }}>
                <div style={stylebutton}>
                    <button onClick={Clickchat}>Chat</button>
                    <button onClick={ClickSports} style={stylebutton2}>Sports</button>
                    <button onClick={NewButton} style={stylebuttonNew}>New Button</button>
                    <button onClick={NewButton} style={stylebuttonNew2}>New Button 2</button>
                </div>
            </div>
        </>
    );
}

export default Tournament;