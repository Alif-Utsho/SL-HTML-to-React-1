import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import SingleModule from './singleModule'
import Footer from '../../common/footer'

function Single() {
    return (
        <> 
            <Topbar />
            <Navbar />
            <Pageheader tittle="Single" />
            <SingleModule />
            <Footer />
        </>
    )
}

export default Single