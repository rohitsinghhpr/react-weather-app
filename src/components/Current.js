export default function Current({ location, current }) {

    function formatTime(localTime) {
        // Create a new Date object based on local time or specific date/time if provided
        const now = new Date(localTime);
        // Extract hours and minutes from the Date object
        let hours = now.getHours();
        let minutes = now.getMinutes();
        // Determine AM or PM suffix and convert hours to 12-hour format
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert hours from 24-hour to 12-hour format
        // Format minutes to always display two digits (e.g., 05 instead of 5)
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Construct the formatted time string
        const formattedTime = hours + ':' + minutes + ' ' + meridiem;
        // Return the formatted time
        return formattedTime;
    }

    const time = formatTime(location.localtime);

    return <div className="current">
        <h1 className="h3">Current weather</h1>
        <div className="card">
                <div className="card-body">
                    <div className="top-bar">
                        <h1 className="m-0 p-0 h4">{location.name}</h1>
                        <h2 className="m-0 p-0 h5">{location.region} ,{location.country}</h2>
                        <h3 className="m-0 p-0 h6">{time}</h3>
                    </div>
                    <div className="info d-flex py-3">
                        <img
                            className="d-block me-3"
                            src={current.condition.icon}
                        />
                        <div className="text">
                            <h1 className="m-0">{current.temp_c}</h1>
                            <h2 className="h4 m-0">{current.condition.text}</h2>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="container p-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Air Quality</h1>
                                    <h2 className="h5">----</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Wind</h1>
                                    <h2 className="h5">{current.wind_kph}</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Humidity</h1>
                                    <h2 className="h5">{current.humidity}</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Feels Like</h1>
                                    <h2 className="h5">{current.feelslike_c}</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Visibility</h1>
                                    <h2 className="h5">{current.vis_km}</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">UV Index</h1>
                                    <h2 className="h5">{current.uv}</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Pressure</h1>
                                    <h2 className="h5">{current.pressure_mb}</h2>
                                </div>
                                <div className="col-md-3">
                                    <h1 className="text-muted h6">Dew Point</h1>
                                    <h2 className="h5">{current.dewpoint_c}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}