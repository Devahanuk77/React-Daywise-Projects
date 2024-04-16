import React, { useState } from "react";

const Deposit = () => {
  const [amount, setAmount] = useState(0);

  // const handleDeposit =()=>{
  //   setAmount(amount+100);
  //   setAmount(amount+100);
  //   setAmount(amount+100);
  //   setAmount(amount+100);
  //   console.log(amount); // internal state value is 0.
  //   console.log("rendering");
  // }

  const handleDeposit = () => { // callback function
    setAmount((a) => {
      console.log("a value",a);
      return a + 100;
    });
    setAmount((a) => {
      return a + 100;
    });
    setAmount(a =>{
      return a+100
    });
    console.log(amount);
  };
  console.log("amount after re rendering ",amount);
  console.log("rendering");
  return (
    <div>
      <h2>Deposit amount</h2>
      <h3>Current :{amount}</h3>
      <button onClick={handleDeposit}>Deposit 100</button>
    </div>
  );
};

export default Deposit;
