import MoneyImage from "../assets/bag.png";

const Header = () => {
  return (
    <header className="header">
      <img src={MoneyImage} alt="Your Money Image" />
      <h1>Investment Manager</h1>
    </header>
  );
};
export default Header;
