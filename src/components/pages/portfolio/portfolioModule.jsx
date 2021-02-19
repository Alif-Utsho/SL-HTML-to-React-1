import portfolioImg1 from '../../assets/img/portfolio-1.jpg'
import portfolioImg2 from '../../assets/img/portfolio-2.jpg'
import portfolioImg3 from '../../assets/img/portfolio-3.jpg'
import portfolioImg4 from '../../assets/img/portfolio-4.jpg'
import portfolioImg5 from '../../assets/img/portfolio-5.jpg'
import portfolioImg6 from '../../assets/img/portfolio-6.jpg'

function PortfolioModule() {
    return (
        <div class="portfolio">
            <div class="container">
                <div class="section-header">
                    <h2>Our Case Studies</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".first">Civil</li>
                            <li data-filter=".second">Criminal</li>
                            <li data-filter=".third">Business</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
                        <div class="portfolio-wrap">
                            <img src={portfolioImg1} alt="Portfolio Image" />
                            <figure>
                                <p>Crime</p>
                                <a href="#">Murder Case</a>
                                <span>01-Jan-2045</span>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second">
                        <div class="portfolio-wrap">
                            <img src={portfolioImg2} alt="Portfolio Image" />
                            <figure>
                                <p>Politics</p>
                                <a href="#">Political Case</a>
                                <span>01-Jan-2045</span>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third">
                        <div class="portfolio-wrap">
                            <img src={portfolioImg3} alt="Portfolio Image" />
                            <figure>
                                <p>Family</p>
                                <a href="#">Divorce Case</a>
                                <span>01-Jan-2045</span>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
                        <div class="portfolio-wrap">
                            <img src={portfolioImg4} alt="Portfolio Image" />
                            <figure>
                                <p>Finance</p>
                                <a href="#">Money Laundering</a>
                                <span>01-Jan-2045</span>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second">
                        <div class="portfolio-wrap">
                            <img src={portfolioImg5} alt="Portfolio Image"/>
                                <figure>
                                    <p>Business</p>
                                    <a href="#">Weber & Partners</a>
                                    <span>01-Jan-2045</span>
                                </figure>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third">
                            <div class="portfolio-wrap">
                            <img src={portfolioImg6} alt="Portfolio Image" />
                                <figure>
                                    <p>Finance</p>
                                    <a href="#">Property Sharing Case</a>
                                    <span>01-Jan-2045</span>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 load-more">
                            <a class="btn" href="#">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PortfolioModule