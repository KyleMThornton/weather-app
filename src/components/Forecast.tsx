import WeatherDays from "./WeatherDays";

async function fetchLocationData(zipCode:number) {
    const res = await fetch(`/api/location?zipCode=${zipCode}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    console.log(res.body)
    return res.json()
}

export default async function Forecast(zipCode:number) {
    return (
        <div className="bg-base-100">
            <button className="btn" onClick={() => fetchLocationData(92870)}>Get Weather Data</button>
            <WeatherDays />
        </div>
    )
}