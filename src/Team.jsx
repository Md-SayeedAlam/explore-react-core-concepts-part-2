import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11);

    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleReduce = ()=>{
        // const newTeam = team - 1;
        // setTeam(newTeam)

        setTeam(team - 1);
    }



    const TeamStyle = {
        border : '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
    }

    return (
        <div style={TeamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}