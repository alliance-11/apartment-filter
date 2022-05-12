const FlatCard = ({ flat }) => {
  return (
    <div className="flat-card">
      {/* VENUE IMAGE */}
      <div className="image">
        <img
          src={`//source.unsplash.com/100x100/?${
            flat.category === "Apartment" ? "apartment" : "house"
          }`}
        />
      </div>

      {/* CONTENT */}
      <div className="card-body">
        <div>{flat.title}</div>
        <div>{flat.category}</div>
        <div>
          {flat.city} ({flat.country})
        </div>
        <div className="card-equipment">
          {flat.beds > 0 && <span>Beds ({flat.beds})</span>}
          {flat.doubleBeds > 0 && <span>Double Beds ({flat.doubleBeds})</span>}
          {flat.seaview && <span>Seaview</span>}
          {flat.wlan && <span>Free WLAN</span>}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="card-actions">
        <div>{flat.pricePerNight} &euro; / per Night</div>
        <div>
          <button>Book</button>
        </div>
      </div>
    </div>
  )
}

export default FlatCard
