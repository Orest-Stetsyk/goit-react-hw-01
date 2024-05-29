import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.headWrapper}>
                <tr className={css.head}>
                    <th className={css.headItem}>Type</th>
                    <th className={css.headItem}>Amount</th>
                    <th className={css.headItem}>Currency</th>
                </tr>
            </thead>

            <tbody  className={css.bodyWrapper}>
                {items.map((item) => (
                    <tr className={css.body} key={item.id}>
                        <td className={css.bodyItem}>{item.type}</td>
                        <td className={css.bodyItem}>{item.amount}</td>
                        <td className={css.bodyItem}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}