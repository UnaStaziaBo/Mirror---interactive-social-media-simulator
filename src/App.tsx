import { useState } from "react";

import { Header } from "./components/mirror/Header";

import { MenuScreen } from "./screens/MenuScreen";
import { LeoStoryScreen } from "./screens/LeoStoryScreen";

function App() {

  const [screen, setScreen] =
    useState<"menu" | "leo">("menu");

  const [health, setHealth] =
    useState(60);

  return (
    <>

      {screen !== "menu" && (

        <Header
          health={health}
          onHome={() => {

            setHealth(60);
            setScreen("menu");

          }}
        />

      )}

      {screen === "menu" ? (

        <MenuScreen
          onStartLeoStory={() => {

            setHealth(60);
            setScreen("leo");

          }}
        />

      ) : (

        <LeoStoryScreen
          health={health}
          setHealth={setHealth}
        />

      )}

    </>

  );

}

export default App;