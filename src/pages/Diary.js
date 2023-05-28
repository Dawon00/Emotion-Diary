import React from "react";
import { useParams } from "react-router-dom";

function Diary() {
    const { id } = useParams();
    return <div>Diary</div>;
}

export default Diary;
