import React, { useState, useContext } from 'react'
import WheatherContext from './context/wheatherData/wheatherContext';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from './Header';
import InfoCard from './InfoCard';
const Home = () => {
    const context = useContext(WheatherContext)
    const { data, weather, temp , wind , country , clouds , coord} = context;
    console.log(data)
    if (!weather) {
        console.log("wait")
    } else {
        weather.map((val) => {
            console.log("weather=> ", val.id)
        })
    }

    console.log(coord)
    return (
        <>
            <Header />
            <div>
                {data ? <Card className="card" bg="dark">
                    <Card.Header>{data.name}</Card.Header>
                    <Row>
                        {!weather ? null :
                            weather.map((val) => {
                                return (
                                    <InfoCard header="Weather" title={val.main} discription={val.description} timezone={data.timezone}/>
                                )
                            })
                        }
                       {temp ? <Col sm={3}>
                            <Card className="innerCard" bg="success">
                                <Card.Header>Main</Card.Header>
                                <Card.Body>
                                    <Card.Title>Temprature: {temp.temp}</Card.Title>
                                    <Card.Title>Fills Like: {temp.feels_like}</Card.Title> 
                                    <Card.Title>Max temp: {temp.temp_max}</Card.Title> 
                                    <Card.Title>Minimun: {temp.temp_min}</Card.Title> 
                                    <Card.Title>Pressure: {temp.pressure}</Card.Title> 
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> : null}

                        {wind && coord ? <Col sm={3}>
                            <Card className="innerCard" bg="success">
                                <Card.Header>Wind</Card.Header>
                                <Card.Body>
                                    <Card.Title>Speed: {wind.speed}</Card.Title>
                                    <Card.Title>Degree: {wind.deg}</Card.Title> 
                                    <Card.Title>Longitute: {coord.lon}</Card.Title> 
                                    <Card.Title>Latitude: {coord.lat}</Card.Title> 
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> : null}

                        
                        {country ? <Col sm={3}>
                            <Card className="innerCard" bg="success">
                                <Card.Header>Wind</Card.Header>
                                <Card.Body>
                                    <Card.Title>Country: {country.country}</Card.Title>
                                    <Card.Title>Sunrise: {country.sunrise}</Card.Title> 
                                    <Card.Title>Sunset: {country.sunset}</Card.Title> 
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> : null}
                        {clouds ? <Col sm={3}>
                            <Card className="innerCard" bg="success">
                                <Card.Header>Clouds</Card.Header>
                                <Card.Body>
                                    <Card.Title>Clouds: {clouds.all}</Card.Title>
                                    <Card.Title>Visibility: {data.visibility}</Card.Title>
                                    <Card.Title>Base: {data.base}</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> : null}
                    </Row>
                </Card> : null}
            </div>
        </>
    )
}

export default Home
