import { useDispatch } from "react-redux";
import "./componentsB.css";
import { InputData } from "../Redux/action.jsx";
export const ComponentB = () => {
  const dispatch = useDispatch();

  // Taking value of input and Dispatching input data to action through useDispatch hook.
  
  const handleChange = (e) => {
    dispatch(InputData(e.target.value));
  };
  return (
    <>
      <h1>Component B</h1>
      <input
        type="text"
        placeholder="Enter text"
        id="text-value"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};
