import styles from './ImageSliderCarousel.module.css';

function ImageSliderCarousel({ images, currentImage }) {
  const sliderWidth = 920;

  return (
    <div
      className={styles.carousel}
      style={{
        width: `${sliderWidth}px`,
      }}
    >
      <ul
        className={styles.list}
        style={{
          transform: `translateX(-${sliderWidth * currentImage}px)`,
        }}
      >
        {images.map(({ url, alt }, index) => (
          <li key={index}>
            <img src={url} alt={alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageSliderCarousel;
