import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Edit() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const mode = searchParams.get("mode");
    return (
        <div>
            <h1>이곳은 일기 수정 페이지 입니다</h1>
            <button
                onClick={() => {
                    setSearchParams({ who: "dawon" });
                }}
            >
                {" "}
                바꾸기{" "}
            </button>
            <button
                onClick={() => {
                    navigate("/home");
                }}
            >
                홈으로 돌아가기
            </button>
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                뒤로가기
            </button>
        </div>
    );
}

export default Edit;
