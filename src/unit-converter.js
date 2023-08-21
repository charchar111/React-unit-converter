import { useEffect, useState } from "react";
import UnitSelector2 from "./unit-selector2";

function UnitConverter({
  unitOptgroup,
  unitLeft,
  setUnitLeft,
  unitRight,
  setUnitRight,
}) {
  const [inputValueLeft, setInputValueLeft] = useState(0);
  const [inputValueRight, setInputValueRight] = useState(0);
  // inputValueRight==1일 때는 이펙트의 최초 실행을 안함. 버그 방지 목적

  function convertValue(value, argDirection) {
    console.log("convertValue:", unitOptgroup, value, unitLeft, unitRight);
    if (unitOptgroup == undefined) {
      return;
    }

    let convertTable;
    switch (unitOptgroup) {
      case "길이":
        convertTable = {
          킬로미터: 1000000,
          미터: 1000,
          센치미터: 10,
          밀리미터: 1,
          마일: 1609340,
        };
        break;
      case "시간":
        convertTable = {
          초: 1,
          분: 60,
          시간: 3600,
          일: 86400,
          주: 604800,
          년: 31540000,
        };
        break;
      case "면적":
        convertTable = {
          제곱미터: 1,
          제곱킬로미터: 1000000,
          제곱마일: 2589988,
        };
        break;
    }

    let convertedValue;
    switch (argDirection) {
      case "left":
        convertedValue =
          (value * convertTable[unitLeft]) / convertTable[unitRight];
        break;
      case "right":
        convertedValue =
          (value * convertTable[unitRight]) / convertTable[unitLeft];
        break;
    }
    return convertedValue;
  }

  useEffect(() => {
    setInputValueLeft(1);
    setInputValueRight(1);
  }, [unitOptgroup]);

  useEffect(() => {
    if (unitLeft !== undefined && unitRight !== undefined) {
      console.log("use effect left: ", inputValueLeft);
      const oppositeValue = convertValue(inputValueLeft, "left");
      setInputValueRight(oppositeValue);
    }
  }, [unitLeft]);

  useEffect(() => {
    if (
      inputValueRight !== 1 &&
      unitLeft !== undefined &&
      unitRight !== undefined
    ) {
      console.log("use effect right: ", inputValueRight);
      const oppositeValue = convertValue(inputValueRight, "right");
      setInputValueLeft(oppositeValue);
    }
  }, [unitRight]);

  function handleInput(event, direction) {
    const value = event.target.value;
    const oppositeValue = convertValue(
      value,
      direction == "left" ? "left" : "right"
    );
    setInputValueLeft(direction == "left" ? value : oppositeValue);
    setInputValueRight(direction == "left" ? oppositeValue : value);
  }
  return (
    <div className="unit-converter">
      <div className="unit-converter__left">
        <div className="row1">
          <input
            onInput={(event) => handleInput(event, "left")}
            type="number"
            value={inputValueLeft}
          />
        </div>
        <div className="row2">
          <UnitSelector2
            unitOptgroup={unitOptgroup}
            unit={unitLeft}
            setUnit={setUnitLeft}
            datasetting="converter-left"
          />
        </div>
      </div>
      <div className="unit-converter__middle">=</div>
      <div className="unit-converter__right">
        <div className="row1">
          <input
            onInput={(event) => handleInput(event, "right")}
            type="number"
            // value={direction == "left" ? inputValueRight : 2}
            value={inputValueRight}
          />
        </div>
        <div className="row2">
          <UnitSelector2
            unitOptgroup={unitOptgroup}
            unit={unitRight}
            setUnit={setUnitRight}
            datasetting="converter-right"
          />
        </div>
      </div>
    </div>
  );
}

export default UnitConverter;
