import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import PortfolioModule from './portfolioModule'
import Footer from '../../common/footer'

function Portfolio() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Pageheader tittle="Portfolio" />
            <PortfolioModule />
            <Footer />
        </>
    )
}

export default Portfolio