import { memo } from 'react';

import { Card, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getImageUrl, strToSlug } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { CardContainer, Triangle } from './style';

interface ICharacterCardProps {
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <CardContainer className="w-100">
      <Triangle />
      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
        <Ratio className="border border-dark" aspectRatio="1x1">
          <Card.Img variant="top" src={getImageUrl(character.thumbnail)} />
        </Ratio>
      </Link>
      <Card.Body className="py-3">
        <Card.Title>
          <Link
            className="text-decoration-none text-light"
            to={`/characters/${character.id}/${strToSlug(character.name)}`}
          >
            {character.name}
          </Link>
        </Card.Title>
      </Card.Body>
    </CardContainer>
  );
};

export default memo(CharacterCard);
