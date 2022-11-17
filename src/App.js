import Props from "./components/props";
import PropsButton from "./components/PropsButton";

function App() {
  return(
  <div>
    <Props/>
    <PropsButton text="Example Text"/>
    <br/>
    <br/>
    <PropsButton text="New Text"/>
    <br/>
    <br/>
    <PropsButton newProp="Testing New Prop"/>
    <br/>
    <br/>
    <Props>
      <p>This is child prop</p>
    </Props>
  </div>
)}

 export default App;
