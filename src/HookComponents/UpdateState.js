import React, {useState} from "react";

function HookUseState(){

const [count, newValue] = useState(2)

return (
  <div>
    <button onClick = {()=> newValue(count - 1)}>count{count}</button>
  </div>
)
}
export default HookUseState;