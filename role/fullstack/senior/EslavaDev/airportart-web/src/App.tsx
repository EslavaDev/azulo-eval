import { useEffect } from "react";
import "./App.css";
import { useInitConfigs } from "./hooks/useInitConfigs";
import { Home } from "./page/home";

function App() {
  const initConfigs = useInitConfigs();
  useEffect(() => {
    initConfigs.init();
  }, [initConfigs]);
  return (
     <Home />
  );
}

export default App;
