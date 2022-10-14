import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useComics } from 'context/ComicsContext';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { getImageUrl } from 'helpers';

import useTitle from 'hooks/useTitle';

import { BackgroundBlur, ImgCover } from './style';

const Comic: React.FC = () => {
  const { comic, isLoading, error, fetchComic } = useComics();
  const { id } = useParams();
  const setTitle = useTitle();

  useEffect(() => {
    setTitle('comic');
    fetchComic(Number(id));
  }, [setTitle, fetchComic, id]);
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        {isLoading && <p className="text-center mt-5">Loading...</p>}
        {error && <h2 className="text-center">{error}</h2>}
        {!isLoading && !error && comic && (
          <ImgCover coverImage={getImageUrl(comic.thumbnail)}>
            <BackgroundBlur>
              <Container>
                <Row className=" row-cols-1 row-cols-md-2 py-3">
                  <Col className="">
                    <img
                      className="img-fluid"
                      src={getImageUrl(comic.thumbnail)}
                      alt={comic.title}
                    />
                  </Col>
                  <Col className="text-light">
                    <h2>{comic?.title ?? 'Loading...'}</h2>
                    <p>{comic?.description}</p>
                    <p className="text-end">{comic?.pageCount} Pages</p>
                  </Col>
                </Row>
              </Container>
            </BackgroundBlur>
          </ImgCover>
        )}
      </main>
      <Footer />
    </>
  );
};

export default memo(Comic);
