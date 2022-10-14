import { memo } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getImageUrl, strToSlug } from 'helpers';

import { ComicType } from 'types/ComicType';

import { CardContainer, Cover, Triangle } from './style';

interface IComicCardProps {
  comic: ComicType;
}

const ComicCard: React.FC<IComicCardProps> = ({ comic }) => {
  return (
    <CardContainer className="w-100">
      <Triangle />
      <Link to={`/comics/${comic.id}/${strToSlug(comic.title)}`}>
        <Cover className="border border-dark">
          <Card.Img variant="top" src={getImageUrl(comic.thumbnail)} />
        </Cover>
      </Link>
      <Card.Body className="py-3">
        <Card.Title>
          <Link
            className="text-decoration-none text-light"
            to={`/comics/${comic.id}/${strToSlug(comic.title)}`}
          >
            {comic.title}
          </Link>
        </Card.Title>
      </Card.Body>
    </CardContainer>
  );
};

export default memo(ComicCard);
