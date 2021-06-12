/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColofulMessage from "./compornents/ColorfulMessage";
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); //左stateとして使用する変数名、その変数を更新する関数
  const [appleShowFlag, setAppleShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setAppleShowFlag(!appleShowFlag);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        appleShowFlag || setAppleShowFlag(true); // 左がfalseだけset関数を動かす
      } else {
        appleShowFlag && setAppleShowFlag(false); //左がtrueの時だけ動かす
      }
    }
    //[]の中の条件だけ走らせたい処理を書く
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気です</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ↑</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {appleShowFlag && <p>🍎</p>}
    </>
  );
};

export default App; //このファイルをAppとして他のファイルでも使用できるようにする記述
