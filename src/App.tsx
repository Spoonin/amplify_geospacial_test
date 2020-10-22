import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyLocation } from "./components/MyLocation";
import { Location } from "./structs/Location";
import { Activity } from './structs/Activity';

import { nearbyActivities } from "./graphql/queries"

import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import { Activities } from './components/Activities';
Amplify.configure(awsExports);



const App = () => {
  const [myLocation, setMyLocation] = useState<Location>({
    lat: 53.913676,
    lon: 27.543776
  });

  const [activities, setActivities] = useState<Activity[]>([]);

  const onSearch = async () => { 
    try {
      const activitiesData: any = await API.graphql(graphqlOperation(nearbyActivities, { m: 500, limit: 100, location: myLocation }));
      
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
        <button onClick={onSearch}>Search</button>
      </p>
      <p>
        <Activities activities={activities} />
      </p>
    </div>
  );
}

export default App;
