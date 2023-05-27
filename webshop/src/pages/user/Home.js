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
                                    <img id="right-img" src="https://images.pexels.com/photos/5113060/pexels-photo-5113060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                                <div className="reasons-points">
                                    <p id="question">Miért válassz minket?</p>
                                    <p className="bold">Kiváló minőségű termékek</p>
                                    <p>Számunkra fontos a minőség</p>
                                    <p className="bold">Személyre szabott ajánlások</p>
                                    <p>Nálunk Te vagy az első! </p>
                                    <p className="bold">Megbízhatóság</p>
                                    <p>100% elégedettségi garancia!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Kiemelt termékek</h2>
                    <div class="product-grid">
                        <div class="product-card">
                            <img src="https://images.pexels.com/photos/4841525/pexels-photo-4841525.jpeg" alt="" />
                            <div className="product-label">
                                <p>Kímélő hidratáló</p>
                            </div>
                        </div>
                        <div class="product-card">
                            <img src="https://images.pexels.com/photos/11179690/pexels-photo-11179690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="product-label">
                                <p>Szérum</p>
                            </div>
                        </div>
                        <div class="product-card">
                            <img src="https://images.pexels.com/photos/4173342/pexels-photo-4173342.jpeg" alt="" />
                            <div className="product-label">
                                <p>Szérum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}

export default Home;