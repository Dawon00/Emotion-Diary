import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MyHeader
                    headText={"App"}
                    leftChild={
                        <MyButton
                            text={"왼쪽 버튼"}
                            onClick={() => {
                                alert("왼쪽 클릭");
                            }}
                        ></MyButton>
                    }
                    rightChild={
                        <MyButton
                            text={"오른쪽 버튼"}
                            onClick={() => {
                                alert("오른쪽 클릭");
                            }}
                        ></MyButton>
                    }
                ></MyHeader>
                <h2>app.js</h2>
                <MyButton
                    text={"버튼"}
                    onClick={() => {
                        alert("버튼클릭");
                    }}
                ></MyButton>
                <MyButton
                    text={"버튼"}
                    onClick={() => {
                        alert("버튼클릭");
                    }}
                    type={"positive"}
                ></MyButton>
                <MyButton
                    text={"버튼"}
                    onClick={() => {
                        alert("버튼클릭");
                    }}
                    type={"negative"}
                ></MyButton>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/new" element={<New />}></Route>
                    <Route path="/edit" element={<Edit />}></Route>
                    <Route path="/diary/:id" element={<Diary />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
