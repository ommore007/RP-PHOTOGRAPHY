import { useState } from "react";
import galleryData from "../data/galleryData";

function Gallery() {
  const [category, setCategory] = useState("");

  const categories = ["Wedding", "Prewedding", "Party"];

  const filteredPhotos =
    category === ""
      ? []
      : galleryData.filter(
          (photo) => photo.category === category
        );

  return (
    <div>
      <div className="buttons">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="gallery">
        {filteredPhotos.map((photo) => (
          <div className="card" key={photo.id}>
            <img src={photo.image} alt={photo.category} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;