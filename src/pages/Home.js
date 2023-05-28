import React, { useContext, useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";

function Home() {
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

    useEffect(() => {
        if (diaryList.length >= 1) {
            // 일기가 하나라도 있으면
            // 이번년도 이번 월의 1일을 구한다.
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();
            // 이번년도 이번 월의 마지막 일을 구한다.
            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0
            ).getTime();
            // 이번 월의 일기만 추려서 data에 저장한다.
            setData(
                diaryList.filter(
                    (item) => item.date >= firstDay && item.date <= lastDay
                )
            );
        }
    }, [diaryList, curDate]); // diaryList가 바뀔 때마다 실행된다.

    const increaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1),
            curDate.getDate()
        );
    };
    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1),
            curDate.getDate()
        );
    };
    return (
        <div>
            <MyHeader
                headText={headText}
                leftChild={
                    <MyButton text={"<"} onClick={decreaseMonth}></MyButton>
                }
                rightChild={<MyButton text={">"} onClick={increaseMonth} />}
            />
            <DiaryList diaryList={data} />
        </div>
    );
}

export default Home;
