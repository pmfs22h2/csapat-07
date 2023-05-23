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
                    <h1>Üdvözlünk a Skincare Webshopban!</h1>
                    <p>Itt megtalálhatod a legjobb bőrápolási termékeket, amire szükséged lehet a ragyogó és egészséges bőr érdekében.</p>
                    <img src="https://images.pexels.com/photos/3735631/pexels-photo-3735631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

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