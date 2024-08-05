export default function Forecast({ forecast }) {
    function formatDate(dateString) {
        const date = new Date(dateString);
        // Array of abbreviated days
        const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // Get day of the week (0-6) and corresponding abbreviation
        const dayOfWeek = days[date.getDay()];
        // Get day of the month
        const dayOfMonth = date.getDate();
        // Format the output as "dd Day" (e.g., "23 Mon")
        const formattedDate = `${dayOfMonth} ${dayOfWeek}`;
        return formattedDate;
    }
    return <div className="row forecast">
        {forecast.map((ele, i) => {
            return <div className="col-md-2" key={ele.date_epoch}>
                <div className="card my-3">
                    <div className="card-body">
                        <div className="text-right pt-2 mt-1 border-bottom"><b>{formatDate(ele.date)}</b></div>
                        <img
                            className="d-block my-3"
                            src={ele.day.condition.icon}
                        />
                        <div className="d-flex">
                            <div className="text-danger me-3 fw-bold">{ele.day.maxtemp_c}</div>
                            <div className="text-primary fw-bold">{ele.day.mintemp_c}</div>
                        </div>
                        {/* <h2 className="h6">{ele.day.condition.text.substring(0, 13)}...</h2> */}
                        <h2 className="h6 text-truncate">{ele.day.condition.text}</h2>
                    </div>
                </div>
            </div>
        })}
    </div>
}