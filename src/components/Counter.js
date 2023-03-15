import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/amount/action";
import { selectCurrentAmount } from "../store/amount/reducer";

function Counter() {
  const dispatch = useDispatch();
  const amount = useSelector(selectCurrentAmount);

  const handleDeposit = () => {
    dispatch(deposit());
  };

  const handleWithdraw = () => {
    dispatch(withdraw());
  };

  return (
    <div>
      <h1> {amount} </h1>
      <button onClick={handleDeposit}>Deposit $10</button>
      <button onClick={handleWithdraw}>Withdraw $10</button>
    </div>
  );
}

export default Counter;