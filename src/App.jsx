import { Theme } from "@radix-ui/themes";
import { Routes } from "./routes";

import "./reset.css";
import "./index.css";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Theme>
      <Routes />
    </Theme>
  );
}

export default App;
