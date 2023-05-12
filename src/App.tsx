import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items: string[] = [
    "New York",
    "Kuala Lumpur",
    "Los Angeles",
    "Cairo",
    "Paris",
  ];

  const heading = "City List";

  const handleSelectItem = (item: string) => {
    console.log("item:", item);
  };

  return (
    <div className="mt-8 prose mx-8">
      <h1 className="text-teal-500 font-semibold text-5xl ">The Moose is TS</h1>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      <Alert onClose={() => setAlertVisible(false)}>
        <span className="badge badge-accent">Wow!</span> "Whadap Dawwgh!"
      </Alert>

      <Button onClick={(e) => setAlertVisible(true)} color="success">
        Alert
      </Button>
      <Button onClick={(e) => console.log("Clicked!", e.target)} color="danger">
        Danger!
      </Button>
      <Button
        onClick={(e) => console.log("Clicked!", e.target)}
        color="secondary"
      >
        Sedondary!
      </Button>
      <Button
        onClick={(e) => console.log("Clicked!", e.target)}
        color="primary"
      >
        Primary!
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <span className="badge badge-danger">Wow!</span> "What's going on?"
        </Alert>
      )}
    </div>
  );
}

export default App;
