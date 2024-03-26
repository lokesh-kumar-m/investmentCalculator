import { calculateInvestmentResults, formatter } from "../util/investment.js";
const Resutls = ({ inputData }) => {
  const results = calculateInvestmentResults(inputData);
  const initaialInvestment =
    results[0].valueEndOfYear -
    results[0].annualInvestment -
    results[0].interest;

  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Invested Amount</th>
            <th>Interest</th>
            <th>Total</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((entry) => {
            const totalInterest =
              entry.valueEndOfYear -
              entry.annualInvestment * entry.year -
              initaialInvestment;
            const totalInvestment = entry.valueEndOfYear - totalInterest;
            return (
              <tr key={entry.year}>
                <td>{entry.year}</td>
                <td>{formatter.format(entry.valueEndOfYear)}</td>
                <td>{formatter.format(entry.interest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
                <td>{totalInterest}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Resutls;
