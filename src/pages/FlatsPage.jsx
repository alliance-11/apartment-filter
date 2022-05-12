import { useContext } from "react"
import { FlatContext } from "../contexts/FlatContext"
import { FlatFilterForm } from "../components/FlatFilterForm"
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
    flatsFiltered = flats.filter((flat) =>
      flat.country.toLowerCase().includes(filter.country.toLowerCase())
    )
  }
  // Filter by City (Free Text)
  if (filter.city) {
    flatsFiltered = flats.filter((flat) =>
      flat.city.toLowerCase().includes(filter.city.toLowerCase())
    )
  }

  // OR FILTER - Category (e.g. Apartment OR House)
  if (filter.categories.length) {
    flatsFiltered = flatsFiltered.filter((flat) =>
      // check if flat category is INCLUDED in filter categories
      filter.categories.includes(flat.category)
    )
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
      <FlatFilterForm />
      <FlatList flats={flatsFiltered} />
    </div>
  )
}
