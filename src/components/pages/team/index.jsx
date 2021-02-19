import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import About from '../../common/about'
import Team from '../../common/team'
import Footer from '../../common/footer'

function TeamPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Pageheader tittle="Team" />
            <About />
            <Team />
            <Footer />
        </>
    )
}

export default TeamPage