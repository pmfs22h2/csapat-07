export default function AdminProduct(props) {
    return (
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}



