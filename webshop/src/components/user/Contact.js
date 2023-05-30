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
                <p>Telefonszám: +36 1 123 456 789</p>
                <p>Email: skincare@skincare.com</p>
                <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10650.422158402735!2d11.57407!3d48.13713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f527811f8d%3A0x8c7438eb676c71f6!2sSEPHORA%20CORNER%20M%C3%9CNCHEN!5e0!3m2!1shu!2sde!4v1685440113253!5m2!1shu!2sde"
              height="350"
              width="650"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            </div>
        </div>
        </>
    )
}

export default Contact;

