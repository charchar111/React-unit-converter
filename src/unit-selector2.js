import { useEffect } from "react";

// function setConvertGroup(event, setUnit) {
//   setUnit(event.target.value);
// }

function selectUnitgroup(unitOptgroup) {
  let units;
  switch (unitOptgroup) {
    case "길이":
      units = ["킬로미터", "미터", "센치미터", "밀리미터", "마일"];
      break;
    case "시간":
      units = ["초", "분", "시간", "일", "주", "년"];
      break;
    case "면적":
      units = ["제곱미터", "제곱킬로미터", "제곱마일"];
      break;
  }
  return units;
}

function UnitSelector2({ unitOptgroup, unit, setUnit, datasetting }) {
  const unitsValue = selectUnitgroup(unitOptgroup);

  useEffect(() => {
    const value =
      unitsValue && datasetting == "converter-left"
        ? unitsValue[0]
        : unitsValue && datasetting == "converter-right"
        ? unitsValue[1]
        : undefined;

    setUnit(value);
  }, [unitOptgroup]);
  return (
    <select
      onInput={(event) => {
        setUnit(event.target.value);
      }}
      className="unit-selector"
      data-type={datasetting}
      value={unit}
    >
      {unitsValue?.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </select>
  );
}

export default UnitSelector2;
    