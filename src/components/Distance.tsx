import React, {FunctionComponent } from "react";

interface Props{
    distance: number;
    onChange: (distance: number) => void;
}

export const Distance: FunctionComponent<Props> = props =>

    <span>
        <label>Distance:</label>
        <input
            type="text"
            value={`${props.distance}`}
            onChange={(e)=>props.onChange(+e.target.value)}
        />
    </span>