import React, { useState } from 'react';
import './Gallery.css';

const galleryData = {
  2025: [
    '/assets/year2025a.jpg',
    '/assets/year2025b.jpg',
    '/assets/year2025c.jpg',
    '/assets/year2025d.jpg',
  
  ],
  2024: [
    '/assets/year2024a.jpg',
    '/assets/year2024b.jpg',
    '/assets/year2024c.jpg',
    '/assets/year2024d.jpg',
  ],
  2023: [
    '/assets/year2023a.jpg',
    '/assets/year2023b.jpg',
    '/assets/year2023c.jpg',
    '/assets/year2023d.jpg',
  ]
};

function Gallery() {
  // Handles both show more/less logic
  const [showAll, setShowAll] = useState({
    2025: false,
    2024: false,
    2023: false,
  });

  const handleSeeMore = (year) => {
    setShowAll((prev) => ({ ...prev, [year]: true }));
  };

  // If you want a "Show Less" button:
  const handleShowLess = (year) => {
    setShowAll((prev) => ({ ...prev, [year]: false }));
  };

  // Get years and sort them descendingly
  const years = Object.keys(galleryData).sort((a, b) => b - a);

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      {years.map(year => (
        <section className="year-gallery" key={year}>
          <h2 className="year-heading">{year}</h2>
          <div className="photos-row">
            {(showAll[year] ? galleryData[year] : galleryData[year].slice(0, 3)).map((imgSrc, i) => (
              <img src={imgSrc} alt={`${year} Photo ${i + 1}`} key={imgSrc} />
            ))}
          </div>
          {galleryData[year].length > 3 && (
            !showAll[year] ? (
              <button
                className="see-more-btn"
                onClick={() => handleSeeMore(year)}
              >
                See More
              </button>
            ) : (
              <button
                className="see-more-btn"
                onClick={() => handleShowLess(year)}
              >
                Show Less
              </button>
            )
          )}
        </section>
      ))}
    </div>
  );
}

export default Gallery;
