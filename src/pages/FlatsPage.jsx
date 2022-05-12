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
    filter.equipment.forEach((criteria) => {
      flatsFiltered = flatsFiltered.filter((flat) => flat[criteria])
    })
  }

  // RANGE filter - Price between min & max
  if (filter.priceMin || filter.priceMax) {
    console.log(filter.priceMin, filter.priceMax)
    // (flats) => (item) => pricePerNight
    flatsFiltered = flatsFiltered.filter((flat) => {
      
      // Min and Max set by user => look which flat price is BETWEEN the two
      if (filter.priceMin && filter.priceMax) {
        return (
          flat.pricePerNight >= filter.priceMin &&
          flat.pricePerNight <= filter.priceMax
        )
      }
      // just MIN price set by user => check which flats have this or a HIGHER price
      else if(filter.priceMin) {
        return flat.pricePerNight >= filter.priceMin
      }
      // just MAX price set by user => check which flats have this or a LOWER price
      else if(filter.priceMax) {
        return flat.pricePerNight <= filter.priceMax
      }
    })
  }

  return (
    <div className="flats">
      <FlatFilterForm />
      <FlatList flats={flatsFiltered} />
    </div>
  )
}
