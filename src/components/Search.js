import { useEffect } from "react";

export default function Search(props) {

    const {setQuery,value,setValue} = props;

    function handleSubmit(e){
        e.preventDefault();
        setQuery(value);
        setValue("");
    }


    return <div className="row justify-content-center">
        <div className="col-md-6">
            <form className="row" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="col-10">
                    <input type="text" className="form-control" placeholder="Enter City Name" onInput={(e)=>{setValue(e.target.value)}}/>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    </div>
}