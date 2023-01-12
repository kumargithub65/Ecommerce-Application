import React from "react";
import { useState } from "react";

let globalContext = React.createContext();

export function Global(props) {
  let [c, setC] = useState([]);
  let totalvaluee = c.reduce((acc, ele) => acc + ele.price, 0);

  let [totalvalue, setTotalvalue] = useState(0);
  let [incquant,setIncquant] = useState(1)
  let value
  let globalState = {
    carts: c,
    vall : incquant,
    total:totalvalue,
    cartset: (elem) => {

      // if(c.findIndex(ele=> ele.id === elem.id) === -1){
        
      setC([...c,elem]);
      // elem.quantity = 1
      // console.log(elem)
      // }else{
      //      console.log(elem)
      //     // setIncquant(incquant = incquant + 1)
      
      // }
    setTotalvalue([...c,elem].reduce((acc, ele) => acc + ele.price, 0))

    },
     setincrease :(price) => {
      setTotalvalue(totalvalue + +price);
    },
     setDecrease:(price) =>{
      setTotalvalue(totalvalue - +price);
    },
    
     removed:(id,pricesse)=> {
      let valuess = c.filter((ele) => ele.id === id);
      let values = c.filter((ele) => ele.id !== id);

        console.log(pricesse)
      setTotalvalue(+totalvalue -  +pricesse)
    setC(values)
    }
  };

  return (
    <globalContext.Provider value={globalState}>
      {props.children}
    </globalContext.Provider>
  );
}

export default globalContext;
