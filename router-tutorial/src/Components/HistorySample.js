import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goback = () => {
    // 뒤로가기
    history.goBack();
  };

  const gohome = () => {
    // 특정 경로로 이동
    history.push("/");
  };

  const replaceToHome = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goback}>뒤로가기</button>
      <button onClick={gohome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  );
}

export default HistorySample;
