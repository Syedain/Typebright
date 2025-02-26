class SpecialHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header id="header" class="full-header transparent-header dark" data-sticky-class="not-dark"
			data-responsive-class="not-dark">
			<div id="header-wrap">
				<div class="container">
					<div class="header-row">

						<div id="logo">
							<a href="index.html" class="standard-logo" style="height: 40px;" data-dark-logo="images/xoleowhite.png">
								<img src="images/xoleoblack.png" alt="">
							</a>
							<a href="index.html" class="retina-logo" data-dark-logo="images/xoleowhite.png" style="height: 40px;">
								<img src="images/xoleoblack.png" alt="">
							</a>
						</div>

						<div id="primary-menu-trigger">
							<svg class="svg-trigger" viewBox="0 0 100 100">
								<path
									d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20">
								</path>
								<path d="m 30,50 h 40"></path>
								<path
									d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20">
								</path>
							</svg>
						</div>

						<nav class="primary-menu not-dark with-arrows">

							<ul class="menu-container not-dark">
								<li class="menu-item mega-menu">
									<a class="menu-link" href="expertise.html" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Expertise</div>
									</a>
									<div class="mega-menu-content">
										<div class="container">
											<div class="row">
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item" style="height:200px">
														<a class="menu-link" href="expertise.html">
															<div>
																<h5>All Expertise <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5> <i class="icon-line-arrow-right fw-semibold"></i> Technologies</h5>
																<div style="margin-bottom: 20px;">
																	<img src="images/Group-1.png.webp" alt="" style="margin-right: 15px;  height:40px">
																	<img src="images/microsoft-dot-net-icon-1.png.webp" alt=""
																		style="margin-right: 15px; height:40px">
																	<img src="images/python-1-1.png.webp" alt="" style="margin-right: 15px; height:40px">
																	<img src="images/java-svgrepo-com-1.png.webp" alt="" style="margin-right: 15px; height:40px">
																</div>
																<div>
																	<img src="images/Group.png.webp" alt="" style="margin-right: 15px; height:40px">
																	<img src="images/vue-1-1.png.webp" alt="" style="margin-right: 15px; height:40px">
																	<img src="images/Vector-11.png.webp" alt="" style="margin-right: 15px; height:40px">
																	<img src="images/Vector-8-1.png.webp" alt="" style="margin-right: 15px; height:40px">
																</div>
															</div>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="technology.html">
															<div>
																<h5>Technology <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="cloudComputing.html">
															<div>
																<h5>Cloud Computing <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="AIDataEngineering.html">
															<div>
																<h5>AI & Data Engineering <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="businessIntelligence.html">
															<div>
																<h5>Business Intelligence <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="financeAccounting.html">
															<div>
																<h5>Finance & Accounting <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="digitalMarketing.html">
															<div>
																<h5>Digital Marketing & Sales <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li class="menu-item mega-menu">
									<a class="menu-link" href="industries.html" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Industries</div>
									</a>
									<div class="mega-menu-content">
										<div class="container">
											<div class="row">
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="industries.html">
															<div>
																<div>
																<h5>Moving solutions forward</h5>
																<div style="margin-bottom: 20px;">
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																		exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
																</div>
																<div>
																	<h5>Other solutions</h5>
																</div>
																<ul style="padding-left: 30px;">
																	<li>Engineering</li>
																	<li>Finance</li>
																	<li>Forestry</li>
																	<li>Construction</li>
																	<li>Mining</li>
																</ul>
															</div>
															</div>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Fintech <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Banking & Finance <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Retail and CGP <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Healthcare and Pharma <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Telecom <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Public Sector <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Artificial Intelligence <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Software <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li class="menu-item mega-menu">
									<a class="menu-link" href="#" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Solutions</div>
									</a>
									<div class="mega-menu-content">
										<div class="container">
											<div class="row">
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>Moving solutions forward</h5>
																<div style="margin-bottom: 20px;">
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																		exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
																</div>
																<div>
																	<h5>Other solutions</h5>
																</div>
																<ul style="padding-left: 30px;">
																	<li>Engineering</li>
																	<li>Finance</li>
																	<li>Forestry</li>
																	<li>Construction</li>
																	<li>Mining</li>
																</ul>
															</div>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="staffAugmentation.html">
															<div style="margin-bottom: 30px;">
																<img src="images/staff.webp" alt="" style="border-radius: 15px;">
															</div>
															<div>
																<h5>Staff Augmentation <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="businessProcessOutsourcing.html">
															<div style="margin-bottom: 30px;">
																<img src="images/business.webp" alt="" style="border-radius: 15px;">
															</div>
															<div>
																<h5>Business Process Outsourcing <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="dedicatedTeams.html">
															<div style="margin-bottom: 30px;">
																<img src="images/staff.webp" alt="" style="border-radius: 15px;">
															</div>
															<div>
																<h5>Dedicated Teams <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li class="menu-item mega-menu">
									<a class="menu-link" href="#" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Company</div>
									</a>
									<div class="mega-menu-content">
										<div class="container">
											<div class="row">
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="#">
															<div>
																<h5>About</h5>
																<div style="margin-bottom: 20px;">
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																		exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
																</div>
																<div>
																	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																		exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
																</div>
															</div>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="aboutUs.html">
															<div style="margin-bottom: 30px;">
																<img src="images/staff.webp" alt="" style="border-radius: 15px; height: 150px;">
															</div>
															<div>
																<h5>About Us <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
												<ul class="sub-menu-container mega-menu-column col">
													<li class="menu-item">
														<a class="menu-link" href="careers.html">
															<div style="margin-bottom: 30px;">
																<img src="images/business.webp" alt="" style="border-radius: 15px; height: 150px;">
															</div>
															<div>
																<h5>Careers <i class="icon-line-arrow-right fw-semibold"></i></h5>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
																incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
																exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li class="menu-item"><a class="menu-link" href="insights.html" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Insights</div>
									</a></li>
								<li class="menu-item"><a class="menu-link" href="careers.html" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Careers</div>
									</a></li>
								<li class="menu-item">
									<a class="menu-link" href="getInTouch.html" style="font-size: 1rem; text-transform: none; font-family: "TTInterfacesRegular", sans-serif !important;">
										<div>Get In Touch</div>
									</a>
								</li>
							</ul>

						</nav>

					</div>
				</div>
			</div>
			<div class="header-wrap-clone"></div>
		</header>
    `
	}
}

class SpecialFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<!-- Footer -->
		<footer id="footer" class="dark">
			<div class="container">

				<!-- Footer Widgets -->
				<div class="footer-widgets-wrap pb-4 clearfix">

					<div class="row">

						<div class="col-md-4 col-sm-6 mb-0 mb-sm-4 mb-md-0">

							<div class="widget clearfix">

								<img src="http://localhost/xoleo/images/xoleowhite.png" style="height: 50px; margin-bottom: 15px;">

								<div style="background: url('images/world-map.png') no-repeat left center; background-size: auto 100%;">
									<address>
										<strong>Headquarters:</strong><br>
										795 Folsom Ave, Suite 600<br>
										San Francisco, CA 94107<br>
									</address>
									<abbr title="Phone Number"><strong>Phone:</strong></abbr> +1 (210) 123-4567<br>
									<abbr title="Email Address"><strong>Email:</strong></abbr> info@xoleo.com
								</div>

							</div>

						</div>

						<div class="col-md-3 col-6 mt-5 mt-sm-0">

							<div class="widget clearfix">

								<h4 style="color: #fff;">Features</h4>

								<ul class="list-unstyled iconlist ms-0">
									<li><a href="#">Documentation</a></li>
									<li><a href="#">Feedback</a></li>
									<li><a href="#">Plugins</a></li>
									<li><a href="#">Support Forums</a></li>
									<li><a href="#">Themes</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Planet</a></li>
								</ul>

							</div>

						</div>

						<div class="col-md-3 col-6 mt-5 mt-sm-0">

							<div class="widget clearfix">

								<h4 style="color: #fff;">Social</h4>

								<ul class="list-unstyled iconlist">
									<li><i class="icon-facebook"></i><a href="#" target="_blank"> Facebook</a></li>
									<li><i class="icon-twitter"></i><a href="#" target="_blank"> Twitter</a></li>
									<li><i class="icon-instagram"></i><a href="#" target="_blank"> Instagram</a></li>
									<li><i class="icon-youtube"></i><a href="#" target="_blank"> YouTube</a></li>
									<li><i class="icon-xing"></i><a href="#"> Xing</a></li>
									<li><i class="icon-github"></i><a href="#"> Github</a></li>
								</ul>

							</div>

						</div>

						<div class="col-md-2 col-sm-6 mt-4 mt-sm-0">

							<div class="widget clearfix">

								<h4 style="color: #fff;">Support</h4>

								<ul class="list-unstyled iconlist ms-0">
									<li><a href="#">Help Center</a></li>
									<li><a href="#">Paid with Mollie</a></li>
									<li><a href="#">Status</a></li>
									<li><a href="#">Changelog</a></li>
									<li><a href="#">Contact Support</a></li>
								</ul>

							</div>

						</div>

					</div>

				</div>
				<!-- .footer-widgets-wrap end -->

				<div class="line line-sm m-0"></div>

			</div>


			<!-- Copyrights -->
			<div id="copyrights" class="bg-transparent">
				<div class="container clearfix">

					<div class="row justify-content-between col-mb-30">
						<div class="col-12 col-md-auto text-center text-md-start">
							Copyrights &copy; 2025 All Rights<br>
							<div class="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
						</div>

						<div class="col-12 col-md-auto text-center text-md-end">
							<div class="copyrights-menu copyright-links clearfix">
								<a href="./">Home</a>/<a href="aboutUs.html">About Us</a>/<a href="#">Team</a>/<a href="#">Clients</a>/<a
									href="#">FAQs</a>/<a href="#">Contact</a>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!-- #copyrights end -->
		</footer>
		<!-- #footer end -->
    `
	}
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)