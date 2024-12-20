
import axios from "axios";

// https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details

async function fetchData() {
    const response = await axios.get("http://localhost:3000/api/user");
    
    await new Promise(r => { setTimeout(r, 2000)});

    console.log("response is" + JSON.stringify(response.data));
    return response.data;
}

export default async function User(){

    const data = await fetchData();

    return (
        <div>
            {data.email}
            {data.name}
        </div>
    )
}