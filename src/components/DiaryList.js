import React, { useState } from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
    { value: "all", name: "전부 다" },
    { value: "good", name: "행복" },
    { value: "bad", name: "슬픔" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
    return (
        <select
            className="ControlMenu"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {optionList.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

function DiaryList({ diaryList }) {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    // 정렬된 일기 목록을 반환하는 함수
    const getProcessedDiaryList = () => {
        const filterCallBack = (item) => {
            if (filter === "good") {
                return (
                    parseInt(item.emotion) === 1 || parseInt(item.emotion) === 2
                );
            } else {
                return parseInt(item.emotion) >= 3;
            }
        };

        const compare = (a, b) => {
            if (sortType === "latest") {
                return b.date - a.date;
            } else {
                return a.date - b.date;
            }
        };
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList =
            filter === "all"
                ? copyList
                : copyList.filter((item) => filterCallBack(item));
        filteredList.sort(compare);
        return filteredList.sort(compare);
    };
    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu
                        value={sortType}
                        onChange={setSortType}
                        optionList={sortOptionList}
                    ></ControlMenu>
                    <ControlMenu
                        value={filter}
                        onChange={setFilter}
                        optionList={filterOptionList}
                    ></ControlMenu>
                </div>
                <div className="right_col">
                    <MyButton
                        type={"positive"}
                        text={"새 일기 쓰기"}
                        onClick={() => {
                            navigate("/new");
                        }}
                    ></MyButton>
                </div>
            </div>

            {getProcessedDiaryList().map((item) => (
                <DiaryItem key={item.id} {...item}></DiaryItem>
            ))}
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;
