import UserData from "./UserData"
import '../../styles/admintable.css';
//import SearchComponent from "../../components/user/SearchComponent";

export default function UserList(props) {
    return (
        <>
            <table className="admintable">
                <thead>
                    <tr>
                        <th>Azonosító</th>
                        <th>Név</th>
                        <th>E-mail cím</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.values(props.users).length==0 && "nincs ilyen felhasználó"}

                    {props.users && Object.values(props.users)?.map(user => <UserData key={crypto.randomUUID()} user={user} />)}
                </tbody>
            </table>
        </>
    )
}