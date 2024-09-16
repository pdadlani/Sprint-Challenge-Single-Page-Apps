import React from 'react';
import { Card, Icon } from 'semantic-ui-react'


export default function LocationCard (props) {
  const locationData = props.locationData;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{locationData.name}</Card.Header>
        {/* <Card.Meta>{characterData.species} {characterData.status}</Card.Meta> */}
        <Card.Description>
          {locationData.type} - 
          {locationData.dimension}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name='user' />
          {locationData.residents.length} Residents
        </div>
      </Card.Content>
    </Card>
  )
}
