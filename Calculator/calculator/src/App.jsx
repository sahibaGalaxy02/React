import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (btn) => {
    if (btn === "C") {
      setValue("");
    } else if (btn === "=") {
      setValue(eval(value));
    } else {
      setValue(value + btn);
    }
  };

  return (
    <div id="calculator" className={styles.calculator}>
      <Display value={value} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
