import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext({
  // loggedIn: false
});

export function GlobalContextProvider(props) {
  // const [globals, setGlobals] = useState(defaultGlobals);

  async function publishActionHandler(action) {
    console.log("We got this far: " + JSON.stringify(action));
    const response = await fetch("/api/publish-slider", {
      method: "POST",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("We got here 2")
    const data = await response.json();
    console.log(data);
  }

  const context = {
    publishAction: publishActionHandler,
    // theGlobalObject: globals,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext;
