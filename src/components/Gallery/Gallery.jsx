import styles from "./Gallery.module.css";

import Placeholder from "../../assets/Placeholder.png";

const Gallery = () => {
	return (
		<section className={styles.gallery} id="gallery">
			<h2 className={styles.title}>Event Gallery</h2>
			<div className={styles.galleryGrid}>
				<img src={Placeholder}></img>
				<img src={Placeholder}></img>
			</div>
		</section>
	);
};

export default Gallery;
