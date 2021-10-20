import './App.css';
import PageHome from "./pages/pageHome";
import PageContact from "./pages/pageContact";
import PageAbout from "./pages/pageAbout";
import BlogCatalog from "./blog/blogСatalog";
import LogoImgage from "./logo/logo";
import PageCase from "./pages/pageCase";
import PageLanguage from "./pages/pageLanguage";



import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} 
from "react-router-dom";

function App() {
   return (
      <Router>
				<div className = "container-fluid">
					<div className = "row no-gutters">
						<div className = "container">
							<main className = "bluemain">
								<div className = "row  no-gutters">
									<div className ="col-3">
											<LogoImgage></LogoImgage>
											
									</div>
									<div className ="col-9">
												<nav>
													<div>
														<ul className="ul-nav">
															<li >
																	<Link to="/" className="nav-link">Компания</Link>
															</li>
															<li >
																	<Link to="/case" className="nav-link">Кейсы</Link>
															</li>
															<li >
																	<Link to="/about" className="nav-link">Услуги</Link>
															</li>
															<li >
																	<Link to="/blog" className="nav-link">Блог</Link>
															</li>
															<li >
																	<Link to="/contacts" className="nav-link">Контакты</Link>
															</li>
															<li >
																	<Link to="/language" className="nav-link">Русский</Link>
															</li>
															<li >
																	<div className="phoneNumber">
																		<div className="phoneImg"></div>
																		<p>044 392-9200</p>
																	</div>
															</li>
														</ul>   
													</div>
												</nav>
										</div>
										<div>
										<Switch>
											<Route path='/' exact>
												<PageHome></PageHome>
											</Route>
											<Route path='/case'>
												<PageCase></PageCase>
											</Route>
											<Route path='/about'>
												<PageAbout></PageAbout>
											</Route>

											<Route path='/blog'>
												<BlogCatalog></BlogCatalog>
											</Route>

											<Route path='/contacts'>
												<PageContact></PageContact>
											</Route>
											<Route path='/language'>
												<PageLanguage></PageLanguage>
											</Route>
										</Switch>
									</div>
								</div>
							</main>
						
							
            			<footer></footer>
						</div>
					</div>
				</div>
      </Router>
   );
}

export default App;
