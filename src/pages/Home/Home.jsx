import React from 'react';
import { useState, useEffect } from 'react';

import getImages from '../../api/getImages';

import Searchbar from '../../components/Searchbar/Searchbar';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import LoadMore from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { quantum } from 'ldrs';

import Notiflix from 'notiflix';

import { TextContainer, Text } from './Home.styled';

const Home = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleSubmitForm = newQuery => {
    if (newQuery === query) {
      Notiflix.Notify.info(
        `Изображения по запросу  ${newQuery} уже отображены.`
      );
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalHits(null);
    setError(null);
    setLoading(false);
    setShowModal(false);
    setModalImg(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = img => {
    setModalImg(img.largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  quantum.register('list-loader');

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetch() {
      setLoading(true);

      try {
        const data = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [query, page]);

  return (
    <>
      <Searchbar onSubmit={handleSubmitForm} />

      {totalHits === 0 && (
        <TextContainer>
          <Text>По вашему запросу {query} ни чего не найдено</Text>
        </TextContainer>
      )}

      {error && (
        <TextContainer>
          <Text>{error}</Text>
        </TextContainer>
      )}

      {images && <ImageGallery images={images} onClick={openModal} />}

      {loading && <list-loader size="130" speed="1.8" color="#3f51b5" />}

      {totalHits / images.length > page && (
        <LoadMore onClick={handleLoadMore} />
      )}

      {showModal && (
        <Modal onClose={closeModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
    </>
  );
};
export default Home;
