import ImageItem from "../ImageItem/ImageItem"
import css from './ImageGallery.module.css'

export default function ImageGallery({ items, openModal }) {
    return (
        <ul className={css.gallery}>
            {items.map((item) => (<li className={css.item} key={item.id}>
                <ImageItem openModal={openModal} data={item} />
        </li>))}
        </ul>)
}