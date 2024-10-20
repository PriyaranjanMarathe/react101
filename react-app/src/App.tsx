// import ListGroup from "./components/ListGroup"
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  // The list of items
  // const items = ['New York', 'London', 'SF', 'Denver'];
  // const handleSelectedItem = (item: string) => { console.log(item) }

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} /></div>
  // return (<div><Alert><h1>Hello World</h1></Alert></div>);
  return (
    <div>
      {alertVisible && <Alert>My alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button></div >)
}

export default App;
