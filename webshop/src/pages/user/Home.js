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
                    <div className="greeting-text">
                        <h1>Üdvözlünk a webshopunkban!</h1>
                        <p>Szépségrutinod új szintre emelése és a ragyogó, egészséges bőr elérésének kulcsa csak néhány kattintásra van Tőled! Elkötelezett csapatunkkal együtt összegyűjtöttük a legjobb minőségű és leghatékonyabb bőrápolási termékeket, hogy segítsünk Neked megtalálni az ideális termékeket és elhozzuk hozzád a legújabb trendeket. </p>
                    </div>
                    <div className="center-content">
                        <h3>Miért válassz minket?</h3>
                        <ul>
                            <li>- Kiváló minőségű termékek</li>
                            <li>- Személyre szabott ajánlások</li>
                            <li>- Trendi újdonságok</li>
                            <li>- Gyors és megbízható szállítás</li>
                        </ul>
                        <img src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg" />
                    </div>
                    <h2>Kiemelt termékek</h2>
                    <div class="product-grid">
                        <div class="product-card">
                            <img src="https://images.pexels.com/photos/4841525/pexels-photo-4841525.jpeg" alt="" />
                            <h3>Kímélő hidratáló</h3>
                            <p>Intenzíven táplál és hidratál.</p>
                        </div>
                        <div class="product-card">
                            <img src="https://images.pexels.com/photos/11179690/pexels-photo-11179690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <h3>Szérum</h3>
                            <p>Lágy és könnyű textúra.</p>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}

export default Home;