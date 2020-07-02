import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";

import awsconfig from "./aws-exports";
import { createEvent } from "./graphql/mutations";
import { listEvents } from "./graphql/queries";

import './styles.css';
import Login from "./components/Login";

Amplify.configure(awsconfig);

const App = () => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateEvent = () => {
    API.graphql(graphqlOperation(createEvent, {
      input: {
        ems_id: "asdasd",
        name: "Knowladge2020",
        api_key: "120938029381203",
      }
    }))
    .then((res) => setData(res))
    .catch((error) => setError(error));
  }

  const handleGetEvents = () => {
    API.graphql(graphqlOperation(listEvents))
      .then((data) => setEvents(data));
  }

  if (loading) return <p>Loading...</p>;

  if (!user) return <Login />;
  console.log(user);
  return (
    <div>
      <p>attributes: {JSON.stringify(user.attributes)}</p>
      <button onClick={handleCreateEvent}>Create Event</button>
      {error && <p>{error.errors[0].message}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
      <p></p>
      <button onClick={handleGetEvents}>Get Events</button>
      <p>{JSON.stringify(events)}</p>
      <button onClick={() => Auth.signOut().then(() => location.reload())}>Logout</button>
    </div>
  );
}

export default App;