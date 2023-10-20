import WeatherDays from "./WeatherDays";

export default function Forecast(zipCode:number) {
    return (
        <div className="bg-base-100">
            <WeatherDays />
        </div>
    )
}