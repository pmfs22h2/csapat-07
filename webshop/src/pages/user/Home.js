import Header from "../../components/user/Header";
import '../../styles/home.css';
import productService from "../../service/productService";
import { useEffect } from 'react';

const Home = () => {


    return (
        <>
            <header>
                <Header />
            </header>
            <body>
                <div class="main-content">
                    <div className="greeting-outer-container">
                        <div className="greeting-container">
                            <div className="greeting-text">
                                <h1>Üdvözlünk a webshopunkban!</h1>
                                <p>Szépségrutinod új szintre emelése és a ragyogó, egészséges bőr elérésének kulcsa csak néhány kattintásra van Tőled! Elkötelezett csapatunkkal együtt összegyűjtöttük a legjobb minőségű és leghatékonyabb bőrápolási termékeket, hogy segítsünk Neked megtalálni az ideális termékeket és elhozzuk hozzád a legújabb trendeket. </p>
                            </div>
                            <div className="greeting-img">
                                <img src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg" />
                            </div>
                        </div>
                    </div>
                    <div className="center-content">
                        <div className="center-outer-container">
                            <div className="center-container">
                                <div className="image-container">
                                    <img id="left-img" src="https://images.pexels.com/photos/5113060/pexels-photo-5113060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                                <div className="reasons-points">
                                    <p id="question">Miért válassz minket?</p>
                                    <p className="bold">• Kiváló minőségű termékek - számunkra fontos a minőség</p>
                                    <p className="bold">• Személyre szabott ajánlások - nálunk Te vagy az első!</p>
                                    <p className="bold">• Megbízhatóság - 100% elégedettségi garancia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-outer-container">
                        <div className="services-container">
                            <div className="services-text">
                                <h2>Amit kínálunk:</h2>
                                <p>Nálunk megtalálod a  leginnovatívabb bőrápolási termékeket: széles választékunkban megtalálhatók arcápolók, hidratálók, szérumok, maszkok és még sok más, melyek kielégítik minden bőrtípus igényeit.</p>
                                <p>Elhoztuk Neked a vezető márkák leghatékony anti-aging termékeit, amelyek segítenek visszaadni bőröd fiatalos ragyogását. Speciális termékkínálatunk segít kezelni a különböző bőrproblémákat, mint például akné, pigmentáció vagy érzékenység.</p>
                                <h4>Fedezd fel termékeinket és kezdd el ápolni bőrödet a legjobb minőségű termékekkel - hidd el, hálás lesz érte!</h4>
                            </div>
                            <div className="services-img">
                                <img src="https://images.pexels.com/photos/5313585/pexels-photo-5313585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                        </div>
                    </div>
                    <h2>Kiemelt termékek</h2>
                    <div class="product-grid">
                        <div class="highlited-product">
                            <img src="https://images.pexels.com/photos/4841529/pexels-photo-4841529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="product-label">
                                <p>Kímélő hidratáló</p>
                            </div>
                        </div>
                        <div class="highlited-product">
                            <img src="https://images.pexels.com/photos/4173383/pexels-photo-4173383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="product-label">
                                <p>Szérum</p>
                            </div>
                        </div>
                        <div class="highlited-product">
                            <img src="https://images.pexels.com/photos/5113049/pexels-photo-5113049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="product-label">
                                <p>Retinol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}

export default Home;