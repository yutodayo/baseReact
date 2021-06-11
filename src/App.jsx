import React, { useState } from "react";
import ColofulMessage from "./compornents/ColorfulMessage";
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0); //左stateとして使用する変数名、その変数を更新する関数
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気です</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ↑</button>
      <p>{num}</p>
    </>
  );
};

export default App; //このファイルをAppとして他のファイルでも使用できるようにする記述
