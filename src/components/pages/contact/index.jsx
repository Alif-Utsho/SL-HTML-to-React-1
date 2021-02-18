import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import Footer from '../../common/footer'
import ContactForm from './contact'

function Contact() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Pageheader tittle="Contact" />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact