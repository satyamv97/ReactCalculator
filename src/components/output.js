import Outputscreen from "./outputscreen"
import Button from "./button"
// import Buttonsection from "./buttonsection"
const Output=()=>{
    return(
        <div>
           <Outputscreen/>
           <div>
                <Button name={"C"}/>
                <Button name={"+/-"}/>
                <Button name="%"/>
                <Button name="/"/>
            </div>
      
        </div>
    )

};
export default  Output;