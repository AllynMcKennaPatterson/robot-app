// import { createContext, useState, useEffect } from "react";

// const GlobalContext = createContext();

// export function GlobalContextProvider() {
//     const [globals, setGlobals] = useState(defaultGlobals);
//   async function publishAction(action) {
//     console.log("We got this far: " + action);
//     // const response = await fetch("/api/publish-slider", {
//     //   method: "POST",
//     //   body: JSON.stringify(action),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     "X-Auth-Token": "BBUS-R9TZ8sPj4ctPgpHE6HEOCIsvAwixSx",
//     //   },
//     // });
//     // const data = await response.json();
//     // console.log(data);
//   }

//   const context = {
//     publishAction: publishAction,
//     // theGlobalObject: globals,
//   };

//   return (
//     <GlobalContext.Provider value={context}>
//       {/* {props.children} */}
//     </GlobalContext.Provider>
//   );
// }

// export default GlobalContext;
