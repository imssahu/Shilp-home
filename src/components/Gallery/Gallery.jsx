import styles from "./Gallery.module.css";

import placeholder from "../../assets/placeholder.png";

const Gallery = () => {
	return (
		<section className={styles.gallery} id="gallery">
			<h2 className={styles.title}>Event Gallery</h2>
			<div className={styles.galleryGrid}>
				<img src={placeholder}></img>
				<img src={placeholder}></img>
			</div>
		</section>
	);
};

export default Gallery;
