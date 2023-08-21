import { useState } from "react";
import UnitConverter from "./unit-converter";
import UnitSelector1 from "./unit-selector1";


function App() {
  const [unitOptgroup, setUnitOptgroup] = useState();
  const [unitLeft, setUnitLeft] = useState();
  const [unitRight, setUnitRight] = useState();
  console.log("app");
  console.log("unitOptgroup, unitLeft, unitRight");
  console.log(unitOptgroup, unitLeft, unitRight);
  console.log("\n");

  return (
    <div className="App">
      <h1 className="main-title">Koogle Unit Converter</h1>
      <UnitSelector1 setUnitOptgroup={setUnitOptgroup} />

      <UnitConverter
        unitOptgroup={unitOptgroup}
        unitLeft={unitLeft}
        setUnitLeft={setUnitLeft}
        unitRight={unitRight}
        setUnitRight={setUnitRight}
      />
    </div>
  );
}

export default App;
