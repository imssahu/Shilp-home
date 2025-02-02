import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Event Gallery</h2>
      <div className={styles.galleryGrid}>
        {/* <img src=""></img>
        <img src=""></img> */}
      </div>
    </section>
  );
};

export default Gallery;
