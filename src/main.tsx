import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider forceColorScheme="dark">
    <App />
  </MantineProvider>
);
