import React,{useEffect,useState} from 'react'
import WheatherContext from './wheatherContext'

const WheatherState = (props) => {
    const [search, setSearch] = useState("udaipur");
    const [data, setData] = useState();
    const [weather , setWeather] = useState()
    const [temp , setTemp] = useState()
    const [wind , setWind] = useState()
    const [country , setCountry] = useState()
    const [clouds , setClouds] = useState()
    const [coord , setCoord] = useState()

    const change = (input) => {
        console.log(input)
        setSearch(input)
    }
    useEffect( async ()  => {
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5cce74d0d70eb4cd52263216b18beb2a`)
           const res = await response.json()
           setData(res)
           setWeather(res.weather)
           setTemp(res.main)
           setWind(res.wind)
           setCountry(res.sys)
           setClouds(res.clouds)
           setCoord(res.coord)
    },[search])
    return (
        <WheatherContext.Provider value={{change , data , weather , temp , wind , country , clouds , coord , setSearch , search}}>
            {props.children}
        </WheatherContext.Provider>
    )
}

export default WheatherState
