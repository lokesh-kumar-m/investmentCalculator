import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Resutls from "./components/Results";
function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 120,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = investment.duration > 0;
  function handleInputChange(key, newValue) {
    setInvestment((prevInvestmen) => {
      return { ...prevInvestmen, [key]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userData={investment} inputChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter valid values</p>}
      {inputIsValid && <Resutls inputData={investment} />}
    </>
  );
}

export default App;
