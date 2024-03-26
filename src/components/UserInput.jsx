const UserInput = ({ userData, inputChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment </label>
          <input
            type="number"
            value={userData.initialInvestment}
            onChange={(event) =>
              inputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment </label>
          <input
            type="number"
            value={userData.annualInvestment}
            onChange={(event) =>
              inputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return </label>
          <input
            type="number"
            value={userData.expectedReturn}
            onChange={(event) =>
              inputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Years</label>
          <input
            type="number"
            value={userData.duration}
            onChange={(event) => inputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
