import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

import _ from 'lodash';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list, (weather) => { return weather.main.temp; });
        const pressures = _.map(cityData.list, (weather) => { return weather.main.pressure; });
        const humidities = _.map(cityData.list, (weather) => { return weather.main.humidity; });

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(this.props.weather, this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);