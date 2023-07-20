import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import "./styling.css";

function Button(props) {
  const saveButton = props.saveButton;
  // const clickedButton = props.clickedButton;
   return saveButton === true ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;

 //create conditional for these buttons
 //import styling
 