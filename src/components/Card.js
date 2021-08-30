import React from 'react';
//import Card from 'react-bootstrap/Card';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import './styles/Card.css';

class CardComponent extends React.Component {
    render() {
        return (
            <div className="card_collection_container">
                <Row>
                    {this.props.items.servicios.map((item) => {
                        return (
                            <Col lg={4} key={item.id} >
                                <div className="card_container">
                                    <Link to={`/portafolio/${item.id}`}>
                                        <img src={item.urlx} className="d-block w-100" />
                                        <div className="card_title">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div >
        );
    }
}

export default CardComponent;