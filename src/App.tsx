import React, { useState } from 'react';
import './App.css';
import { MyLocation } from "./components/MyLocation";
import { Distance } from "./components/Distance";
import { Location } from "./structs/Location";
import { Activity } from './structs/Activity';
import { Activities } from './components/Activities';

import { nearbyActivities } from "./graphql/queries"

import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);



const App = () => {
  const [myLocation, setMyLocation] = useState<Location>({
    lat: 53.913676,
    lon: 27.543776
  });

  const [distance, setDistance] = useState<number>(500);

  const [activities, setActivities] = useState<Activity[]>([]);

  const onSearch = async () => { 
    try {
      const activitiesData: any = await API.graphql(graphqlOperation(nearbyActivities, { m: distance, limit: 100, location: myLocation }));
      
      console.log(activitiesData.data)
      
      const activities: Activity[] = activitiesData.data.nearbyActivities.items
      setActivities(activities)
    } catch (err) { console.error(err) }
  };

  return (
    <div className="App">
      <p>
        <MyLocation
          location={myLocation}
          onChange={setMyLocation}
        />
      </p>
      <p>
        <Distance
          distance={distance}
          onChange={setDistance}
        />
      </p>
      <p>
        <button onClick={onSearch}>Search</button>
      </p>
      <p>
        <Activities activities={activities} />
      </p>
    </div>
  );
}

export default App;
