export default function Astro({astro}){
    return <div className="astro">
        <div className="d-flex">
            <div className="card flex-fill">
                <div className="card-body sunrise">
                    <h2 className="h5">Sunrise</h2>
                    <h1 className="h4">{astro.sunrise}</h1>
                </div>
            </div>
            <div className="card flex-fill">
                <div className="card-body sunset">
                    <h2 className="h5">Sunset</h2>
                    <h1 className="h4">{astro.sunset}</h1>
                </div>
            </div>
        </div>
        <div className="d-flex">
            <div className="card flex-fill">
                <div className="card-body moonrise">
                    <h2 className="h5">Moonrise</h2>
                    <h1 className="h4">{astro.moonrise}</h1>
                </div>
            </div>
            <div className="card flex-fill">
                <div className="card-body moonset">
                    <h2 className="h5">Moonset</h2>
                    <h1 className="h4">{astro.moonset}</h1>
                </div>
            </div>
        </div>
    </div>
}
