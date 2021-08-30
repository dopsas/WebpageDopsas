import React from 'react';
import NavbarComponent from '../components/Navbar';
import CarouselComponent from '../components/Carousel';
import JsonCarousel from '../json/carousel.json';
import FooterController from '../components/Footer';


class HomeComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CarouselComponent items={JsonCarousel} />
            </React.Fragment>
        )
    }
}

export default HomeComponent;