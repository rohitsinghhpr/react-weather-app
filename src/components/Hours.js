export default function Hours({ hours }) {
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
    return <div>
        <h1 className="h3">Hours</h1>
        <ul className="list-group">
            {hours.map((ele) => {
                return <li className="list-group-item d-flex align-items-center" key={ele.time_epoch}>
                    <div className="text-center me-2 pe-1 border-end">
                        <img className="d-block" style={{ width: "64px" }} src={ele.condition.icon} />
                        <h1 className="m-0 p-0 h6">{formatTime(ele.time)}</h1>
                    </div>
                    <div className="flex-fill">
                        <h1 className="m-0 p-0 h5 mb-2">{ele.condition.text}</h1>
                        <div className="d-flex justify-content-around">
                            <div className="text-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
                                        <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
                                    </svg>
                                </div>
                                <div>{ele.temp_c}</div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </div>
                                <div>{ele.wind_kph} km/hr</div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                                    </svg>
                                </div>
                                <div>{ele.uv}</div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                                        <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z" />
                                    </svg>
                                </div>
                                <div>{ele.humidity}</div>
                            </div>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    </div>
}