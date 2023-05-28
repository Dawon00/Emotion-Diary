import React from "react";
import { Link } from "react-router-dom";

function RouteTest() {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <br></br>
            <Link to={"/diary"}>Diary</Link>
            <br></br>
            <Link to={"/edit"}>Edit</Link>
        </div>
    );
}

export default RouteTest;
