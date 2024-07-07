import css from './LoadMoreButton.module.css'

export default function LoadMoreButton({ loadMore }) {
    return <button className={css.btn} type="button" onClick={loadMore}>Load More</button>
}