import { createContext } from "react";

const GlobalContext = createContext({
  // loggedIn: false
});

export function GlobalContextProvider(props) {
  // const [globals, setGlobals] = useState(defaultGlobals);

  async function publishAnglesHandler(action) {
    const response = await fetch("/api/publish-slider", {
      method: "POST",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  async function publishCoordsHandler(action) {
    const response = await fetch("/api/publish-coordinates", {
      method: "POST",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  const context = {
    publishAngles: publishAnglesHandler,
    publishCoords: publishCoordsHandler,
    // theGlobalObject: globals,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext;
