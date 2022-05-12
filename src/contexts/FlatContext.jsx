import { createContext } from "react"
import flatsData from "../data/flats.json"
import { useState } from "react"

// Context => BOX that holds all data 
// that we wanna share between MULTIPLE components / pages
export const FlatContext = createContext()

const filterDefault = {
  country: "",
  city: "",
  categories: [],
  equipment: [],
  priceMin: false,
  priceMax: false,
}


/**
 * inside the prop "children" we get all elements that we wrap this container around
 *
 * e.g. when we wrap this provider like so:
 * <FlatContextProvider>
 *  <App />
 * </FlatContextProvider>
 *
 * all components inside the component App (including App) will have access to the Context data we share!
 */
export const FlatContextProvider = ({ children }) => {
  const [flats, setFlats] = useState(flatsData)

  // filter critera of user
  const [filter, setFilter] = useState(filterDefault)

  const sharedData = { flats, filter, setFilter }

  return (
    <FlatContext.Provider value={sharedData}>
      {children}
    </FlatContext.Provider>
  )
}
