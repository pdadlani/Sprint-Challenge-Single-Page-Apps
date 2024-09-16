import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = (props) => {
  const characterData = props.characterData;
  return (
    <Card>
      <Image src={characterData.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{characterData.name}</Card.Header>
        <Card.Meta>{characterData.species} {characterData.status}</Card.Meta>
        <Card.Description>
          Location: {characterData.location.name}
          Origin: {characterData.origin.name}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name='user' />
          Episodes
        </div>
      </Card.Content>
    </Card>
  );
}


export default CharacterCard;