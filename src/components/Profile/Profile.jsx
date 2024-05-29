import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <img
                    className={css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p  className={css.name}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.statsContainer}>
                <li className={css.statsItem}>
                    <span>Followers</span>
                    <span className={css.stats}>{stats.followers}</span>
                </li>
                <li  className={css.statsItem}>
                    <span>Views</span>
                    <span className={css.stats}>{stats.views}</span>
                </li>
                <li  className={css.statsItem}>
                    <span>Likes</span>
                    <span className={css.stats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}