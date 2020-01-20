import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const GET_USERS = gql`
  {
    users {
      id
      username
      email
    }
  }
`;

console.log(process.env.APIKEY);
console.log(process.env.CLIENTID);

const ExchangeRates = () => (
  <Query query={GET_USERS} >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        console.log(data);

      return (
        <div>Looking in to the logs</div>
      )
    }}
  </Query>
);

export default ExchangeRates;
