import React from 'react';
import CardComponent from '../components/Card';
import JsonServicios from '../json/servicios.json';

class PortafolioComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CardComponent items={JsonServicios} />
            </React.Fragment>
        );
    }
}

export default PortafolioComponent;