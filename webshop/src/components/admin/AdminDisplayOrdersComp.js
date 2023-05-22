const AdminDisplayOrdersComp = () => {

    return (
        <div>
            <h2>Vásárlók megrendelései</h2>
            <table className="ordertable">
                <thead>
                    <tr>
                        <th>Megrendelés #</th>
                        <th>Vásárló #</th>
                        <th>Vásárló neve</th>
                    </tr>
                </thead>
                <tr>
                    <td>sample id</td>
                    <td>sample customer id</td>
                    <td>sample customer's name</td>
                </tr>
            </table>
        </div>
    );
}

export default AdminDisplayOrdersComp;