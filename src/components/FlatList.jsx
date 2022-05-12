import FlatCard from "./FlatCard"

export const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => (
        <FlatCard key={flat._id} flat={flat} />
      ))}
    </div>
  )
}
