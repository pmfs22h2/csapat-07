import '../../styles/admin.css';

export default function UserData(props) {
    return (
        <tr>
            <td>{props.user.uid}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}



