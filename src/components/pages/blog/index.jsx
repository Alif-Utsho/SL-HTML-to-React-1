import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Pageheader from '../../common/pageheader'
import Blog from '../../common/blog'
import Footer from '../../common/footer'

function BlogPage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Pageheader tittle="Blog" />
            <Blog />
            <Footer />
        </>
    )
}

export default BlogPage