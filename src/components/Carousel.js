import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CarouselComponent extends React.Component {
    render() {
        return (
            <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="3000">
                <Carousel fade>
                    {this.props.items.items.map((item) => {
                        return (
                            <Carousel.Item key={item.id}>
                                <img
                                    style={{ height: 600 }}
                                    className="d-block w-100"
                                    src={item.urlx}
                                    alt={item.description}
                                />
                                <Carousel.Caption>
                                    <h3 style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{item.title}</h3>
                                    <h4 style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{item.description}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        );
    }
}

export default CarouselComponent;