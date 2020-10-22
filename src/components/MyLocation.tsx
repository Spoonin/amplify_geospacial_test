import React, {FunctionComponent } from "react";

interface Props{
    location: { lat: number; lon: number };
    onChange: (location: { lat: number, lon: number }) => void;
}

export const MyLocation: FunctionComponent<Props> = props =>

    <span>
        <label>My Location:</label>
        <input
            type="text"
            value={`${props.location.lat} ${props.location.lon}`}
            onChange={(e)=>props.onChange({lat: +e.target.value.split(" ")[0], lon: +e.target.value.split(" ")[1]})}
        />
    </span>