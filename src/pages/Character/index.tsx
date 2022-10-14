import { memo, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCharacters } from 'context/CharactersContext';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { ImgContainer } from './style';

const Character: React.FC = () => {
  const { character, isLoading, error, fetchCharacter } = useCharacters();
  const { id } = useParams();
  const setTitle = useTitle();

  useEffect(() => {
    setTitle('character');
    if (id) fetchCharacter(id);
  }, [setTitle, fetchCharacter, id]);

  return (
    <>
      <Header />
      <main className="flex-grow-1">
        {isLoading && <p>Loading...</p>}
        {error && <h2 className="text-center">{error}</h2>}
        {!isLoading && !error && character && (
          <>
            <ImgContainer coverImage={getImageUrl(character.thumbnail)}>
              <Container>
                <h2 className="h1 text-light text-center pt-3">
                  {character.name}
                </h2>
                <p className="text-light text-center mt-3">
                  {character.description}
                </p>
                <p className="text-light mt-3">
                  Comics avaliable: {character.comics.available}
                </p>
                {character.comics.items.map((comic) => (
                  <p className="text-light">{comic.name}</p>
                ))}
              </Container>
            </ImgContainer>
            <Container>
              <div className="d-flex justify-content-end">
                {character.urls.map((charUrl) => (
                  <div>
                    <a
                      className="text-decoration-none text-danger me-3"
                      href={charUrl.url}
                    >
                      {charUrl.type}
                    </a>
                  </div>
                ))}
              </div>
            </Container>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default memo(Character);
