import '../../styles/notfound.css';

const NotFoundComp = () => {
    return (
        <div className="notfound-container">
            <h1>Hoppá! Eltévedtél?</h1>
            <p>Az általad keresett oldal nem létezik.</p>
            <img src="https://imagizer.imageshack.com/img923/7401/V44Qqu.png" alt="" style={{width: "650px"}}/>
        </div>
    );
}

export default NotFoundComp;