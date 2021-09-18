import React, { useState } from "react"
import Navbar from '../components/navbar'
import withPrivateRoute from "../components/withPrivateRoute";

function Forecast(): JSX.Element {
    // hooks
    const [apiData, setApiData] = useState({ main:{ temp:"" }, name:"" });
    const [city, setCity] = useState("");


    // api key and url
    const apiKey = "51b91d99f95843f1d1cc5913483efaa0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const clickHandler = () => { // fetch weather data on btn clicking
        fetch(apiUrl)
        .then(res => res.json())
        .then(result => {
            setApiData(result)
        })
    }

    return (
        <>
            <Navbar />
            <div id="body-container" className="md:max-w-sm md:mx-auto grid grid-flow-rows gap-20 px-15 pb-80 pt-150 md:gap-20 md:px-20 md:pb-70 md:pt-120 text-center">
                <input
                    className="p-10 transition duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                    focus:ring-opacity-30 text-primary font-medium rounded-full bg-black bg-opacity-30"
                    type="text"
                    value={ city }
                    onChange={ ({ target }) => setCity(target.value) }
                    placeholder="City"
                />
                <button className="text-p2-md p-10 font-medium bg-btn-primary text-white rounded-full" onClick={clickHandler}>Search</button>
                { 
                    apiData.name && apiData.main.temp ? (
                        <table className="bg-body text-p2-md text-white border-2 mt-10">
                            <thead>
                                <tr>
                                    <th className="bg-body border-2 p-10 text-center">Location</th>
                                    <th className="bg-body border-2 p-10 text-center"> Weather</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-body">
                                    <td className="bg-body border-2 p-10 text-center">{ apiData.name }</td>
                                    <td className="bg-body border-2 p-10 text-center">{ apiData.main.temp }&deg; C</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : ( 
                        <></> 
                    ) 
                }
            </div>
        </>
    )
}

export default withPrivateRoute(Forecast)