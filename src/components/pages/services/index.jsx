import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import Service from '../../common/service'
import Feature from '../../common/feature'
import Footer from '../../common/footer'


function Services() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Pageheader tittle="Services" />
            <Service />
            <Feature />
            <Footer />
        </>
    )
}

export default Services