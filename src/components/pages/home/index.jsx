import Topbar from '../../common/topbar'
import Navbar from '../../common/navbar'
import Carousel from './carousel'
import Topfeature from './topfeature'
import About from '../../common/about'
import Service from '../../common/service'
import Feature from '../../common/feature'
import Team from '../../common/team'
import FAQs from './faqs'
import Testimonial from './testimonial'
import Blog from '../../common/blog'
import Footer from '../../common/footer'

function Home() {
    return (
        <div class="wrapper">
            {/* <!-- Top Bar Start --> */}
            <Topbar />
            {/* <!-- Top Bar End -->

            <!-- Nav Bar Start --> */}
            <Navbar />
            {/* <!-- Nav Bar End -->*/}


            {/*<!-- Carousel Start --> */}
            <Carousel />
            {/* <!-- Carousel End -->


            <!-- Top Feature Start--> */}
            <Topfeature />
            {/* <!-- Top Feature End-->


            <!-- About Start --> */}
            <About />
            {/* <!-- About End -->


            <!-- Service Start --> */}
            <Service />
            {/* <!-- Service End -->


            <!-- Feature Start --> */}
            <Feature />
            {/* <!-- Feature End -->


            <!-- Team Start --> */}
            <Team />
            {/* <!-- Team End -->


            <!-- FAQs Start --> */}
            <FAQs />
            {/* <!-- FAQs End -->


            <!-- Testimonial Start --> */}
            <Testimonial />
            {/* <!-- Testimonial End -->


            <!-- Blog Start --> */}
            <Blog />
            {/* <!-- Blog End -->


            <!-- Newsletter Start --> */}
            <Footer />
        </div>
    )
}

export default Home