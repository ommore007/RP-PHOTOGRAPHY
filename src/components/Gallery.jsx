import { useState } from "react";
import galleryData from "../data/gallerydata";

function Gallery() {
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Wedding", "Prewedding", "Party"];

  const filteredPhotos =
    category === "All"
      ? galleryData
      : galleryData.filter(
          (photo) => photo.category === category
        );

  return (
    <section id="gallery">

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
            <img
              src={photo.image}
              alt={photo.category}
              onClick={() => setSelectedImage(photo.image)}
            />
          </div>
        ))}
      </div>


      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Preview" />
        </div>
      )}

    </section>
  );
}

export default Gallery;