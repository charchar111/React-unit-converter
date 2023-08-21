import { useEffect } from "react";

function setConvertGroup(event, setUnitOptgroup) {
  setUnitOptgroup(event.target.value);
}

function UnitSelector1({ setUnitOptgroup }) {
  useEffect(() => {
    const selectDefaultValue = document.querySelector(
      `select[data-type="unit-selector"]`
    )?.value;

    if (selectDefaultValue) {
      setUnitOptgroup(selectDefaultValue);
    } //
  }, []);
  return (
    <select
      data-type="unit-selector"
      onInput={(event) => setConvertGroup(event, setUnitOptgroup)}
      className="unit-selector"
    >
      <option value="길이">길이</option>
      <option value="시간">시간</option>
      <option value="면적">면적</option>
    </select>
  );
}

export default UnitSelector1;
