import React, { FunctionComponent } from "react";
import { Activity } from "../structs/Activity";

interface Props{
    activities: Activity[]
}
export const Activities: FunctionComponent<Props> = (props) =>
<ol>
    {
    props.activities.map(a => <li key={a.id}>
        <p>{a.title}</p>
        <p>{a.description}</p>
        <p>{`${a.location.lat} ${a.location.lon}`}</p>
    </li>)
    }
</ol>