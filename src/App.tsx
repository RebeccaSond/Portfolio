import Button from "./components/Button.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return <div>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
  </div>
}

export default App;