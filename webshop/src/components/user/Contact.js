import "../../styles/contact.css";

const Contact = () => {
   

    return (
        <>
           <h2 className="contact-h2">Kapcsolat</h2>
           <div class="contact">
            <h2>Lépj velünk kapcsolatba</h2>
            <br></br>
            <p>Kérdésed van? Akkor ne habozz, vedd fel velünk a kapcsolatot,valamelyik elérhetőségünk egyikén !</p>
        </div>
        <div class = "contact-box">
            <div class = "contact-left">
                <h3 className="contact-h3">Küldj nekünk üzenetet</h3>
            <form>
                <div class="contact-input-row">
                    <div class="contact-input-group">
                        <label className="contact-label">Név</label>
                        <input className="contact-input" type="text" placeholder="Kérem a neved"/>
                    </div>    
                    <div class="contact-input-group">
                        <label className="contact-label">Telefonszám</label>
                        <input className="contact-input" type="text" placeholder="Kérem a telefonszámod"/>
                    </div>
                </div>
            
                <div class="contact-input-row">
                    <div class="contact-input-group">
                        <label className="contact-label">Email</label>
                        <input className="contact-input" type="text" placeholder="Kérem az email címed"/>
                    </div>    
                    <div class="contact-input-group">
                        <label className="contact-label">Tárgy</label>
                        <input className="contact-input" type="text" placeholder="Kérem a levél tárgyát"/>
                    </div>
                </div>
            
                <label className="contact-label">Üzenet</label>
                <textarea rows="5" placeholder="A te üzeneted"></textarea>

                <button className= "button2" type="submit">Küldés</button>
            </form>
            </div>

            <div class = "contact-right">
                <h3 className="contact-h3">Elérhetőségeink</h3>
                <p>Telefonszám: +361 123 456 789</p>
                <p>Email: skincare@skincare.com</p>
            </div>
        </div>
        </>
    )
}

export default Contact;