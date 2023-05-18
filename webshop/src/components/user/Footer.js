import "../../styles/footer.css";

const Footer = () => {
	return (
		// <footer classNameName="footer">
		//     <div classNameName="footer-container">
		//     <p>Sample text</p>
		//     <p>Networking links</p>
		//     <p>Icons</p>
		//     </div>
		// </footer>

<footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">rólunk</a></li>
  	 				<li><a href="#">impresszum</a></li>
  	 				<li><a href="#">adatvédelmi nyilatkozat</a></li>
  	 				<li><a href="#">kapcsolat</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">fizetési módok</a></li>
  	 				<li><a href="#">szállítási információk</a></li>
  	 				<li><a href="#">GYIK</a></li>
  	 				<li><a href="#">információk</a></li>
  	 			</ul>
  	 		</div>
               <div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

	)
}

export default Footer;