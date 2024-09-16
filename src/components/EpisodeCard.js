import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const EpisodeCard = (props) => {
  const episodeData = props.episodeData;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episodeData.name}</Card.Header>
        <Card.Meta>{episodeData.episode}</Card.Meta>
        <Card.Description>
          Air Date: {episodeData.air_date}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name='user' />
          {episodeData.characters.length} Characters
        </div>
      </Card.Content>
    </Card>
  );
}


export default EpisodeCard;