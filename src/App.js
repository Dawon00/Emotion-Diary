import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import { useReducer, useRef } from "react";

// reducer 함수를 function 키워드로 선언하기
function reducer(state, action) {
    let newState = [];
    switch (action.type) {
        case "INIT": {
            return action.data;
        }
        case "CREATE": {
            const newItem = {
                ...action.data,
            };
            newState = [newItem, ...state];
            break;
        }
        case "REMOVE": {
            newState = state.filter((item) => item.id !== action.data.id);
            break;
        }
        case "EDIT": {
            newState = state.map((item) =>
                item.id === action.data.id ? { ...action.data } : item
            );
        }
        default:
            return state;
    }
}

export const DiaryStateContext = React.createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, []);

    const dataId = useRef(0);
    // CREATE
    const onCreate = (date, content, emotion) => {
        dispatch({
            type: "CREATE",
            data: {
                id: dataId.current++,
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
        dataId.current++;
    };
    // REMOVE
    const onRemove = (targetId) => {
        dispatch({
            type: "REMOVE",
            targetId,
        });
    };
    // EDIT
    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type: "EDIT",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
    };
    return (
        <DiaryStateContext.Provider value={data}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/new" element={<New />}></Route>
                        <Route path="/edit" element={<Edit />}></Route>
                        <Route path="/diary/:id" element={<Diary />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </DiaryStateContext.Provider>
    );
}

export default App;
