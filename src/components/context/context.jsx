import React from "react";
import { useState } from "react";

let globalContext = React.createContext();

export function Global(props) {
  let [c, setC] = useState([]);
  let totalvaluee = c.reduce((acc, ele) => acc + ele.price, 0);

  let [totalvalue, setTotalvalue] = useState(0);
  let [incquant, setIncquant] = useState(1);
  let value;
  let globalState = {
    carts: c,
    vall: incquant,
    total: totalvalue,
    cartset: (elem) => {
      let aasa = c[c.findIndex((ele) => ele.id === elem.id)];

      if (c.findIndex((ele) => ele.id === elem.id) === -1) {
        // console.log(elem);
        setC([...c, elem]);
        // console.log({totalvalue})
        // console.log({elemp:elem.price})

        setTotalvalue(totalvalue + +elem.price )
        // console.log(elem.quantity);

   
      } else {

        // console.log({totalvalue})
// console.log({el:elem})
          let updatedata = c.map(ele => {
            if(ele.id === aasa.id){
            return{
              ...ele,quantity:ele.quantity + 1
            }
          }else{
            return ele
          }
          })
          setC(updatedata)
          // setC(
            // console.log({elemp:elem.price})
        setTotalvalue(+totalvalue + +elem.price)


      }

      // console.log(elem)
      // }else{

      //   +elem.quantity++
      //      console.log({...elem,quantity: elem.quantity})
      //     // setIncquant(incquant = incquant + 1)

      // }
      // setTotalvalue([...c, elem].reduce((acc, ele) => acc + ele.price, 0));
    },
    setincrease: (price,el,producttotal) => {

      let updatedata = c.map(ele => {
        if(ele.id === el.id){
        return{
          ...ele,quantity:ele.quantity + 1
        }
      }else{
        return ele
      }
      })
      setC(updatedata)
      // console.log(c)
      setTotalvalue(+totalvalue + +el.price)
    },
    setDecrease: (price,el) => {
      
      let updatedata = c.map(ele => {
        if(ele.id === el.id){
        return{
          ...ele,quantity:ele.quantity - 1
        }
      }else{
        return ele
      }
      })
      setC(updatedata)
      setTotalvalue(+totalvalue - +el.price)
    },

    removed: (id, pricesse) => {
      let valuess = c.filter((ele) => ele.id === id);
      let values = c.filter((ele) => ele.id !== id);

      // console.log(pricesse);
      setTotalvalue(+totalvalue - +pricesse);
      setC(values);
    },
  };

  return (
    <globalContext.Provider value={globalState}>
      {props.children}
    </globalContext.Provider>
  );
}

export default globalContext;
