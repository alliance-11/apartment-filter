import { useContext } from "react"
import { FlatContext } from "../contexts/FlatContext"
import { FlatFilter } from "../components/FlatFilter"
import { FlatList } from "../components/FlatList"

/**
 * Flats component is a wrapper for the flat page
 *
 * It collects FILTER settings and applies it to create a LIST of Flats
 *
 */
export const Flats = () => {
  const { flats, filter } = useContext(FlatContext)

  let flatsFiltered = flats

  // APPLY filters before displaying flat list...

  // Filter by Country (Free Text)
  if (filter.country) {
    // TODO...
  }
  // Filter by City (Free Text)
  if (filter.city) {
    // TODO...
  }

  // OR FILTER - Category (e.g. Apartment OR House)
  if (filter.categories.length) {
    // TODO...
  }

  // AND Filter - Equipment (e.g. WLAN AND Seaview)
  if (filter.equipment.length) {
    // TODO...
  }

  // RANGE filter - Price between min & max
  if (filter.priceMin || filter.priceMax) {
    // TODO...
  }

  return (
    <div className="flats">
      <FlatFilter />
      <FlatList flats={flatsFiltered} />
    </div>
  )
}
