import CloackHeading from "./components/ClockHeading";
import CloackSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import"./App.css";


function App(){
return <div>
  <CloackHeading></CloackHeading>
  <CloackSlogan></CloackSlogan>
  <CurrentTime></CurrentTime>
</div>
}
export default App;
