import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import About from '../../common/about'
import Team from '../../common/team'
import Timeline from './timeline'
import Footer from '../../common/footer'

function AboutPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Pageheader tittle="About" />
            <About />
            <Timeline />
            <Team />
            <Footer />
        </>
    )
}

export default AboutPage