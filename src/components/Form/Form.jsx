import React from 'react';
import { exchangeCurrency } from 'service/chendeCurrency';

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {value} = e.target.elements.currency;
    //console.log(e.target.elements.currency.value);
    //console.log(value.split(' ')); 
    const [amount, from, ,to] =value.split(' ');
    //console.log({amount, from, to});
    exchangeCurrency({amount, from, to})
  } 
  return (
    // <div>Form</div>
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="currency" placeholder='15 USD in UAH'/>
      </label>
      <button type="submit">Change</button>
    </form>
  );
};

//export default Form;
